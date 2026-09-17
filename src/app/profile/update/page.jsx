"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isPending && !session) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name: name || session.user.name,
      image: image || session.user.image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] px-6 py-16">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h1
          className="text-3xl text-[#3F5C4A]"
          style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
        >
          Update Information
        </h1>

        <p className="mt-2 text-sm text-[#6B7A70]">
          Change your name or photo below.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
              Name
            </label>
            <input
              type="text"
              placeholder={session?.user?.name || "Enter your name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#3F5C4A]">
              Photo URL
            </label>
            <input
              type="url"
              placeholder={session?.user?.image || "Paste an image link"}
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full rounded-lg border border-[#D8D1C4] px-4 py-3 outline-none focus:border-[#3F5C4A]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#3F5C4A] px-6 py-3 font-medium text-white hover:bg-[#334B3D] disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
