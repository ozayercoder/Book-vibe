"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books_type";
import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};
const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);
  // #region Sample data
  const data = readBooks.map((book: IBook, index: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: book.totalPages,
      amt: book.totalPages,
    };
  });

  // #endregion
  return (
    <div className="mx-3 md:container md:mx-auto py-10 flex items-center justify-center my-25 bg-base-200 rounded-2xl ">
      {readBooks.length > 0 ? (
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Bar dataKey="uv" shape={TriangleBar} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
        </BarChart>
      ) : (
        <p className="text-3xl text-gray-600">No read books to display.</p>
      )}
    </div>
  );
};

export default ReadBooks;
