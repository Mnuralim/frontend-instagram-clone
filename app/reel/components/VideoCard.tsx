import React from 'react';

interface Props {
  videoUrl: string;
}

const VideoCard = ({ videoUrl }: Props) => {
  return (
    <div className="">
      <video src={videoUrl} autoPlay loop className="w-full h-full aspect-auto" />
    </div>
  );
};

export default VideoCard;
