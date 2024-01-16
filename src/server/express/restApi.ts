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
    envVal: process.env.ENV_VALUE as string, // sample server-side env value
  };
  res.send(respObj);
});

app.use(express.static("./.local/vite/dist"));

// This is for SPA, but we don't need express to do this because Vite does it for us in dev, and nginx does it for us in prod (docker)
// app.get("*", (req: Request, res: Response) => {
//   res.sendFile("./.local/vite/dist/index.html", { root: "./" });
// });

export default app;
