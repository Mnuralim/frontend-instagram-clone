import React, { useEffect, useRef, useState } from 'react';
import ReelAction from './ReelAction';

interface Props {
  post: IPost;
}

const VideoCard = ({ post }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const handleVideoClick = () => {
    if (vidRef.current) {
      if (isPlaying) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        vidRef.current?.play();
      } else {
        vidRef.current?.pause();
      }
    }, options);

    const currentVideoRef = vidRef.current;

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);
  return (
    <div ref={videoContainerRef} className="w-full h-[95%] relative md:h-full">
      <video
        src={post.media}
        ref={vidRef}
        autoPlay
        onClick={handleVideoClick}
        loop
        className="w-full h-full object-cover md:rounded"
      />
      <ReelAction post={post} />
    </div>
  );
};

export default VideoCard;
