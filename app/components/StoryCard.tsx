import Image from 'next/image'
import React from 'react'

const StoryCard = () => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="rounded-full flex overflow-hidden w-16 h-16 bg-red-50 p-[2px] bg-gradient-to-r from-[#FECD00] via-[#F9373F] to-[#C913B9]">
        <Image
          src={'/image/giphy.gif'}
          alt="profile"
          unoptimized
          width={100}
          height={100}
          className="object-cover w-full h-full rounded-full bg-blue-400  border-black border-4"
        />
      </div>
      <p className="text-[10px] font-semibold">izzycracker04</p>
    </div>
  )
}

export default StoryCard
