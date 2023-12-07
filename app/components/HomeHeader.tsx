import Logo from "@/components/IgLogo";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiMessengerLogoBold } from "react-icons/pi";

const HomeHeader = () => {
  return (
    <div className="fixed top-0 z-10 w-full py-2 left-0 px-3 bg-black flex justify-between items-center md:hidden">
      <Logo className="white-logo" />
      <div className="flex items-center gap-2">
        <AiOutlineHeart size="24" />
        <PiMessengerLogoBold size="24" />
      </div>
    </div>
  );
};

export default HomeHeader;
