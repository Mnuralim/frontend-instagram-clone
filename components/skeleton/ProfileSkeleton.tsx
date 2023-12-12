import React from 'react'

const ProfileSkeleton = () => {
  return (
    <div className="w-full md:max-w-[67%] mx-auto">
      <div className="flex items-center justify-between gap-3 w-full mt-7 px-3 md:px-8">
        <div className="md:w-1/3">
          <div className="w-20 h-20 bg-gray-500 rounded-full animate-pulse md:w-36 md:h-36"></div>
        </div>
        <div className="md:w-2/3 self-center">
          <div className="items-center w-full gap-3 mb-5 hidden md:flex">
            <div className="w-full h-4 bg-gray-500 animate-pulse rounded"></div>
            <div className="bg-gray-500 h-6 animate-pulse w-28 rounded"></div>
            <div className="bg-gray-500 h-6 animate-pulse w-28 rounded"></div>
          </div>
          <div className="flex gap-8 md:gap-10">
            <div className="text-center flex flex-col md:flex-row md:items-center md:gap-1">
              <div className="bg-gray-500 h-4 w-20 animate-pulse rounded"></div>
            </div>
            <div className="text-center flex flex-col md:flex-row md:items-center md:gap-1">
              <div className="bg-gray-500 h-4 w-20 animate-pulse rounded"></div>
            </div>
            <div className="text-center flex flex-col md:flex-row md:items-center md:gap-1">
              <div className="bg-gray-500 h-4 w-20 animate-pulse rounded"></div>
            </div>
          </div>
          <div className="hidden mt-3 flex-col gap-2 md:flex">
            <div className="bg-gray-500 h-4 w-full animate-pulse rounded"></div>
            <div className="bg-gray-500 h-4 w-full animate-pulse rounded"></div>
            <div className="bg-gray-500 h-4 w-full animate-pulse rounded"></div>
          </div>
        </div>
      </div>
      <div className="mt-5 px-3 md:hidden">
        <h2 className="bg-gray-500 h-4 w-full animate-pulse rounded"></h2>
        <p className="bg-gray-500 h-4 w-full mt-2 animate-pulse rounded"></p>
      </div>
      <div className="flex items-center gap-1 my-3 px-3 md:hidden">
        <div className="w-[45%] bg-gray-500 h-4 animate-pulse rounded"></div>
        <div className="w-[45%] bg-gray-500 h-4 animate-pulse rounded"></div>
        <div className="bg-gray-500 h-4 w-[9%] animate-pulse rounded"></div>
      </div>
      <div className="px-3 my-2 md:my-11 flex items-center justify-between">
        <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-500 animate-pulse md:w-[87px] md:h-[87px]"></div>
        <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-500 animate-pulse md:w-[87px] md:h-[87px]"></div>
        <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-500 animate-pulse md:w-[87px] md:h-[87px]"></div>
        <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-500 animate-pulse md:w-[87px] md:h-[87px]"></div>
      </div>
      <div className="grid grid-cols-3 w-full">
        <div className={`flex justify-center items-center py-3`}>
          <div className="h-7 w-7 rounded bg-gray-500 animate-pulse"></div>
        </div>
        <div className={` flex justify-center items-center py-3`}>
          <div className="h-7 w-7 rounded bg-gray-500 animate-pulse"></div>
        </div>
        <div className={`flex justify-center items-center py-3`}>
          <div className="h-7 w-7 rounded bg-gray-500 animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col pt-1">
        <div className="grid grid-cols-3 gap-[2px]">
          <div className="aspect-square">
            <div className="w-full h-full bg-gray-500 animate-pulse rounded"></div>
          </div>
          <div className="aspect-square">
            <div className="w-full h-full bg-gray-500 animate-pulse rounded"></div>
          </div>
          <div className="aspect-square">
            <div className="w-full h-full bg-gray-500 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSkeleton
