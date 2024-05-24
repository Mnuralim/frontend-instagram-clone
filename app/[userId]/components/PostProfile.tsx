import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
  posts: IPost[]
}

const PostProfile = ({ posts }: Props) => {
  const pathName = usePathname()
  const [screenSize, setScreenSize] = useState<number>(0)

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
    <section className="flex flex-col pt-1 text-white">
      <div className="grid grid-cols-3 gap-[2px]">
        {posts?.map(
          (post) =>
            post.type === 'post' && (
              <Link
                aria-label="link"
                key={post._id}
                href={screenSize < 768 ? `/p/${post._id}` : `${pathName}/?post=tab&p=${post._id}`}
                scroll={false}
                className="aspect-square hover:opacity-50"
              >
                <Image
                  src={post.media}
                  alt={post.caption}
                  width={5000}
                  height={5000}
                  className="object-cover w-full h-full"
                />
              </Link>
            )
        )}
      </div>
    </section>
  )
}

export default PostProfile
