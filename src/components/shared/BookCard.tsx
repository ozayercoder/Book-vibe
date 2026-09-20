import { IBook } from "@/types/books_type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IBookCardProps {
  book: IBook;
}
const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Book Info */}
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3">
          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 font-semibold text-gray-800">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full badge badge-soft badge-primary px-3 py-1 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Publisher + Button */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="text-sm font-semibold text-gray-700">
              {book.publisher}
            </p>
          </div>
          <Link href={`/books/${book.bookId}`}>
            <button className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-success hover:text-black">
              Details →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
