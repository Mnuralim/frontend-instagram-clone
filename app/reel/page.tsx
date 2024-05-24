'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Mousewheel } from 'swiper/modules'
import { usePost } from '@/utils/swr'
import { useSession } from 'next-auth/react'
import { KeyedMutator } from 'swr'
import VideoCard from './components/VideoCard'

const Page = () => {
  const { data: session } = useSession()
  const { post: posts }: { post: IPost[]; mutate: KeyedMutator<any>; isLoading: boolean } = usePost(
    session?.user.token as string
  )

  return (
    <section className="h-screen fixed top-0 flex items-center md:static lg:max-w-[34%] md:mx-auto">
      <Swiper
        direction={'vertical'}
        modules={[Pagination, Mousewheel]}
        mousewheel={true}
        className="w-full md:w-auto h-full md:h-[100dvh]"
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
