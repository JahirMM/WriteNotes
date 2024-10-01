import { UpdateUserInformation } from "../../application/updateUserInformation.application";
import { UpdateUserPhoto } from "../../application/UpdateUserPhoto.application";
import { UserRepository } from "../repositories/user.repository";
import { GetUser } from "../../application/getUser.application";

import { serialize, CookieSerializeOptions } from "cookie";

import { Request, Response } from "express";
import { Router } from "express";

import jwt from "jsonwebtoken";

const router = Router();

router.get("/user", async (req: Request, res: Response) => {
  try {
    const { myToken } = req.cookies;
    let decoded: any;

    try {
      decoded = jwt.verify(myToken, process.env.SECRET_TOKEN_KEY!);
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }

    const userId = decoded.userId;
    const getUser = new GetUser(new UserRepository());
    const user = await getUser.getUser(userId);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    const data = {
      email: user[0].email,
      firstName: user[0].firstName,
      middleName: user[0].middleName,
      lastName: user[0].lastName,
      maternalLastName: user[0].maternalLastName,
      profilePicture: user[0].profilePicture,
    };

    return res.status(200).json({ user: data });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/userInformation", async (req: Request, res: Response) => {
  const updateUser = new UpdateUserInformation(new UserRepository());
  const { myToken } = req.cookies;

  let decoded: any;

  try {
    decoded = jwt.verify(myToken, process.env.SECRET_TOKEN_KEY!);
  } catch (error) {
    return res.status(403).json({ message: "Invalid token." });
  }

  const userId = decoded.userId;
  const getUser = await new GetUser(new UserRepository()).getUser(userId);

  if (getUser.length === 0) {
    return res.status(404).json({ message: "User not found." });
  }

  const { firstName, middleName, lastName, maternalLastName, email } = req.body;

  const data = {
    firstName: firstName !== undefined ? firstName : getUser[0].firstName,
    middleName: middleName !== undefined ? middleName : getUser[0].middleName,
    lastName: lastName !== undefined ? lastName : getUser[0].lastName,
    maternalLastName:
      maternalLastName !== undefined
        ? maternalLastName
        : getUser[0].maternalLastName,
    email: email !== undefined ? email : getUser[0].email,
    profilePicture: getUser[0].profilePicture,
  };

  try {
    const userInformation = await updateUser.updateUserInformation(
      data,
      userId
    );

    if (!userInformation) {
      return res.status(422).json({ message: "Please complete all fields." });
    }

    const dataResponsive = {
      firstName: userInformation.firstName,
      middleName: userInformation.middleName,
      lastName: userInformation.lastName,
      maternalLastName: userInformation.maternalLastName,
      email: userInformation.email,
      profilePicture: userInformation.profilePicture,
    };

    if (getUser[0].email !== email) {
      const key = process.env.SECRET_TOKEN_KEY;
      if (!key) {
        throw new Error("No key for creating the token");
      }

      const payload = {
        email: data.email,
        userId: getUser[0].userId,
      };

      const token = jwt.sign(payload, key, { expiresIn: "1h" });

      const cookieConfig: CookieSerializeOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60, // 1 hora
        path: "/",
      };

      const cookie = serialize(process.env.TOKEN_NAME!, token, cookieConfig);
      res.setHeader("Set-Cookie", cookie);
    }

    return res.status(200).json({
      message: "User information successfully updated.",
      user: dataResponsive,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
});

router.put("/userPhoto", (req: Request, res: Response) => {
  const updateUserPhoto = new UpdateUserPhoto(new UserRepository());

  updateUserPhoto.upload(req, res, async function (err: any) {
    if (err) {
      console.error("Error during file upload:", err);
      if (
        err.message ===
        "Invalid file type. Please upload a JPEG, PNG, or JPG image."
      ) {
        return res.status(422).json({
          message: "Please upload a valid image file (JPEG, PNG, JPG).",
        });
      }
      return res.status(422).json({ message: "Error uploading image." });
    }

    try {
      const { myToken } = req.cookies;

      let decoded: any;

      try {
        decoded = jwt.verify(myToken, process.env.SECRET_TOKEN_KEY!);
      } catch (error) {
        console.error("Invalid token:", error);
        return res.status(403).json({ message: "Invalid token." });
      }

      const userId = decoded.userId;
      const filename = req.file ? req.file.filename : null;

      console.log("File uploaded:", filename);

      const userInformation = await updateUserPhoto.updateUserPhoto(
        userId,
        filename
      );

      if (!userInformation) {
        console.error("Could not update photo for user:", userId);
        return res.status(422).json({ message: "Could not update photo." });
      }

      return res.status(200).json({
        message: "Profile photo successfully updated.",
        profilePicture: userInformation.profilePicture,
      });
    } catch (error) {
      console.error("Internal server error:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  });
});

export default router;
