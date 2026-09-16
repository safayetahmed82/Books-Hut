// "use client";

// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { authClient } from "@/lib/auth-client";

// const BorrowButton = () => {
//   const router = useRouter();
//   const { data: session } = authClient.useSession();

//   const handleBorrow = () => {
//     alert('clicked')
//     if (!session) {
//       router.push("/login");
//       return;
//     }
//     toast.success("Book borrowed successfully!");
//   };

//   return (
//     <button
//       onClick={handleBorrow}
//       className="mt-8 w-fit rounded-lg bg-[#3F5C4A] px-6 py-3 text-sm font-medium text-white hover:bg-[#334B3D]"
//     >
//       Borrow This Book
//     </button>
//   );
// };

// export default BorrowButton;

"use client";

const BorrowButton = () => {
  return <button onClick={() => alert("clicked")}>Borrow This Book</button>;
};

export default BorrowButton;
