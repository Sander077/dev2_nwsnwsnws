import express, { Request, Response } from "express";
import newsData from "./data/news.json";

interface NewsItem {
  slug: string;
  title: string;
  content: string;
  date: string;
}

const news: NewsItem[] = newsData as NewsItem[];

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { news });
});

router.get("/news/:slug", (req: Request, res: Response) => {

  const slug = req.params.slug;

  const article = news.find(n => n.slug === slug);

  if (!article) {
    return res.status(404).render("404");
  }

  res.render("detail", { article });

});

router.get("/add", (req: Request, res: Response) => {
  res.render("add");
});

router.post("/add", (req: Request, res: Response) => {

  const { title, slug, content } = req.body;

  const newArticle = {
    title,
    slug,
    content,
    date: new Date().toISOString().split("T")[0]
  };

  news.push(newArticle);

  res.redirect("/");
});

router.use((req: Request, res: Response) => {
  res.status(404).render("404");
});

export default router;