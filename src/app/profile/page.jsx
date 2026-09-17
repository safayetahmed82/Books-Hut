import React from "react";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/auth";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-[#F5F1E8] px-6 py-16">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
        <div className="flex flex-col items-center text-center">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-[#F5F1E8]">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-[#3F5C4A]">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <h1
            className="mt-5 text-3xl text-[#3F5C4A]"
            style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500 }}
          >
            {user.name}
          </h1>

          <p className="mt-1 text-sm text-[#6B7A70]">{user.email}</p>

          <Link
            href="/profile/update"
            className="mt-6 rounded-lg bg-[#3F5C4A] px-6 py-3 text-sm font-medium text-white hover:bg-[#334B3D]"
          >
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;