import dotenv from "dotenv";
dotenv.config();
import { createServer } from "http";
import app from "./restApi.ts";
import { commonExample } from "@/utils/utils.ts";
// import { createWebSocketServer } from "path/to/websocket";

commonExample();

const server = createServer();

server.on("request", app);
// createWebSocketServer(server);

// hard-coded port for simplicity until more flexibility needed
server.listen(9001, () => {
  console.log(`API v1 (re)started`);
});
