import Avatar from '@/components/Avatar'
import { followUser } from '@/utils/fetch'
import { useUser } from '@/utils/swr'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiMusicNote } from 'react-icons/hi'
import { KeyedMutator } from 'swr'

interface Props {
  post: IPost
  isVideoPlaying: boolean
}

const ReelDetail = ({ post, isVideoPlaying }: Props) => {
  const { data: session } = useSession()
  const { user, mutate }: { user: IUser; mutate: KeyedMutator<any> } = useUser(
    session?.user.token as string,
    post.userId._id
  )

  const handleFollow = async () => {
    try {
      const response = await followUser(session?.user.token as string, post.userId._id)
      if (response?.ok) {
        mutate()
      }
    } catch (error) {
      throw new Error('Error')
    }
  }

  return (
    <div className="absolute bottom-[77px] left-3 z-20 text-white flex flex-col gap-4 md:bottom-4 ">
      <div className="flex items-center gap-2">
        <Link aria-label="link" href={`/${post.userId._id}/?tab=post`}>
          <Image
            src={post.userId.profile.imageProfile}
            alt="avatar"
            width={3600}
            height={3600}
            className="object-cover rounded-full w-9 h-9"
          />
        </Link>
        <Link aria-label="link" href={`/${post.userId._id}/?tab=post`} className="font-semibold text-sm">
          {post.userId.username}
        </Link>
        {session?.user._id !== user?._id && (
          <button onClick={handleFollow} className="w-20 py-[2px] text-sm rounded-md border-white border">
            {user?.alreadyFollow ? 'Following' : 'Follow'}
          </button>
        )}
      </div>
      <p className="text-sm max-w-[80%]">{post.caption}</p>
      <div className="flex items-center gap-1">
        <HiMusicNote />
        <div className="marquee-container">
          <div className={`${isVideoPlaying ? 'marquee-animate' : ''} text-xs font-normal`}>
            original sound- {post.userId.username}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReelDetail
