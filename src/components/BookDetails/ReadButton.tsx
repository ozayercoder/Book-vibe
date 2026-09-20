"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books_type";
import React, { useContext } from "react";
import { MdReadMore } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const booksProvider = useContext(BooksContext);
  const { readBooks, setReadBooks } = booksProvider;
  const handleReadBook = () => {
    if (readBooks.some((readBook: IBook) => readBook.bookId === book.bookId)) {
      toast.error("You have already added to Read", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setReadBooks([...readBooks, book]);
    toast.success("You have added to Read", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <button
      onClick={handleReadBook}
      className="btn flex items-center gap-1 rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-success hover:text-black cursor-pointer"
    >
      Read <MdReadMore />
    </button>
  );
};

export default ReadButton;
