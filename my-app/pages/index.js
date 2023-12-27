import { useContext, useEffect, useState } from "react";
import ItemContext from "@/Context/ItemContext";
import { Oval } from "react-loader-spinner";
import BookListPage from "@/components/BookListPage";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const ctx = useContext(ItemContext);
  const [loading, isLoading] = useState(true);

  const getBooks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/books").then((res) =>
        res.json()
      );
      ctx.setBooks(res.books);
      ctx.setFilteredArr(res.books);
      isLoading(false);

      console.log(ctx);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center  w-screen h-screen">
          <Oval
            height={80}
            width={80}
            color="orange-200"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#2658ceeb"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="h-screem bg-orange-200">
          <BookListPage />
        </div>
      )}
    </>
  );
}
