import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { LuSendHorizonal } from 'react-icons/lu';

interface Props {
  post: IPost;
}

const ReelAction = ({ post }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="absolute z-20 flex flex-col items-center gap-3 right-3 bottom-9 md:bottom-4">
      <button
        // onClick={handleLike}
        className="flex flex-col items-center cursor-pointer"
      >
        {post.alreadyLike ? (
          <AiFillHeart
            // onClick={handleLikePost}
            size="28"
            color="#FF3040"
            className="text-[#FF3040] cursor-pointer"
          />
        ) : (
          <AiOutlineHeart
            // onClick={handleLikePost}
            size="28"
            className="text-white hover:text-[#A8A8A8] cursor-pointer"
          />
        )}
        <span className="text-white text-sm font-semibold">
          {post.totalLike}
        </span>
      </button>
      <div className="flex flex-col items-center">
        <IoChatbubbleOutline
          onClick={() =>
            router.push(`${pathName}/?p=${post._id}`, { scroll: false })
          }
          size="27"
          className="text-white cursor-pointer hover:text-[#A8A8A8] transform scale-x-[-1]"
        />
        <span className="text-white text-sm font-semibold">
          {post.totalComment}
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <LuSendHorizonal
          size="25"
          className="text-white hover:text-[#A8A8A8] rotate-[-24deg] "
        />
        <span className="text-white text-sm font-semibold">12</span>
      </div>
      <button>
        <HiOutlineDotsVertical size="23" />
      </button>
      <div className="w-6 h-6 rounded-md border-white border-2 flex items-center justify-center">
        <Image
          alt="profile"
          src={post.userId.profile.imageProfile}
          width={28}
          height={28}
          className={`object-contain rounded-full w-full h-full  ${
            true ? 'spin-profile' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default ReelAction;
