import packageJSON from "../../../package.json";
import express, { Application } from "express";
import cors from "cors";
import { ROOT_URL } from "@/constants";
import { Request, Response } from "express";

const app: Application = express();

app.use(express.json({ limit: "20mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get(`${ROOT_URL}version`, (req: Request, res: Response) => {
  const respObj: RespExampleType = {
    id: 1,
    version: packageJSON.version,
  };
  res.send(respObj);
});

export default app;
