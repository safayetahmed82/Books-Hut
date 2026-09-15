import React from "react";

const Banner = () => {
  return (
    <>
      <div className="overflow-hidden bg-[#B8925A] text-[#3F5C4A] py-2">
        <div className="whitespace-nowrap animate-marquee">
          📚 10% OFF ON NEW ARRIVALS &nbsp; • &nbsp; 📚 10% OFF ON NEW ARRIVALS
          &nbsp; • &nbsp; 📚 10% OFF ON NEW ARRIVALS
        </div>
      </div>
      <section className="grid gap-10 border-b border-[#D9D3C4] px-6 py-16 sm:px-12 sm:py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center w-13/14 mx-auto">
        <div>
          <h1
            className="max-w-[12ch] text-4xl leading-[1.08] sm:text-5xl"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
          >
            Every book finds its reader.
          </h1>
          <p className="mt-6 max-w-[42ch] text-[#4A554D]">
            Borrow from a growing shelf of fiction, history, and ideas — no late
            fees, no fuss, just a library card and a good afternoon.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-sm bg-[#3F5C4A] px-6 py-3 text-sm text-[#F6F3EC]"
          >
            Get a Membership
          </a>
        </div>
        <div
          className="h-56 rounded shadow-[inset_0_0_0_1px_#D9D3C4] sm:h-64"
          style={{
            backgroundColor: "#1E2A24",
            backgroundImage:
              "repeating-linear-gradient(90deg, #3F5C4A 0px, #3F5C4A 34px, #B8925A 34px, #B8925A 40px, #6B4A3A 40px, #6B4A3A 68px, #1E2A24 68px, #1E2A24 76px, #8A9A87 76px, #8A9A87 104px)",
          }}
        />
      </section>
    </>
  );
};

export default Banner;
