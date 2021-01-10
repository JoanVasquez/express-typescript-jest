import { Response, Request } from "express";
import Error from "../models/Error";

export default (error: Error, req: Request, res: Response): void => {
  if (!res.headersSent) {
    res.status(error.status).send({
      success: false,
      status: error.status,
      error: error.message || "Unknown error in the server",
    });
  }
};
