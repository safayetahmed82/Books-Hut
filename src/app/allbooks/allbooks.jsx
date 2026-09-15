"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "./sidebar";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("http://localhost:3000/books.json");
      const data = await res.json();

      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex w-11/12 mx-auto flex-col gap-8 py-10 lg:flex-row">
      <Sidebar setCategory={setCategory} setSearch={setSearch} />

      <div className="flex-1">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {books
            .filter(
              (book) =>
                (category === "All" || book.category === category) &&
                book.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map((book) => (
              <div
                key={book.id}
                className="overflow-hidden rounded-xl border border-[#E2DED4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-60 items-center justify-center bg-[#F5F1E8] p-4">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    width={150}
                    height={210}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="p-4">
                  <h3
                    className="text-lg"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontWeight: 500,
                    }}
                  >
                    {book.title}
                  </h3>

                  <p className="mt-1 text-sm text-[#6B7A70]">{book.author}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-[#B8925A]">
                        ★ {book.rating}
                      </span>

                      <p className="mt-4 text-sm text-[#6B7A70]">
                        Available:{" "}
                        <span className="font-medium text-[#3F5C4A]">
                          {book.available_quantity}
                        </span>
                      </p>
                    </div>

                    <Link
                      href={`/allbooks/${book.id}`}
                      className="btn bg-[#3F5C4A] text-white"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
