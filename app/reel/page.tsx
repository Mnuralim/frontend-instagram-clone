'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Mousewheel } from 'swiper/modules';
import { usePost } from '@/utils/swr';
import { useSession } from 'next-auth/react';
import { KeyedMutator } from 'swr';
import VideoCard from './components/VideoCard';

const Page = () => {
  const { data: session } = useSession();
  const {
    post: posts,
    mutate,
    isLoading,
  }: { post: IPost[]; mutate: KeyedMutator<any>; isLoading: boolean } = usePost(session?.user.token as string);
  console.log(posts);
  return (
    <section className="h-screen md:max-w-[34%] md:mx-auto overflow-y-hidden">
      <Swiper direction={'vertical'} modules={[Pagination, Mousewheel]} mousewheel={true} className="w-full h-full">
        {posts?.map(
          (post) =>
            post.type === 'reel' && (
              <SwiperSlide key={post._id}>
                <VideoCard videoUrl={post.media} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </section>
  );
};

export default Page;
