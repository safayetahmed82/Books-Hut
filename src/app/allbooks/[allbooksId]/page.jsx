import React from "react";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import books from "@/data/books.json";
import BorrowButton from "./borrow-button";

const BooksDetails = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { allbooksId } = await params;
  const book = books.find((book) => book.id.toString() === allbooksId);

  return (
    <div className="min-h-screen bg-[#F5F1E8] px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-md sm:p-12">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Book Image */}
          <div className="flex items-center justify-center rounded-xl bg-[#F5F1E8] p-8">
            <img
              src={book.image_url}
              alt={book.title}
              className="max-h-[450px] w-auto object-contain"
            />
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-widest text-[#B8925A]">
              Book Details
            </p>

            <h1
              className="text-4xl"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 500,
              }}
            >
              {book.title}
            </h1>

            <p className="mt-3 text-lg text-[#6B7A70]">by {book.author}</p>

            <div className="mt-6">
              <span className="text-lg text-[#B8925A]">★ {book.rating}</span>

              <p className="mt-2 text-sm text-[#6B7A70]">
                Available:{" "}
                <span className="font-medium text-[#3F5C4A]">
                  {book.available_quantity}
                </span>
              </p>
            </div>

            <p className="mt-6 leading-7 text-[#555]">{book.description}</p>

            <BorrowButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
