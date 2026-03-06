import express, { Application, Request, Response } from 'express';
import path from "path"
import routes from "./routes";

const app: Application = express();
const PORT: number = 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
})