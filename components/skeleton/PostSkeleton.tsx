import React from 'react'

interface Props {
  numberOfBlocks: number
}

const PostSkeleton = ({ numberOfBlocks }: Props) => {
  return (
    <>
      {[...Array(numberOfBlocks)].map((_, index) => (
        <div key={index} className="mt-1 mb-5 md:max-w-[67%] md:mx-auto md:mt-10 overflow-y-hidden">
          <div className="max-w-screen-lg mx-auto">
            <div className="bg-black mb-4 rounded-md shadow-md animate-pulse">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-[#151515] rounded-full mr-2"></div>
                <div className="h-4 w-20 bg-[#151515] rounded-full"></div>
              </div>

              <div className="h-96 bg-[#151515] mb-4"></div>

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-[#151515] rounded-full"></div>
                <div className="h-8 w-8 bg-[#151515] rounded-full"></div>
                <div className="h-8 w-8 bg-[#151515] rounded-full"></div>
              </div>
              <div className="h-4 w-20 bg-[#151515] rounded mt-4"></div>
              <div className="h-10 w-full bg-[#151515] rounded mt-4"></div>
              <div className="h-4 w-28 bg-[#151515] rounded mt-4"></div>
              <div className="h-4 w-32 bg-[#151515] rounded mt-4"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostSkeleton
