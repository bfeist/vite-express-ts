import express from "express";
import { ROOT_URL } from "../constants";
import { commonExample } from "../utils";
import { Request, Response } from "express";
const PORT = 5000,
  app = express();

commonExample();

app.get(ROOT_URL, (req: Request, res: Response) => {
  const respObj: RespExampleType = {
    id: 1,
    text: "server response object",
  };
  res.send(respObj);
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
