import { Router } from "express";
import { Request, Response } from "express";
import { AuthRepository } from "../respositories/auth.repository";
import { Login } from "../../application/login.application";

import { serialize, CookieSerializeOptions } from "cookie";

import dotenv from "dotenv";
import { CreateAccount } from "../../application/createAccount.application";

dotenv.config();
const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const loginService = new Login(new AuthRepository());
    const token = await loginService.login(email, password);
    if (token) {
      const cookieConfig: CookieSerializeOptions = {
        httpOnly: true,
        sameSite: "none",
        path: "/",
      };
      const cookie = serialize(process.env.TOKEN_NAME!, token, cookieConfig);
      res.setHeader("Set-Cookie", cookie);
      res.status(200).json({ message: "Successful login.", token });
    } else {
      res
        .status(401)
        .json({ message: "Sorry, incorrect credentials. Please try again." });
    }
  } catch (error) {
    console.log("Error when trying to log in.");
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/logOut", (_req, res: Response) => {
  const tokenName = process.env.TOKEN_NAME;

  if (!tokenName) {
    return res.json({ message: "No hay token." });
  }

  const cookieConfig: CookieSerializeOptions = {
    httpOnly: true,
    sameSite: "none",
    maxAge: 0,
    path: "/",
  };

  const cookie = serialize(tokenName, "", cookieConfig);

  res.setHeader("Set-Cookie", cookie);

  return res.json({ message: "Cierre de sesión exitoso" });
});

router.post("/createAccount", async (req: Request, res: Response) => {
  const data = req.body;
  const createUser = new CreateAccount(new AuthRepository());
  const newUser = await createUser.createAccount(data);
  if (!newUser) {
    return res.json({ message: "datos inválidos o campos incompletos" });
  }

  return res.json({ message: "Usuario creado exitosamente", user: newUser });
});

export default router;
