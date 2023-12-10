import React from 'react'

const PostSkeleton = () => {
  return (
    <>
      <div className="mt-1 mb-5 md:max-w-[67%] md:mx-auto md:mt-10 overflow-y-hidden">
        <div className="max-w-screen-lg mx-auto">
          <div className="bg-black p-4 mb-4 rounded-md shadow-md animate-pulse">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gray-600 rounded-full mr-2"></div>
              <div className="h-4 w-20 bg-gray-600 rounded-full"></div>
            </div>

            <div className="h-96 bg-gray-600 mb-4"></div>

            <div className="flex items-center gap-2">
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 mb-5 md:max-w-[67%] md:mx-auto md:mt-10 overflow-y-hidden">
        <div className="max-w-screen-lg mx-auto">
          <div className="bg-black p-4 mb-4 rounded-md shadow-md animate-pulse">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gray-600 rounded-full mr-2"></div>
              <div className="h-4 w-20 bg-gray-600 rounded-full"></div>
            </div>

            <div className="h-96 bg-gray-600 mb-4"></div>

            <div className="flex items-center gap-2">
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 mb-5 md:max-w-[67%] md:mx-auto md:mt-10 overflow-y-hidden">
        <div className="max-w-screen-lg mx-auto">
          <div className="bg-black p-4 mb-4 rounded-md shadow-md animate-pulse">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gray-600 rounded-full mr-2"></div>
              <div className="h-4 w-20 bg-gray-600 rounded-full"></div>
            </div>

            <div className="h-96 bg-gray-600 mb-4"></div>

            <div className="flex items-center gap-2">
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostSkeleton
