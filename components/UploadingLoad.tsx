import { useApppContext } from '@/store/context';
import React from 'react';
import Image from 'next/image';

const UploadingLoad = () => {
  const { state } = useApppContext();

  return (
    <div className={`${state.loadingUpload.loading ? 'flex' : 'hidden'} items-center gap-2 w-full px-3 bg-black my-3`}>
      <div className="w-1/12">
        {state.loadingUpload.type === 'reel' && (
          <video autoPlay muted loop src={state.loadingUpload.media} className="w-[60px] h-[80px]" />
        )}
        {state.loadingUpload.type === 'post' && (
          <Image src={state.loadingUpload.media} width={60} height={70} alt="image" />
        )}
      </div>
      <div className="download-bar-container w-11/12">
        <div className="download-bar"></div>
      </div>
    </div>
  );
};

export default UploadingLoad;
