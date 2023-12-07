import React from "react";
import ButtonBack from "../ButtonBack";

const CommentHeader = () => {
  return (
    <div className="flex w-full bg-[#262626] z-20 fixed top-0 justify-between items-center py-2 px-2 md:hidden">
      <ButtonBack />
      <h2 className=" font-semibold ">Comments</h2>
      <p></p>
    </div>
  );
};

export default CommentHeader;
