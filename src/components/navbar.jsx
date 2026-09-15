"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Fraunces, Poppins } from "next/font/google";
import Link from "next/link";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
// className={poppins.className}

const Navbar = () => {
  const pathName = usePathname();
  return (
    <>
      <nav className="flex items-center justify-between border-b border-[#D9D3C5] px-6 py-5   w-full mx-auto bg-[#F6F3EC]">
        <div className=" navbar-start text-2xl font-semibold">
          <span className={`${poppins.className} text-[#3F5C4A]`}>Books</span>
          <span className={`${poppins.className} text-[#B8925A]`}>Hut</span>
        </div>
        <div className=" flex navbar-center  ">
          <li className=" flex gap-10">
            <Link
              className={
                pathName === "/home"
                  ? "text-white bg-[#3F5C4A] px-4 py-2 rounded"
                  : "px-4 py-2 "
              }
              href="/home"
            >
              Home
            </Link>
            <Link
              className={
                pathName === "/allbooks"
                  ? "text-white bg-[#3F5C4A] px-4 py-2 rounded  "
                  : "px-4 py-2 "
              }
              href="/allbooks"
            >
              All Books
            </Link>
            <Link
              className={
                pathName === "/profile"
                  ? "text-white bg-[#3F5C4A] px-4 py-2 rounded"
                  : "px-4 py-2 "
              }
              href="/profile"
            >
              Profile
            </Link>
          </li>
        </div>
        <div className=" flex navbar-end gap-4">
          <Link
            className={
              pathName === "/login"
                ? "text-white bg-[#3F5C4A] px-4 py-2 rounded"
                : "px-4 py-2 "
            }
            href="/login"
          >
            Login
          </Link>
          <Link
            className={
              pathName === "/register"
                ? "text-white bg-[#3F5C4A] px-4 py-2 rounded"
                : "px-4 py-2 "
            }
            href="/register"
          >
            Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
