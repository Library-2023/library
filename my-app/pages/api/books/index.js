import Book from "@/models/book";
import connectMongo from "@/utils/connectMongo";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addFood(req, res) {
  try {
    await connectMongo();
    if (req.method == "GET") {
      const books = await Book.find({});
      res.status(200).json({ books: books });
    }
    if (req.method == "POST") {
      const {
        publisher,
        title,
        description,
        image,
        likes,
        dislikes,
        comments,
        category,
      } = await req.json();
      await Book.create({
        category,
        title,
        description,
        publisher,
        image,
        likes,
        dislikes,
        comments,
      });
      res.status(201).json({
        status: "success",
        message: "data was created",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
