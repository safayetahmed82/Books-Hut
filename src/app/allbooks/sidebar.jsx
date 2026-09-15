"use client";

const Sidebar = ({ setCategory }) => {
  return (
    <aside className="w-full rounded-xl border border-[#E2DED4] bg-[#F5F1E8] p-5 lg:w-50 h-90">
      <h2
        className="mb-5 text-xl"
        style={{
          fontFamily: "var(--font-fraunces)",
          fontWeight: 500,
        }}
      >
        Categories
      </h2>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => setCategory("All")}
          className="rounded-lg border border-[#D8D1C4] bg-white px-4 py-2 text-left text-sm font-medium text-[#3F5C4A] transition hover:bg-[#3F5C4A] hover:text-white"
        >
          All Books
        </button>

        <button
          onClick={() => setCategory("Fiction")}
          className="rounded-lg border border-[#D8D1C4] bg-white px-4 py-2 text-left text-sm font-medium text-[#3F5C4A] transition hover:bg-[#3F5C4A] hover:text-white"
        >
          Fiction
        </button>

        <button
          onClick={() => setCategory("Fantasy")}
          className="rounded-lg border border-[#D8D1C4] bg-white px-4 py-2 text-left text-sm font-medium text-[#3F5C4A] transition hover:bg-[#3F5C4A] hover:text-white"
        >
          Fantasy
        </button>
        <button
          onClick={() => setCategory("Self-Help")}
          className="rounded-lg border border-[#D8D1C4] bg-white px-4 py-2 text-left text-sm font-medium text-[#3F5C4A] transition hover:bg-[#3F5C4A] hover:text-white"
        >
          Self-Help
        </button>
        <button
          onClick={() => setCategory("Romance")}
          className="rounded-lg border border-[#D8D1C4] bg-white px-4 py-2 text-left text-sm font-medium text-[#3F5C4A] transition hover:bg-[#3F5C4A] hover:text-white"
        >
          Romance
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;




// import React from "react";

// const Sidebar = ({ setCategory }) => {
//   return (
//     <aside className="w-full rounded-xl border border-[#E2DED4] bg-[#F5F1E8] p-5 lg:w-56">
//       <h2
//         className="mb-5 text-xl"
//         style={{
//           fontFamily: "var(--font-fraunces)",
//           fontWeight: 500,
//         }}
//       >
//         Categories
//       </h2>

//       <div className="flex flex-col gap-3">
//         <button onClick={() => setCategory("All")}
//         className="text-left text-sm text-[#3F5C4A]">All Books</button>

//         <button onClick={() => setCategory("Fiction")}
//         className="text-left text-sm text-[#3F5C4A]">Fiction</button>

//         <button onClick={() => setCategory("Fantasy")}
//         className="text-left text-sm text-[#3F5C4A]">Fantasy</button>
//         <button onClick={() => setCategory("Self-Help")}
//         className="text-left text-sm text-[#3F5C4A]">Self-Help</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
