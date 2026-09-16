// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";

// const RegisterPage = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);


//   const handleRegister = async (e) => {
//   e.preventDefault();
//   console.log("Register button clicked");

//   setError("");
//   setLoading(true);

//   const form = e.target;
//     console.log("Sending registration...");
//     const result = await authClient.signUp.email({
    
//     name: form.name.value,
//     email: form.email.value,
//     password: form.password.value,
//     image: form.image.value,
//   });
    
//     console.log("Registration error:", result.error);

//   setLoading(false);

//   if (result.error) {
//     setError(result.error.message);
//     return;
//   }

//   window.location.href = "/login";
// };
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
//           Create Account
//         </h1>

//         <p className="mt-2 text-sm text-[#6B7A70]">
//           Create your Books Hut account.
//         </p>

//         <form onSubmit={handleRegister} className="mt-8 space-y-5">
//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
//               Photo URL
//             </label>
//             <input
//               type="url"
//               placeholder="Enter your photo URL"
//               name="image"
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Create a password"
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-lg bg-[#3F5C4A] px-6 py-3 font-medium text-white hover:bg-[#334B3D]"
//           >
//             {loading ? "Creating Account..." : "Register"}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-[#6B7A70]">
//           Already have an account?{" "}
//           <Link href="/login" className="font-medium text-[#3F5C4A]">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";

// const RegisterPage = () => {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const { error } = await authClient.signUp.email({
//       name,
//       email,
//       password,
//       image,
//     });

//     setLoading(false);

//     if (error) {
//       setError(error.message || "Registration failed");
//       return;
//     }

//     router.push("/login");
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F1E8] px-6 py-16">
//       <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
//         <h1
//           className="text-4xl text-[#3F5C4A]"
//           style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
//         >
//           Create Account
//         </h1>

//         <p className="mt-2 text-sm text-[#6B7A70]">
//           Join Books Hut to get started.
//         </p>

//         {error && (
//           <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
//             {error}
//           </p>
//         )}

//         <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
//               Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
//               Photo URL
//             </label>
//             <input
//               type="url"
//               placeholder="Paste an image link"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

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
//               placeholder="At least 8 characters"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               minLength={8}
//               className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg bg-[#3F5C4A] px-6 py-3 font-medium text-white hover:bg-[#334B3D] disabled:opacity-60"
//           >
//             {loading ? "Creating account..." : "Register"}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-[#6B7A70]">
//           Already have an account?{" "}
//           <Link href="/login" className="font-medium text-[#3F5C4A]">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Registered successfully! Please login.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] px-6 py-16">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h1
          className="text-4xl text-[#3F5C4A]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
        >
          Create Account
        </h1>

        <p className="mt-2 text-sm text-[#6B7A70]">
          Join Books Hut to get started.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="Paste an image link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
            />
          </div>

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
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#3F5C4A] px-6 py-3 font-medium text-white hover:bg-[#334B3D] disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#6B7A70]">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#3F5C4A]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;