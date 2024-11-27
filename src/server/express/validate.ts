import { Request, Response, NextFunction } from "express";

const validatePostBody = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body || typeof req.body !== "object" || Object.keys(req.body).length === 0) {
    res.status(400).send("`body` must be an object containing one or more entries.");
  }
  next();
};

export { validatePostBody };
