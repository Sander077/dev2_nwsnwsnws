import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname,"views", "index.html"))
})

router.get("/detail", (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname,"views", "detail.html"))
})

export default router;