import UserService from "../../services/UserService";
import { onSuccess } from "../../utils/response";
import errors from "../../errors/errors.json";
import { NextFunction, Request, Response } from "express";
import User from "../../models/User";

const userService: UserService = new UserService();
const serverError: Error = JSON.parse(JSON.stringify(errors.serverError));

export default (req: Request, res: Response, next: NextFunction): void => {
  const user: User = req.body;
  if (!res.headersSent) {
    try {
      res.status(201).send(onSuccess(userService.save(user)));
    } catch (ex) {
      next(serverError);
    }
  }
};
