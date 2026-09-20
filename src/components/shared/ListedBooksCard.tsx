import { IBook } from "@/types/books_type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt, FaRegFileAlt, FaUserFriends } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const ListedBooksCard = ({ book }: { book: IBook }) => {
  return (
    <div
      key={book.bookId}
      className="flex w-full gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      {/* Book Image */}
      <div className="flex w-28 shrink-0 items-center justify-center rounded-lg bg-gray-100 p-3">
        <Image
          src={book.image}
          alt={book.bookName}
          width={100}
          height={150}
          className="h-36 w-auto object-contain"
        />
      </div>

      {/* Book Information */}
      <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
        <div>
          <h3 className="font-serif text-lg font-bold text-gray-900">
            {book.bookName}
          </h3>

          <p className="mt-1 text-xs text-gray-600">
            By - <span className="font-medium">{book.author}</span>
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold">Tag:</span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-100 px-2 py-1 text-green-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Metadata */}
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <MdCategory />
              Category: {book.category}
            </span>

            <span className="flex items-center gap-1">
              <FaRegCalendarAlt />
              Year of Publishing: {book.yearOfPublishing}
            </span>

            <span className="flex items-center gap-1">
              <FaUserFriends />
              Publisher: {book.publisher}
            </span>

            <span className="flex items-center gap-1">
              <FaRegFileAlt />
              Pages: {book.totalPages}
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">
            Category: {book.category}
          </span>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-600">
            Rating: {book.rating}
          </span>
          <Link href={`/books/${book.bookId}`}>
            <button className="rounded-full bg-green-600 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-green-700">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
