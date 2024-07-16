import { Request, Response } from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";

import { UserRepository } from "../../../user/infrastructure/repositories/user.repository";
import { NoteRepository } from "../repositories/note.repository";

import { CreateNote } from "../../application/createNote.application";
import { GetANote } from "../../application/getANote.application";
import { GetNotes } from "../../application/getNotes.application";
import { GetUser } from "../../../user/application/getUser.application";
import { DeleteNote } from "../../application/deleteNote.application";
import { UpdateNote } from "../../application/updateNote.application";

const router = Router();

router.get("/note/:noteId", async (req: Request, res: Response) => {
  try {
    const noteId = req.params.noteId;
    const getNote = new GetANote(new NoteRepository());
    const note = await getNote.getAnote(noteId);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json({ note: note });
  } catch (error) {
    console.log("Error when obtaining a note.");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/notes", async (req: Request, res: Response) => {
  try {
    const { myToken } = req.cookies;
    const favorite = req.query.favorite;

    if (favorite !== "true" && favorite !== "false" && favorite !== undefined) {
      return res.status(400).json({ message: "Invalid value for favorite" });
    }

    let decoded: any;

    try {
      decoded = jwt.verify(myToken, process.env.SECRET_TOKEN_KEY!);
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }

    const userId = decoded.userId;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const getUser = new GetUser(new UserRepository());
    const user = await getUser.getUser(userId);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    let favoriteNotes: boolean | undefined;
    if (typeof favorite === "string") {
      favoriteNotes = favorite === "true";
    } else favoriteNotes = undefined;

    const getNotesInstance = new GetNotes(new NoteRepository());
    const notes = await getNotesInstance.getNotes(userId, favoriteNotes);

    return res.status(200).json({ notes: notes, total: notes.length });
  } catch (error) {
    console.log("Error when getting notes.");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/note", async (req: Request, res: Response) => {
  try {
    const { userId, title, description, favorite } = req.body;

    if (!userId || !title || typeof favorite !== "boolean") {
      return res
        .status(400)
        .json({ message: "Incomplete data or incorrect format" });
    }

    const createNote = new CreateNote(new NoteRepository());

    const note = await createNote.createNote(
      userId,
      title,
      description,
      favorite
    );
    return res.status(200).json({ message: "Note successfully created", note });
  } catch (error) {
    console.log("Error when creating a note.");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/note/:noteId", async (req: Request, res: Response) => {
  try {
    const noteId = req.params.noteId;

    const getNote = new GetANote(new NoteRepository());
    const note = await getNote.getAnote(noteId);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    const deleteNote = new DeleteNote(new NoteRepository());
    const result = await deleteNote.deleteNote(noteId);

    if (result.deletedCount === 1) {
      return res.status(200).json({ message: "Note correctly deleted" });
    } else {
      return res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.log("Error when deleting a note.");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/note/:noteId", async (req: Request, res: Response) => {
  try {
    const noteId = req.params.noteId;
    const { title, description, favorite } = req.body;
    const getNote = await new GetANote(new NoteRepository()).getAnote(noteId);

    if (!getNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (!title && !description && favorite === undefined) {
      return res
        .status(400)
        .json({ message: "No information provided for update" });
    }

    const data = {
      title: title !== undefined ? title : getNote.title,
      description:
        description !== undefined ? description : getNote.description,
      favorite: favorite !== undefined ? favorite : getNote.favorite,
      userId: getNote.userId,
    };

    const updateNote = new UpdateNote(new NoteRepository());
    const noteInformation = await updateNote.updateNote(data, noteId);

    if (noteInformation) {
      return res.status(200).json({
        message: "The note has been updated correctly",
        note: noteInformation,
      });
    }

    return res.status(422).json({
      message: "Invalid value for 'favorite'. Must be a boolean",
    });
  } catch (error) {
    console.log("Error updating the note.");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
