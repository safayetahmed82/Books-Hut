import React from "react";
import Image from "next/image";
import Link from "next/link";
import books from "@/data/books.json";

const NewArrival = () => {
  const topBooks = books.filter((book) => book.rating >= 4.9);
  return (
    <>
      <section className="px-6 py-16 sm:px-12 w-13/14 mx-auto">
        <div className="mb-9 flex items-baseline justify-between">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
          >
            New on the shelf
          </h2>
          <span className="text-sm text-[#6B7A70]">4 of 12 titles</span>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:flex justify-between">
          {topBooks.map((book) => (
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
                  <span className="text-sm text-[#B8925A]">
                    ★ {book.rating}
                  </span>

                  <Link
                    href={`/allbooks/${book.id}`}
                    className="text-sm font-medium text-[#3F5C4A]"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewArrival;
