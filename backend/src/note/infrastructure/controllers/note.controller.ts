import { Router } from "express";
import { Request, Response } from "express";

import { NoteRepository } from "../repositories/note.repository";

import { GetNotes } from "../../application/getNotes.application";
import { GetANote } from "../../application/getANote.application";
import { CreateNote } from "../../application/createNote.application";
import { DeleteNote } from "../../application/deleteNote.application";
import { UpdateNote } from "../../application/updateNote.application";
import { GetFavoriteNotes } from "../../application/getFavoriteNotes.application";
import { GetUser } from "../../../user/application/getUser.application";
import { UserRepository } from "../../../user/infrastructure/repositories/user.repository";

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

router.get("/notes/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const getUser = new GetUser(new UserRepository());
    const user = await getUser.getUser(userId);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    const getNotesInstance = new GetNotes(new NoteRepository());

    const notes = await getNotesInstance.getNotes(userId);

    return res.status(200).json({ notes: notes, total: notes.length });
  } catch (error) {
    console.log("Error when getting notes.");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/favoriteNotes/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const getUser = new GetUser(new UserRepository());
    const user = await getUser.getUser(userId);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    const getFavoriteNotes = new GetFavoriteNotes(new NoteRepository());
    const favoriteNotes = await getFavoriteNotes.getFavoritesNotes(userId);

    return res
      .status(200)
      .json({ favoriteNotes: favoriteNotes, total: favoriteNotes.length });
  } catch (error) {
    console.log("Error when getting favorite notes.");
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

    const data = {
      title: title || getNote.title,
      description: description || getNote.description,
      favorite: favorite || getNote.favorite,
      userId: getNote.userId,
    };

    const updateNote = new UpdateNote(new NoteRepository());
    const noteInformation = await updateNote.updateNote(data, noteId);

    console.log(data);

    return res
      .status(200)
      .json({
        message: "The note has been updated correctly",
        note: noteInformation,
      });
  } catch (error) {
    console.log("Error updating the note.");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
