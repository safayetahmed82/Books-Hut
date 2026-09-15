// import React from "react";
// import Image from "next/image";
// import Sidebar from "./sidebar";

// const AllBooks = async () => {
//   const res = await fetch("http://localhost:3000/books.json");
//   const books = await res.json();
//   return (
//     <>
//       <div className="flex w-11/12 mx-auto gap-8 py-10">
//         <Sidebar />

//         <div className="flex-1">
//           <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//             {books.map((book) => (
//               <div
//                 key={book.id}
//                 className="overflow-hidden rounded-xl border border-[#E2DED4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//               >
//                 <div className="flex h-50 items-center justify-center bg-[#F5F1E8] p-5">
//                   <Image
//                     src={book.image_url}
//                     alt={book.title}
//                     width={180}
//                     height={250}
//                     className="h-full w-auto object-contain"
//                   />
//                 </div>

//                 <div className="p-5">
//                   <h3
//                     className="text-lg"
//                     style={{
//                       fontFamily: "var(--font-fraunces)",
//                       fontWeight: 500,
//                     }}
//                   >
//                     {book.title}
//                   </h3>

//                   <p className="mt-1 text-sm text-[#6B7A70]">{book.author}</p>

//                   <div className="mt-4 flex items-center justify-between">
//                     <span className="text-sm text-[#B8925A]">
//                       ★ {book.rating}
//                     </span>

//                     <a
//                       href="#"
//                       className="text-sm font-medium text-[#3F5C4A] hover:text-[#B8925A]"
//                     >
//                       Borrow →
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllBooks;

import AllBooks from "./allbooks";

const Page = () => {
  return <AllBooks />;
};

export default Page;
