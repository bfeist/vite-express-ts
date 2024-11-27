import express, { Application } from "express";
import cors from "cors";
import { Request, Response } from "express";
import { validatePostBody } from "./validate";
import { RequestWithUser, authenticateToken, generateAccessToken } from "./authenticate";
import { compare, hashSync } from "bcryptjs";
import Database from "better-sqlite3";

const app: Application = express();

const db = new Database("./database.db", { verbose: console.log });

db.exec(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`
);

app.use(express.json({ limit: "20mb" }));
app.use(
  cors({
    origin: "http://localhost:9000",
    credentials: true,
    exposedHeaders: ["Authorization"],
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/health", (req, res) => {
  res.send({ status: "ok" });
});

app.post(`/api/v1/login`, validatePostBody, async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const errors: string[] = [];
  if (!username || typeof username !== "string" || username.length === 0) {
    errors.push("`username` is required.");
  }

  if (!password || typeof password !== "string" || password.length === 0) {
    errors.push("`password` is required.");
  }

  if (errors.length > 0) {
    res.status(400).send(errors.join(" "));
    return;
  }

  try {
    const user = db.prepare<string, User>("SELECT * FROM users WHERE username = ?").get(username);

    if (!user) {
      res.status(404).send(`User not found with name ${username}`);
      return;
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    const token = generateAccessToken(user.username);
    res.json(token);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(`Error proccess request: ${error.message}`);
    } else {
      res.status(500).send(`Error proccess request`);
    }
  }
});

app.get(`/api/v1/me`, authenticateToken, (req: RequestWithUser, res: Response) => {
  try {
    const user = db
      .prepare<string, User>("SELECT username FROM users WHERE username = ?")
      .get(req.user!.username);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    res.json({
      username: user.username,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(`Error proccess request: ${error.message}`);
    } else {
      res.status(500).send(`Error proccess request`);
    }
  }
});

app.post(`/api/v1/user`, validatePostBody, async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || typeof username !== "string" || username.length === 0) {
    res.status(400).send("`username` is required.");
    return;
  }

  if (!password || typeof password !== "string" || password.length === 0) {
    res.status(400).send("`password` is required");
    return;
  }

  try {
    const existingUser = db
      .prepare<string, User>("SELECT * FROM users WHERE username = ?")
      .get(username);

    if (existingUser) {
      res.status(400).send(`User already exists with name ${username}`);
      return;
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(`Error retrieving user: ${error.message}`);
    } else {
      res.status(500).send(`Error retrieving user`);
    }
  }

  const hashedPassword = hashSync(password, 10);

  try {
    db.prepare("INSERT INTO users (username, password) VALUES (?, ?)").run(
      username,
      hashedPassword
    );
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(`Error adding user: ${error.message}`);
    } else {
      res.status(500).send(`Error adding user`);
    }
  }
});

app.use(express.static("./.local/vite/dist"));

export default app;
