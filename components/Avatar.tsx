import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PreviewProfile from './PreviewProfile';

interface Props {
  userId: string;
  className: string;
  src: string;
  story: boolean;
}

const Avatar = ({ userId, src, className, story }: Props) => {
  return (
    <Link href={`/${userId}/?tab=post`} scroll={false} className="rounded-full  relative  group">
      <Image
        src={src || 'giphy.gif'}
        alt="profile"
        width={100}
        height={100}
        className={`${className} ${
          story ? '' : 'bg-none bg-transparent'
        } object-cover rounded-full bg-red-50 p-[2px] bg-gradient-to-r from-[#FECD00] via-[#F9373F] to-[#C913B9] w-10 h-10 `}
      />
      <div className="absolute top-12 opacity-0 transform transition-all -z-10 duration-500 group-hover:md:block group-hover:z-20 group-hover:opacity-100">
        <PreviewProfile userId={userId} />
      </div>
    </Link>
  );
};

export default Avatar;
