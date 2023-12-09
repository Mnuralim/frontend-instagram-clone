import React, { useEffect, useRef } from 'react';

interface Props {
  videoUrl: string;
}

const VideoCard = ({ videoUrl }: Props) => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

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
    <div ref={videoContainerRef} className="w-full h-full">
      <video
        src={videoUrl}
        ref={vidRef}
        autoPlay
        loop
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoCard;
