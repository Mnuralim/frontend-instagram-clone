'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Mousewheel } from 'swiper/modules'
import { usePost } from '@/utils/swr'
import { useSession } from 'next-auth/react'
import { KeyedMutator } from 'swr'
import VideoCard from './components/VideoCard'
import { usePathname } from 'next/navigation'

const Page = () => {
  const { data: session } = useSession()
  const pathName = usePathname()
  const {
    post: posts,
    mutate,
    isLoading,
  }: { post: IPost[]; mutate: KeyedMutator<any>; isLoading: boolean } = usePost(session?.user.token as string)

  // useEffect(() => {
  //   if (pathName === '/reel') {
  //     document.body.classList.add('overflow-hidden');
  //   }

  //   return () => {
  //     document.body.classList.remove('overflow-hidden');
  //   };
  // }, [pathName]);

  return (
    <section className="h-screen fixed top-0 flex items-center md:static md:max-w-[34%] md:mx-auto">
      <Swiper
        direction={'vertical'}
        modules={[Pagination, Mousewheel]}
        mousewheel={true}
        className="w-full md:w-auto h-full  md:h-[90%]"
      >
        {posts?.map(
          (post) =>
            post.type === 'reel' && (
              <SwiperSlide key={post._id} className="w-full h-full">
                <VideoCard post={post} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </section>
  )
}

export default Page
