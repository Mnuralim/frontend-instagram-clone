import React from 'react'

const SuggestionSkeleton = () => {
  return (
    <div className="my-2 md:mt-14 bg-[#1a1a1a] md:bg-black">
      <div className="hidden  items-center justify-between px-10 mt-4 md:flex">
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-full bg-gray-600  animate-pulse"></div>
          <div>
            <h2 className="bg-gray-600 h-4 animate-pulse w-20 rounded"></h2>
            <p className="bg-gray-600  h-4 animate-pulse w-20 rounded mt-2"></p>
          </div>
        </div>
        <div className={` w-[25%] bg-gray-600 h-4 animate-pulse rounded`}></div>
      </div>
      <div className="flex items-center justify-between mt-6 pt-[6px] pb-1 px-3 md:px-10">
        <p className="bg-gray-600 h-4 animate-pulse rounded w-20"></p>
        <div className="bg-gray-600 h-4 animate-pulse rounded w-10"></div>
      </div>

      <div className="hidden items-center justify-between px-10 mt-4 md:flex">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-11 h-11 rounded-full bg-gray-600 animate-pulse"></div>
          <div>
            <div className="group relative">
              <div className="bg-gray-600 animate-pulse h-4 w-10 rounded"></div>
            </div>
            <p className="bg-gray-600 animate-pulse h-4 w-10 rounded mt-2"></p>
          </div>
        </div>
        <div className={` w-[25%] bg-gray-600 animate-pulse h-6 rounded`}></div>
      </div>
    </div>
  )
}

export default SuggestionSkeleton
