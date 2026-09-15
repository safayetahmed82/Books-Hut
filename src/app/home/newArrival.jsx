import React from "react";
import Image from "next/image";

const NewArrival = async () => {
  const res = await fetch("http://localhost:3000/books.json");
  const books = await res.json();
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
            <div key={book.id} className="flex flex-col">
              
              <Image
                src={book.image_url}
                alt={book.title}
                width={200}
                height={200}
                className="w-full object-cover"
              />
              <h3
                className="text-lg"
                style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
              >
                {book.title}
              </h3>
              <div className="mb-3 mt-1 text-sm text-[#6B7A70]">
                {book.author}
              </div>
              <a
                href="#"
                className="w-fit border-b border-[#B8925A] pb-0.5 text-sm text-[#3F5C4A]"
              >
                Borrow
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewArrival;
