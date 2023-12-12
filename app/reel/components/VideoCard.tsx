import React, { useEffect, useRef, useState } from 'react'
import ReelAction from './ReelAction'
import { useSearchParams } from 'next/navigation'
import ReelDetail from './ReelDetail'

interface Props {
  post: IPost
}

const VideoCard = ({ post }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const vidRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const postQueryParams = searchParams?.get('p')

  useEffect(() => {
    if (postQueryParams) {
      vidRef.current?.pause()
    }
  }, [postQueryParams])

  const handleVideoClick = () => {
    if (vidRef.current) {
      if (isPlaying) {
        vidRef.current.pause()
      } else {
        vidRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        vidRef.current?.play()
        setIsPlaying(true)
      } else {
        vidRef.current?.pause()
        setIsPlaying(false)
      }
    }, options)

    const currentVideoRef = vidRef.current

    if (currentVideoRef) {
      observer.observe(currentVideoRef)
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef)
      }
    }
  }, [])
  return (
    <div ref={videoContainerRef} className="w-full flex  h-[95vh] relative md:h-full">
      <video
        src={post.media}
        ref={vidRef}
        autoPlay
        onClick={handleVideoClick}
        loop
        className="w-full h-[93vh] object-cover static md:rounded md:h-full"
      />
      <ReelAction post={post} />
      <ReelDetail isVideoPlaying={isPlaying} post={post} />
      <div className="gradient-overlay"></div>
    </div>
  )
}

export default VideoCard
