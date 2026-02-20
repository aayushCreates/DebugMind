import express, { Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import authRouter from "./routes/auth.routes";
import errorRouter from "./routes/error.routes";

const app = express();
dotenv.config();

app.use(morgan("dev"));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/error', errorRouter);

app.use("/", (req: Request, res: Response, next:NextFunction) => {
  res.send("NOT FOUND!!!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on PORT: " + port + "🚀🚀🚀");
});
