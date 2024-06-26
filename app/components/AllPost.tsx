'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { usePost } from '@/utils/swr'
import PostCard from '@/components/PostCard'
import { KeyedMutator } from 'swr'
import UploadingLoad from '@/components/UploadingLoad'
import PostSkeleton from '@/components/skeleton/PostSkeleton'
import SuggestionFollow from './SuggestionFollow'

const AllPost = () => {
  const { data: session } = useSession()
  const token = session?.user.token
  const {
    post: posts,
    isLoading,
    mutate,
    isValidating,
  }: { post: IPost[]; isLoading: boolean; mutate: KeyedMutator<any>; isValidating: boolean } = usePost(token as string)

  if (isLoading || !session) return <PostSkeleton numberOfBlocks={10} />

  return (
    <div className="mt-1 md:max-w-[80%] lg:max-w-[67%] md:mx-auto mb-20 md:mt-10 overflow-y-hidden">
      <UploadingLoad />
      {posts?.map((post, index) => (
        <div key={post._id}>
          <PostCard post={post} mutate={mutate} isValidating={isValidating} />
          {index === 0 && (
            <div className="md:hidden">
              <SuggestionFollow />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AllPost
