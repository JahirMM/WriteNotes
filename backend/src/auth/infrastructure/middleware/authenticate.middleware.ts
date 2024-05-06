import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies[process.env.TOKEN_NAME!];

  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN_KEY!, (err: Error | null) => {
      if (err) {
        // Si el token no es válido, envía un mensaje de error
        return res.status(403).json({ message: "Por favor iniciar sesión" });
      }

      // Si el token es válido, permite que la solicitud continúe
      return next();
    });
  } else {
    // Si no hay token, envía un mensaje de error
    res.status(401).json({ message: "Por favor iniciar sesión" });
  }
};
