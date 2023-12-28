import Book from "@/models/book";
import connectMongo from "@/utils/connectMongo";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addBook(req, res) {
  try {
    await connectMongo();

    if (req.method === "GET") {
      const books = await Book.find({});
      res.status(200).json({ books: books });
    }

    if (req.method === "POST") {
      const {
        _id,
        publisher,
        title,
        description,
        image,
        comments,
        author,
        genre,
        age,
        pages,
        isbn,
        publishingYear,
        language,
      } = req.body;

      const newBook = await Book.create({
        _id,
        publisher,
        title,
        description,
        image,
        comments,
        author,
        genre,
        age,
        pages,
        isbn,
        publishingYear,
        language,
      });

      res.status(201).json({
        status: "success",
        message: "Data was created",
        book: newBook,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
