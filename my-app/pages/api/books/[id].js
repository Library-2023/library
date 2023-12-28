import Book from "@/models/book";
import connectMongo from "@/utils/connectMongo";

export default async function editFood(req, res) {
  try {
    await connectMongo();
    if (req.method == "PUT") {
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
      } = await req.body;
      const updatedBook = await Book.findOneAndUpdate(
        { _id: _id },
        {
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
        },
        { new: true } // Return the updated document
      );
      console.log(updatedBook);

      res.status(200).json({
        status: "success",
        data: {
          updatedBook,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
