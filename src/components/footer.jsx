import React from "react";
import { Fraunces, Poppins } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Footer = () => {
  return (
    <footer>
      {/* Top border */}
      <div className="border-t border-[#D9D3C4] flex justify-between gap-30">
        <div className="grid gap-8 px-6 py-12 sm:px-12 md:grid-cols-[1.4fr_1fr_1fr] w-13/14 mx-auto">
          <div className="text-2xl font-semibold">
            <span className={`${poppins.className} text-[#3F5C4A]`}>Books</span>
            <span className={`${poppins.className} text-[#B8925A]`}>Hut</span>

            <p className="text-sm text-[#6B7A70] mt-6">
              A small library for people who read slowly and return often.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-lg">Library</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#6B7A70]">
              <li>
                <a href="#">Browse catalog</a>
              </li>
              <li>
                <a href="#">New arrivals</a>
              </li>
              <li>
                <a href="#">Opening hours</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-lg">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#6B7A70]">
              <li>hello@marginalia.example</li>
              <li>12 Elm Street</li>
            </ul>

            <div className="gap-3 sm:gap-4 ml-[-10]">
              {/* Instagram icon */}
              <a
                href="#"
                aria-label="Instagram"
                className="btn btn-circle btn-sm sm:btn-md bg-white text-[#1f4a3d] border-none hover:bg-white/90"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook icon */}
              <a
                href="#"
                aria-label="Facebook"
                className="btn btn-circle btn-sm sm:btn-md bg-white text-[#1f4a3d] border-none hover:bg-white/90"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.5 1.53-1.5H16.5V4.3c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9V10.5H8v3h2.42V21h3.08Z" />
                </svg>
              </a>

              {/* Twitter / X icon */}
              <a
                href="#"
                aria-label="Twitter / X"
                className="btn btn-circle btn-sm sm:btn-md bg-white text-[#1f4a3d] border-none hover:bg-white/90"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 4l7.5 9.5L4.5 20H7l5-5.5L16 20h4l-8-10L19.5 4H17l-4.7 5.2L8.5 4H4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-[#D9D3C4] ">
        <div className="w-13/14 mx-auto px-6 py-5 mr-5 text-sm text-[#8A9A87] ">
          © 2026 Marginalia Reading Room.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
