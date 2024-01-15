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

// default route for serving flat files built by Vite
// app.get("/", (req: Request, res: Response) => {
//   res.sendFile("index.html", { root: "./.local/vite/dist" });
// });

app.use(express.static("./.local/vite/dist"));

export default app;
