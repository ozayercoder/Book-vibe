"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books_type";
import React, { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { Bounce, toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBook }) => {
  const booksProvider = useContext(BooksContext);
  const { wishList, setWishList } = booksProvider;
  const handleWishList = () => {
    if (wishList.some((wishBook: IBook) => wishBook.bookId === book.bookId)) {
          toast.error("You have already added to Wishlist", {
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
    setWishList([...wishList, book]);
    toast.success("You have added to Wishlist", {
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
      onClick={handleWishList}
      className="btn btn-success flex items-center gap-1 rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition  cursor-pointer "
    >
      WishList <IoMdAdd />
    </button>
  );
};

export default WishlistButton;
