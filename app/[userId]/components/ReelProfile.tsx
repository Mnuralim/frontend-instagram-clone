import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  posts: IPost[]
}

const ReelProfile = ({ posts }: Props) => {
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
    <section className="flex flex-col pt-1 text-white w-full">
      <div className="grid grid-cols-3 gap-[2px] md:grid-cols-4">
        {posts.map(
          (post) =>
            post.type === 'reel' && (
              <Link
                aria-label="link"
                href={screenSize < 768 ? `/p/${post._id}` : `${pathName}/?post=tab&p=${post._id}`}
                key={post._id}
                className="aspect-[13/20] hover:opacity-50"
              >
                <video autoPlay muted src={post.media} loop className="object-cover w-full h-full" />
              </Link>
            )
        )}
      </div>
    </section>
  )
}

export default ReelProfile
