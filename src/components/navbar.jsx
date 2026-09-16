"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Fraunces, Poppins } from "next/font/google";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

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
        <div className=" flex navbar-end gap-4 items-center">
          {isPending ? null : session ? (
            <>
              <span className="px-4 py-2 text-[#3F5C4A] font-medium">
                {session.user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded bg-[#3F5C4A] text-white hover:bg-[#334B3D]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
