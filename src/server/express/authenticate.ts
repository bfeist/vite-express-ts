import { Request, Response, NextFunction } from "express";
import { sign, verify } from "jsonwebtoken";
import { pick } from "@/utils/pick";

export type RequestWithUser = Request & { user?: Pick<User, "username"> };

const generateAccessToken = (username: string) =>
  sign({ username }, process.env.SECRET_KEY!, { expiresIn: "1h" });

const authenticateToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401);
  }

  try {
    const decoded = verify(token!, process.env.SECRET_KEY!);
    req.user = pick(decoded as User, ["username"]);
  } catch (error) {
    res.status(403);
  }
  next();
};

export { generateAccessToken, authenticateToken };
