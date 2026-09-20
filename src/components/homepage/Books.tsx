import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books_type";

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-18 px-4">
      {/* Heading */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
          Explore Popular Books
        </p>

        <h2 className="text-4xl font-bold text-gray-900">
          Discover Your Next <span className="text-violet-600">Book</span>
        </h2>

        <p className="mt-3 max-w-2xl text-gray-500">
          Explore our collection of timeless classics, modern stories, and
          unforgettable reads.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0,6).map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
