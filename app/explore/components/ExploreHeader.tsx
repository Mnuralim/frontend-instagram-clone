"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ExploreHeader = () => {
  const router = useRouter();

  return (
    <div className="px-2 py-2 sticky bg-black top-0 z-10 md:hidden">
      <input
        type="search"
        className="bg-[#262626] w-full px-3 py-2 rounded-lg outline-none"
        placeholder="Search"
        onClick={() => router.push("/search")}
      />
    </div>
  );
};

export default ExploreHeader;
