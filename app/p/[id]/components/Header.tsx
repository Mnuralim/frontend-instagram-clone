import ButtonBack from "@/components/ButtonBack";
import React from "react";

const Header = () => {
  return (
    <div className="w-full py-3 sticky bg-black top-0 z-10 items-center flex px-3 gap-3 md:hidden">
      <div className="w-10">
        <ButtonBack />
      </div>
      <h1 className="font-semibold text-xl">Posts</h1>
    </div>
  );
};

export default Header;
