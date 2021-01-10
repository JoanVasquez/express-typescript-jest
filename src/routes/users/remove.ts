import UserService from "../../services/UserService";
import { onSuccess } from "../../utils/response";
import errors from "../../errors/errors.json";
import { NextFunction, Request, Response } from "express";

const userService: UserService = new UserService();
const serverError: Error = JSON.parse(JSON.stringify(errors.serverError));

export default (req: Request, res: Response, next: NextFunction): void => {
  const userId: number = parseInt(req.params.userId);
  if (!res.headersSent) {
    try {
      res.status(200).send(onSuccess({ removed: userService.remove(userId) }));
    } catch (ex) {
      next(serverError);
    }
  }
};
