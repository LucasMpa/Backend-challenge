import { Request, Response } from "express";
import validatePasswordService from "../services/PasswordVerifyService";

export default function PasswordVerifyController(req: Request, res: Response) {

  const { password } = req.body;

  if (!password) {
    res.status(400).end();
  }

  return res.json(
    {
      status: validatePasswordService(password) ? "Sucess" : "Error: Make sure your password meets all requirements",
      isSecurePassword: validatePasswordService(password)
    }
  );
}
