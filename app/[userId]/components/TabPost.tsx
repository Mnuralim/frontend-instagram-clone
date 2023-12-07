import { ReelIcons2 } from "@/components/ReelIcons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BsPersonCheck } from "react-icons/bs";
import { MdGridOn } from "react-icons/md";

interface Props {
  user: IUser;
}

const TabPost = ({ user }: Props) => {
  const searchParams = useSearchParams();
  return (
    <div className="grid grid-cols-3 w-full">
      <Link
        href={`/${user?._id}/?tab=post`}
        className={`${
          searchParams?.get("tab") == "post" ? "text-white" : "border-b-transparent text-[#A8A8A8]"
        } flex justify-center items-center py-3 transform transition-all ease-linear duration-300 border-b-[2px]`}
      >
        <MdGridOn className="text-2xl" />
      </Link>
      <Link
        href={`/${user?._id}/?tab=reels`}
        className={`${
          searchParams?.get("tab") == "reels" ? "text-white" : "border-b-transparent text-[#A8A8A8]"
        } flex justify-center items-center py-3 transform transition-all ease-linear duration-300 border-b-[2px]`}
      >
        <ReelIcons2 className={searchParams?.get("tab") == "reels" ? "white-logo" : "grayish-img"} />
      </Link>
      <Link
        href={`/${user?._id}/?tab=tagged`}
        className={`${
          searchParams?.get("tab") == "tagged" ? "text-white" : "border-b-transparent text-[#A8A8A8]"
        } flex justify-center items-center py-3 transform transition-all ease-linear duration-300 border-b-[2px]`}
      >
        <BsPersonCheck className="text-2xl" />
      </Link>
    </div>
  );
};

export default TabPost;
