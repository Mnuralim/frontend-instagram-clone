import Image from "next/image";
import React from "react";

interface Props {
  className: string;
}

const Logo = ({ className }: Props) => {
  return (
    <>
      <Image src={"/image/Instagram_logo.svg"} width={100} height={32} alt="logo" className={className} />
    </>
  );
};

export default Logo;
