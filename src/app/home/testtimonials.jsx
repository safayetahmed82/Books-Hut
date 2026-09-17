"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const testimonials = [
  {
    name: "Amelia Carter",
    role: "Book Club Organizer",
    quote:
      "Completely changed how our club finds new reads. Borrowing is instant and the collection keeps growing every month.",
    rating: 5,
  },
  {
    name: "Rafiq Islam",
    role: "University Student",
    quote:
      "As a student on a budget, being able to borrow textbooks and novels digitally has saved me so much money and time.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Casual Reader",
    quote:
      "I love how clean and simple the site is. Finding a book by category takes seconds, and the whole experience feels premium.",
    rating: 4,
  },
  {
    name: "Rafiq Islam",
    role: "University Student",
    quote:
      "As a student on a budget, being able to borrow textbooks and novels digitally has saved me so much money and time.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Casual Reader",
    quote:
      "I love how clean and simple the site is. Finding a book by category takes seconds, and the whole experience feels premium.",
    rating: 4,
  },
  {
    name: "Meera Nair",
    role: "Freelance Writer",
    quote:
      "The interface feels calm and well designed, not cluttered like most book sites. Borrowing takes seconds and returns are hassle-free.",
    rating: 4,
  },
  {
    name: "Tom Bradley",
    role: "Retired Librarian",
    quote:
      "After decades in libraries, I'm genuinely impressed by how thoughtfully this platform handles categories and availability.",
    rating: 5,
  },
];
const Testimonials = () => {
  return (
    <section className="px-6 py-16 sm:px-12 w-13/14 mx-auto">
      <div className="mb-9 text-center">
        <h2
          className="text-2xl"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
        >
          What Our Readers Say
        </h2>
        <p className="mt-2 text-sm text-[#6B7A70]">
          Real experiences from real book lovers.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="!pb-14"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="h-full rounded-xl border border-[#E2DED4] bg-white p-6 shadow-sm">
              <div className="mb-3 text-[#B8925A]">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-sm leading-6 text-[#555]">"{t.quote}"</p>
              <div className="mt-5">
                <p
                  className="text-base"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 500,
                  }}
                >
                  {t.name}
                </p>
                <p className="text-xs text-[#6B7A70]">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #3f5c4a !important;
        }
      `}</style>
    </section>
  );
};


// const Testimonials = () => {
//   return (
//     <section className="px-6 py-16 sm:px-12 w-13/14 mx-auto">
//       <div className="mb-9 text-center">
//         <h2
//           className="text-2xl"
//           style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
//         >
//           What Our Readers Say
//         </h2>
//         <p className="mt-2 text-sm text-[#6B7A70]">
//           Real experiences from real book lovers.
//         </p>
//       </div>

//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={24}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         className="pb-14"
//       >
//         {testimonials.map((t, i) => (
//           <SwiperSlide key={i}>
//             <div className="h-full rounded-xl border border-[#E2DED4] bg-white p-6 shadow-sm">
//               <div className="mb-3 text-[#B8925A]">
//                 {"★".repeat(t.rating)}
//                 {"☆".repeat(5 - t.rating)}
//               </div>
//               <p className="text-sm leading-6 text-[#555]">"{t.quote}"</p>
//               <div className="mt-5">
//                 <p
//                   className="text-base"
//                   style={{
//                     fontFamily: "var(--font-fraunces)",
//                     fontWeight: 500,
//                   }}
//                 >
//                   {t.name}
//                 </p>
//                 <p className="text-xs text-[#6B7A70]">{t.role}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

export default Testimonials;
