import ReadButton from "@/components/BookDetails/ReadButton";
import WishlistButton from "@/components/BookDetails/WishlistButton";
import { IBook } from "@/types/books_type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

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

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find((book: IBook) => book.bookId === parseInt(id));

  if (!book) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-2xl font-semibold">Book not found</h2>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-22">
      <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg md:grid-cols-1 lg:grid-cols-2">
        {/* Book Image */}
        <div className="flex items-center justify-center bg-gray-50 p-20 ">
          <div className="hover-3d cursor-crosshair">
            {/* content */}
            <figure className="max-w-100">
              <Image
                src={book.image}
                alt={book.bookName}
                width={340}
                height={460}
                className=" rounded-md object-cover shadow-xl"
              ></Image>
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* Book Information */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              {book.bookName}
            </h1>
            <Link href={"/books"}>
              <button className="btn btn-accent">Go back</button>
            </Link>
          </div>

          {/* Author */}
          <p className="mt-2 text-sm text-gray-600">
            By :{" "}
            <span className="font-medium text-gray-800">{book.author}</span>
          </p>

          {/* Category */}
          <p className="mt-5 text-sm text-gray-700">
            <span className="font-semibold">Category:</span> {book.category}
          </p>

          {/* Review */}
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-gray-900">Review:</h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Book Metadata */}
          <div className="my-6 border-t border-gray-200 pt-5">
            <div className="grid grid-cols-2 gap-y-4 text-sm">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-semibold text-gray-800">
                {book.totalPages}
              </span>

              <span className="text-gray-500">Publisher:</span>
              <span className="font-semibold text-gray-800">
                {book.publisher}
              </span>

              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-semibold text-gray-800">
                {book.yearOfPublishing}
              </span>

              <span className="text-gray-500">Rating:</span>
              <span className="font-semibold text-gray-800">
                ⭐ {book.rating}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <ReadButton book={book} />

            <WishlistButton book={book} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
