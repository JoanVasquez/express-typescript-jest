import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import user from "./routes/users/index";
import errorHandler from "./utils/errorHandler";
import errors from "./errors/errors.json";
import Error from "./models/Error";

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());
app.set("port", process.env.PORT || 8080);

app.use("/api/user", user);
app.use("*", (req: Request, res: Response) => {
  const noFound: Error = JSON.parse(JSON.stringify(errors.noFound));
  errorHandler(noFound, req, res);
});

app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Listening on port: ${app.get("port")}`);
});
