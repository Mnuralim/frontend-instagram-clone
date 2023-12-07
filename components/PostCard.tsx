import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { KeyedMutator } from 'swr';

import { HiOutlineBookmark, HiOutlineDotsVertical } from 'react-icons/hi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { LuSendHorizonal } from 'react-icons/lu';
import { BsDot } from 'react-icons/bs';
import { likePost } from '@/utils/fetch';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import PreviewProfile from './PreviewProfile';
import Avatar from './Avatar';
import DateConv from './DateConv';

interface Props {
  post: IPost;
  mutate: KeyedMutator<any>;
}

const PostCard = ({ post, mutate }: Props) => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const detailPost = searchParams?.get('p');

  const { data: session } = useSession();
  const token = session?.user.token;

  useEffect(() => {
    if (detailPost) {
      vidRef.current?.pause();
    }
  }, [detailPost]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        vidRef.current?.play();
      } else {
        vidRef.current?.pause();
      }
    }, options);

    if (vidRef.current) {
      observer.observe(vidRef.current);
    }

    return () => {
      if (vidRef.current) {
        observer.unobserve(vidRef.current);
      }
    };
  }, []);

  const handleVideoClick = () => {
    if (vidRef.current) {
      if (isPlaying) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
    <div className="border-b border-slate-400 border-opacity-0 md:border-opacity-25 pb-5">
      <div className="flex justify-between items-center px-2 md:px-0 pt-5">
        <div className="flex items-center gap-3">
          <Avatar src={post.userId.profile.imageProfile} userId={post.userId._id} className="w-10 h-10" story={true} />
          <div className="relative group">
            <Link
              href={`/${post.userId._id}/?tab=post`}
              scroll={false}
              className="font-semibold text-sm hover:text-[#A8A8A8]"
            >
              {post.userId.username}
            </Link>
            <div className="absolute top-6 opacity-0 transform transition-all -z-10 duration-500 group-hover:md:block group-hover:z-50 group-hover:opacity-100">
              <PreviewProfile userId={post.userId._id} />
            </div>
          </div>
        </div>
        <button>
          <HiOutlineDotsVertical size="23" />
        </button>
      </div>
      {post.type === 'post' ? (
        <div
          onDoubleClick={handleLikePost}
          className="aspect-square w-full mt-2 md:rounded border border-slate-400 border-opacity-0 md:border-opacity-25"
        >
          <Image
            src={post.media}
            alt="post"
            width={5000}
            height={5000}
            className="object-cover w-full h-full md:rounded"
          />
        </div>
      ) : (
        <div
          onDoubleClick={handleLikePost}
          ref={videoContainerRef}
          className="mt-2 aspect-[3/4] relative md:rounded border border-slate-400 border-opacity-0 md:border-opacity-25"
        >
          <video
            onClick={handleVideoClick}
            ref={vidRef}
            src={post.media}
            className="object-cover md:object-contain h-full w-full object-center md:rounded"
          />
        </div>
      )}
      <div className="flex justify-between items-center py-2 px-3 md:px-0">
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
            onClick={() => router.push(`${pathName}/?p=${post._id}`, { scroll: false })}
            size="22"
            className="text-white cursor-pointer hover:text-[#A8A8A8] transform scale-x-[-1]"
          />
          <LuSendHorizonal size="22" className="text-white hover:text-[#A8A8A8] rotate-[-24deg] mb-[5px]" />
        </div>
        <HiOutlineBookmark size="23" className="text-white" />
      </div>
      <Link href={`${pathName}/?like=${post._id}`} scroll={false} className="text-sm font-semibold px-3 md:px-0">
        {post.totalLike} {post.totalLike > 1 ? 'Likes' : 'like'}
      </Link>
      <div className="px-3 md:px-0">
        <div className="relative group inline">
          <Link
            href={`/${post.userId._id}/?tab=post`}
            scroll={false}
            className="font-semibold text-sm pr-1 hover:text-[#A8A8A8]"
          >
            {post.userId.username}
          </Link>
          <div className="absolute top-6 opacity-0 transform transition-all -z-10 duration-500 group-hover:md:block group-hover:z-50 group-hover:opacity-100">
            <PreviewProfile userId={post.userId._id} />
          </div>
        </div>
        <span className="text-sm font-normal pl-1">{post.caption}</span>
      </div>
      <Link href={`${pathName}/?p=${post._id}`} className="px-3 md:px-0 text-sm text-[#A8A8A8] pt-1">
        View all {post.totalComment} {post.totalComment > 1 ? 'comments' : 'comment'}
      </Link>
      <div className="flex items-center px-3 md:px-0 pt-2">
        <p className="text-xs text-[#A8A8A8]">
          <DateConv createdAt={post.createdAt} /> ago
        </p>
        <BsDot className="text-[#A8A8A8]" />
        <button className="text-xs font-semibold">See translation</button>
      </div>
    </div>
  );
};

export default PostCard;
