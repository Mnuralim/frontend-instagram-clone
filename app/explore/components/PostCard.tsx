import { ReelIcons1 } from '@/components/ReelIcons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillImageFill } from 'react-icons/bs'
import { PiChatCircleFill } from 'react-icons/pi'
import { usePathname } from 'next/navigation'

interface Props {
  post: IPost
}

const PostCard = ({ post }: Props) => {
  const [screenSize, setScreenSize] = useState<number>(0)
  const pathName = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenSize(window.innerWidth)

      const handleResize = () => {
        setScreenSize(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <Link
      aria-label="link"
      href={screenSize <= 768 ? `/p/${post._id}` : `${pathName}/?post=tab&p=${post._id}`}
      className="aspect-square relative group"
    >
      {post.type === 'post' ? (
        <Image
          src={post?.media}
          width={10000}
          alt={post.caption}
          height={10000}
          className="w-full h-full object-cover object-center group-hover:opacity-50"
        />
      ) : (
        <video
          src={post.media}
          muted
          loop
          autoPlay
          className="w-full h-full object-cover object-center group-hover:opacity-50"
        />
      )}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 md:gap-7 group-hover:opacity-100 opacity-0">
        <div className="flex items-center gap-1">
          <AiFillHeart size="23" />
          <p className="font-semibold">{post.totalLike}</p>
        </div>
        <div className="flex items-center gap-1">
          <PiChatCircleFill size="23" className="scale-x-[-1]" />
          <p className="font-semibold">{post.totalComment}</p>
        </div>
      </div>
      <div className="absolute top-2 right-2 white-logo">
        {post.type === 'reel' ? (
          <ReelIcons1 className="white-logo w-4 h-4 md:w-[23px] md:h-[23px]" />
        ) : (
          <BsFillImageFill className="md:text-[23px]" />
        )}
      </div>
    </Link>
  )
}

export default PostCard
