'use client'

import Avatar from '@/components/Avatar'
import PreviewProfile from '@/components/PreviewProfile'
import Link from 'next/link'
import React from 'react'
import { KeyedMutator } from 'swr'

interface Props {
  user: IUser
  token: string
  mutate: KeyedMutator<any>
  handleFollow: (id: string) => Promise<void>
}

const ListUserCard = ({ user, handleFollow }: Props) => {
  const {
    _id,
    username,
    profile: { imageProfile },
    alreadyFollow,
  } = user

  return (
    <>
      <div className="hidden items-center justify-between px-10 mt-4 md:flex">
        <div className="flex items-center gap-2 flex-wrap">
          <Avatar src={imageProfile} userId={user._id} className="w-11 h-11" story={true} />
          <div>
            <div className="group relative">
              <Link href={`/${user._id}`} className="text-xs font-semibold text-[#F5F5F5] hover:text-[#A8A8A8]">
                {username}
              </Link>
              <div className="absolute top-7 opacity-0 transform transition-all -z-10 duration-500 group-hover:md:block group-hover:z-50 group-hover:opacity-100">
                <PreviewProfile userId={user._id} />
              </div>
            </div>
            <p className="text-xs text-[#A8A8A8]">Suggested for you</p>
          </div>
        </div>
        <button
          onClick={() => handleFollow(_id)}
          className={`${
            alreadyFollow ? 'bg-[#262626]' : 'bg-[#0195f7]'
          } py-1 w-[25%] text-xs text-center rounded-md font-semibold hover:bg-[#A8A8A8]`}
        >
          {alreadyFollow ? 'Following' : 'Follow'}
        </button>
      </div>
    </>
  )
}

export default ListUserCard
