import { UpdateUserInformation } from "../../application/updateUserInformation.application";
import { UserRepository } from "../repositories/user.repository";
import { GetUser } from "../../application/getUser.application";

import { Request, Response } from "express";
import { Router } from "express";

import jwt from "jsonwebtoken";

const router = Router();

// obtener información de un usuario por su userId
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
    };

    return res.status(200).json({ user: data });
  } catch (error) {
    console.log("GET USER BY ID");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/user", async (req: Request, res: Response) => {
  try {
    const { firstName, middleName, lastName, maternalLastName } = req.body;

    const { myToken } = req.cookies;
    let decoded: any;

    try {
      decoded = jwt.verify(myToken, process.env.SECRET_TOKEN_KEY!);
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }

    const userId = decoded.userId;
    const getUser = await new GetUser(new UserRepository()).getUser(userId);

    if (getUser.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    if (!firstName && !middleName && !lastName && !maternalLastName) {
      return res
        .status(400)
        .json({ message: "No information provided for update" });
    }

    const data = {
      firstName: firstName !== undefined ? firstName : getUser[0].firstName,
      middleName: middleName !== undefined ? middleName : getUser[0].middleName,
      lastName: lastName !== undefined ? lastName : getUser[0].lastName,
      maternalLastName:
        maternalLastName !== undefined
          ? maternalLastName
          : getUser[0].maternalLastName,
      email: getUser[0].email,
    };

    const updateUser = new UpdateUserInformation(new UserRepository());
    const userInformation = await updateUser.updateUserInformation(
      data,
      userId
    );

    if (!userInformation) {
      return res.status(422).json({ message: "Please complete all fields" });
    }

    const dataResponsive = {
      firstName: userInformation.firstName,
      middleName: userInformation.middleName,
      lastName: userInformation.lastName,
      maternalLastName: userInformation.maternalLastName,
      email: userInformation.email,
    };

    return res.status(200).json({
      message: "the user was successfully updated",
      user: dataResponsive,
    });
  } catch (error) {
    console.log("UPDATE USER INFORMATION");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
