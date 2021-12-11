import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      view?: string;
    }
  }
}

export const setView = (view: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    req.view = view;
    next();
  };
};
