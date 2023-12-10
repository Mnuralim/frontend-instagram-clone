import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css'
import Link from 'next/link'

interface Props {
  users: IUser[]
  handleFollow: (id: string) => Promise<void>
}

const CardSuggestionFollow = ({ users, handleFollow }: Props) => {
  return (
    <div className="md:hidden px-3 mt-1">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={4}
      >
        {users?.map((user) => (
          <SwiperSlide className="flex justify-center items-center flex-col w-full" key={user._id}>
            <div className="flex bg-black rounded flex-col mb-3 py-3 gap-[10px] justify-center items-center border border-slate-400 border-opacity-50">
              <Link aria-label="link" href={`/${user._id}/?tab=post`}>
                <Image
                  src={user.profile.imageProfile}
                  alt="profile"
                  width={110}
                  height={110}
                  className="object-cover w-[110px] h-[110px] rounded-full"
                />
              </Link>
              <Link aria-label="link" href={`/${user._id}/?tab=post`} className="text-xs font-semibold text-[#F5F5F5]">
                {user.username}
              </Link>
              <p className="text-xs text-[#A8A8A8]">Suggested for you</p>
              <button
                name="button-follow"
                onClick={() => handleFollow(user._id)}
                className={`${
                  user?.alreadyFollow ? 'bg-[#262626]' : 'bg-[#0195f7]'
                }  py-[5px] w-[92%] mx-3 text-xs text-center rounded-md font-semibold hover:bg-[#A8A8A8]`}
              >
                {user?.alreadyFollow ? 'Following' : 'Follow'}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardSuggestionFollow
