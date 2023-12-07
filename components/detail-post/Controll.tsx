import { likePost } from '@/utils/fetch';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineBookmark } from 'react-icons/hi';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { LuSendHorizonal } from 'react-icons/lu';
import { usePathname, useSearchParams } from 'next/navigation';
import { usePost } from '@/utils/swr';
import Link from 'next/link';
import DateConv from '../DateConv';

interface Props {
  post: IPost;
  token: string;
}
const Controll = ({ post, token }: Props) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { mutate } = usePost(token, post._id);

  const handleLikePost = async () => {
    try {
      const response = await likePost(token as string, post._id);
      if (response?.ok) {
        mutate();
      }
    } catch (error) {
      throw new Error('Error');
    }
  };
  return (
    <div className="fixed hidden border-slate-50/25 md:left-1/2 bottom-0 gap-3 w-full px-3 py-2 bg-[#262626] md:block md:bottom-20 md:bg-black md:max-w-[37%] md:border-l">
      <div className="flex w-full justify-between items-center py-2 px-3 md:px-0">
        <div className="flex items-center gap-6">
          {post.alreadyLike ? (
            <AiFillHeart onClick={handleLikePost} size="23" color="#FF3040" className="text-[#FF3040] cursor-pointer" />
          ) : (
            <AiOutlineHeart
              onClick={handleLikePost}
              size="23"
              className="text-white hover:text-[#A8A8A8] cursor-pointer"
            />
          )}
          <IoChatbubbleOutline
            size="22"
            className="text-white cursor-pointer hover:text-[#A8A8A8] transform scale-x-[-1]"
          />
          <LuSendHorizonal size="22" className="text-white hover:text-[#A8A8A8] rotate-[-24deg] mb-[5px]" />
        </div>
        <HiOutlineBookmark size="23" className="text-white" />
      </div>
      <Link
        href={`${pathName}/?p=${searchParams?.get('p')}&like=${post._id}`}
        scroll={false}
        className="text-sm font-semibold px-3 md:px-0"
      >
        {post.totalLike} {post.totalLike > 1 ? 'Likes' : 'like'}
      </Link>
      <p className="text-xs text-[#A8A8A8]">
        <DateConv createdAt={post.createdAt} /> ago
      </p>
    </div>
  );
};

export default Controll;
