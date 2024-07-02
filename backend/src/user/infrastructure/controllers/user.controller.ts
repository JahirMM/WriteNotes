import { Router } from "express";
import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { GetUser } from "../../application/getUser.application";
import { UpdateUserInformation } from "../../application/updateUserInformation.application";

const router = Router();

// obtener información de un usuario por su userId
router.get("/user/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const getUser = new GetUser(new UserRepository());
    const user = await getUser.getUser(userId);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    console.log("GET USER BY ID");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/user/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const { firstName, middleName, lastName, maternalLastName } = req.body;
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
      email: getUser[0].email,
      password: getUser[0].password,
      firstName: firstName !== undefined ? firstName : getUser[0].firstName,
      middleName: middleName !== undefined ? middleName : getUser[0].middleName,
      lastName: lastName !== undefined ? lastName : getUser[0].lastName,
      maternalLastName:
        maternalLastName !== undefined
          ? maternalLastName
          : getUser[0].maternalLastName,
    };

    const updateUser = new UpdateUserInformation(new UserRepository());
    const userInformation = await updateUser.updateUserInformation(
      data,
      userId
    );

    if (!userInformation) {
      return res.status(422).json({ message: "Please complete all fields" });
    }

    return res.status(200).json({
      message: "the user was successfully updated",
      user: userInformation,
    });
  } catch (error) {
    console.log("UPDATE USER INFORMATION");
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
