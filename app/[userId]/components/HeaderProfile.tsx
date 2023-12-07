import ButtonBack from "@/components/ButtonBack";
import React from "react";

interface Props {
  user: IUser;
}

const HeaderProfile = ({ user }: Props) => {
  return (
    <div className="w-full mt-3 justify-between items-center flex px-3 md:hidden">
      <div className="w-10">
        <ButtonBack />
      </div>
      <h1 className="font-semibold text-2xl">{user?.username}</h1>
      <div className="w-10"></div>
    </div>
  );
};

export default HeaderProfile;
