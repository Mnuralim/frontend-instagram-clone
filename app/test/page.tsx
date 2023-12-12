import PostSkeleton from '@/components/skeleton/PostSkeleton'
import ProfileSkeleton from '@/components/skeleton/ProfileSkeleton'
import ReelSkeleton from '@/components/skeleton/ReelSkeleton'
import SuggestionSkeleton from '@/components/skeleton/SuggestionSkeleton'
import React from 'react'

const Page = () => {
  return (
    <div className="w-full md:max-w-[67%] mx-auto">
      <PostSkeleton numberOfBlocks={10} />
    </div>
  )
}

export default Page
