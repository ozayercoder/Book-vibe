"use client";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books_type";

import React, { useContext, useState } from "react";

const ListedBooksPage = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  console.log(readBooks, wishList);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortedReadbooks = sortBooks(readBooks);
  const sortedwishlistBooks = sortBooks(wishList);
  return (
    <div className="container mx-auto py-15">
      <div className="my-2 py-7 rounded-2xl bg-base-300 text-center">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Books</h2>
      </div>
      <div className="text-center py-7 my-5">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success"
        >
          <option disabled={true}>Sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"year"}>Pusblishe Year</option>
          <option value={"pages"}>Number of Pages</option>
        </select>
      </div>
      <div className="tabs tabs-lift tabs-lg my-7 px-3  w-full">
        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${sortedReadbooks.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-6 space-y-3">
          {sortedReadbooks.length > 0 ? (
            sortedReadbooks.map((book: IBook, index: number) => {
              return (
                <ListedBooksCard key={index} book={book}></ListedBooksCard>
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>

        {/* Wishlist */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist (${sortedwishlistBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-6 space-y-3">
          {sortedwishlistBooks.length > 0 ? (
            sortedwishlistBooks.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                ></ListedBooksCard>
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              Wishlist is Empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
