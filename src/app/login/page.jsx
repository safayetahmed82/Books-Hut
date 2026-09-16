// // "use client";

// // import Link from "next/link";

// // const LoginPage = () => {
// //   return (
// //     <div className="min-h-screen bg-[#F5F1E8] px-6 py-16">
// //       <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
// //         <h1
// //           className="text-4xl text-[#3F5C4A]"
// //           style={{
// //             fontFamily: "var(--font-fraunces)",
// //             fontWeight: 500,
// //           }}
// //         >
// //           Welcome Back
// //         </h1>

// //         <p className="mt-2 text-sm text-[#6B7A70]">
// //           Login to continue to Books Hut.
// //         </p>

// //         <form className="mt-8 space-y-5">
// //           <div>
// //             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
// //             />
// //           </div>

// //           <div>
// //             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full rounded-lg bg-[#3F5C4A] px-6 py-3 font-medium text-white hover:bg-[#334B3D]"
// //           >
// //             Login
// //           </button>
// //         </form>

// //         <p className="mt-6 text-center text-sm text-[#6B7A70]">
// //           Don't have an account?{" "}
// //           <Link href="/register" className="font-medium text-[#3F5C4A]">
// //             Register
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";

// const LoginPage = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const { error } = await authClient.signIn.email({
//       email,
//       password,
//     });

//     setLoading(false);

//     if (error) {
//       setError(error.message || "Login failed");
//       return;
//     }

//     router.push("/home");
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F1E8] px-6 py-16">
//       <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
//         <h1
//           className="text-4xl text-[#3F5C4A]"
//           style={{
//             fontFamily: "var(--font-fraunces)",
//             fontWeight: 500,
//           }}
//         >
//           Welcome Back
//         </h1>

//         <p className="mt-2 text-sm text-[#6B7A70]">
//           Login to continue to Books Hut.
//         </p>

//         {error && (
//           <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
//             {error}
//           </p>
//         )}

//         <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg bg-[#3F5C4A] px-6 py-3 font-medium text-white hover:bg-[#334B3D] disabled:opacity-60"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-[#6B7A70]">
//           Don't have an account?{" "}
//           <Link href="/register" className="font-medium text-[#3F5C4A]">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }

    toast.success("Logged in successfully!");
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] px-6 py-16">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h1
          className="text-4xl text-[#3F5C4A]"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 500,
          }}
        >
          Welcome Back
        </h1>

        <p className="mt-2 text-sm text-[#6B7A70]">
          Login to continue to Books Hut.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#3F5C4A] px-6 py-3 font-medium text-white hover:bg-[#334B3D] disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#6B7A70]">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium text-[#3F5C4A]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
