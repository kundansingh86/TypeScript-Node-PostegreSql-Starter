import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    if (req.view) {
      return res
        .status(err.statusCode)
        .render(req.view, { errors: err.serializeErrors() });
    }

    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
