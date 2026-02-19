import express, { Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
dotenv.config();

app.use(morgan("dev"));

app.use("/", (req: Request, res: Response, next:NextFunction) => {
  res.send("NOT FOUND!!!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on PORT: " + port + "🚀🚀🚀");
});
