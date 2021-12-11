import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import {
  BadRequestError,
  CustomError,
  RequestValidationError,
} from "../errors";

import { Password } from "../utils/password";
//import { User } from "../models/user";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.render("home", { title: "Hello World", name: "Jhon Smith" });
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await check("email", "Email must be valid").isEmail().run(req);
    await check("password", "You must supply a password")
      .trim()
      .notEmpty()
      .run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;
    console.log(req.body);
    res.render("home", {
      title: "My Starter Template",
      name: "Jhon Smith",
      email: email,
      password: password,
    });
  } catch (error) {
    const err = error as CustomError;
    res.status(err.statusCode).render("home", {
      errors: err.serializeErrors(),
    });
  }
  // const existingUser = await User.findOne({ email });
  // if (!existingUser) {
  //   throw new BadRequestError("Invalid credentials");
  // }

  // const passwordsMatch = await Password.compare(
  //   existingUser.password,
  //   password
  // );
  // if (!passwordsMatch) {
  //   throw new BadRequestError("Invalid Credentials");
  // }

  // // Generate JWT
  // const userJwt = jwt.sign(
  //   {
  //     id: existingUser.id,
  //     email: existingUser.email,
  //   },
  //   process.env.JWT_KEY!
  // );

  // // Store it on session object
  // req.session = {
  //   jwt: userJwt,
  // };

  // res.status(200).send(existingUser);
});

export { router as userOnboardingController };
