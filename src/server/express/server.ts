import dotenv from "dotenv";
dotenv.config();
import { createServer } from "http";
import app from "./restApi";
import { commonExample } from "@/utils";
// import { createWebSocketServer } from "path/to/websocket";

commonExample();

const server = createServer();

server.on("request", app);
// createWebSocketServer(server);

// hard-coded port to 3000 for simplicity until more flexibility needed
server.listen(5000, () => {
  console.log(`API v1 (re)started`);
});
