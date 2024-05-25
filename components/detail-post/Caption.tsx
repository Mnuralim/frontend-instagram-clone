import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DateConv from '../DateConv'
import { HiDotsHorizontal } from 'react-icons/hi'
import OptionList from './OptionList'
import { useSession } from 'next-auth/react'

interface Props {
  post: IPost
}

const Caption = ({ post }: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const { data: session } = useSession()
  const isMyProfile = post.userId._id === (session?.user._id as string)

  const handleCloseModal = () => {
    setShowOptions(false)
  }

  return (
    <>
      <div className="hidden bg-black border-b border-opacity-25 py-3 z-10 border-slate-50 px-3 md:block md:fixed w-[37%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link aria-label="link" href={`/${post?.userId?._id}/?tab=post`} scroll={false} className="rounded-full ">
              <Image
                src={post?.userId.profile?.imageProfile}
                alt="profile"
                width={100}
                height={100}
                className="object-cover w-9 h-9 rounded-full bg-red-50 p-[2px] bg-gradient-to-r from-[#FECD00] via-[#F9373F] to-[#C913B9] "
              />
            </Link>
            <Link
              aria-label="link"
              href={`/${post?.userId?._id}/?tab=post`}
              scroll={false}
              className="font-semibold text-sm hover:text-[#A8A8A8]"
            >
              {post?.userId?.username}
            </Link>
          </div>
          {isMyProfile ? (
            <button onClick={() => setShowOptions(true)}>
              <HiDotsHorizontal size={20} />
            </button>
          ) : null}
        </div>
      </div>

      <div className="hidden mt-16 md:block bg-black py-3 w-full px-3">
        <div className="flex items-center gap-3">
          <Link
            aria-label="link"
            href={`/${post?.userId?._id}/?tab=post`}
            scroll={false}
            className="rounded-full self-start min-w-[37px]"
          >
            <Image
              src={post?.userId.profile?.imageProfile}
              alt="profile"
              width={100}
              height={100}
              className="object-cover w-9 h-9 rounded-full bg-red-50 p-[2px] bg-gradient-to-r from-[#FECD00] via-[#F9373F] to-[#C913B9]"
            />
          </Link>
          <div>
            <Link
              aria-label="link"
              href={`/${post?.userId?._id}/?tab=post`}
              scroll={false}
              className="font-semibold text-sm hover:text-[#A8A8A8]"
            >
              {post?.userId?.username}
            </Link>
            <span className="ml-3 text-sm leading-6">{post.caption}</span>
            <div className="flex text-xs gap-4 text-[#a8a8a8]">
              <DateConv createdAt={post.createdAt} />
              <button name="button-translate">See translation</button>
            </div>
          </div>
        </div>
        <OptionList isOpen={showOptions} onClose={handleCloseModal} postId={post._id} />
      </div>
    </>
  )
}

export default Caption
