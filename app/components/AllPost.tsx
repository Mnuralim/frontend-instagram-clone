'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { usePost } from '@/utils/swr'
import PostCard from '@/components/PostCard'
import { KeyedMutator } from 'swr'
import SuggestionFollow from './SuggestionFollow'
import UploadingLoad from '@/components/UploadingLoad'
import PostSkeleton from '@/components/skeleton/PostSkeleton'

const AllPost = () => {
  const { data: session } = useSession()
  const token = session?.user.token
  const {
    post: posts,
    isLoading,
    mutate,
  }: { post: IPost[]; isLoading: boolean; mutate: KeyedMutator<any> } = usePost(token as string)

  if (isLoading) return <PostSkeleton />

  return (
    <div className="mt-1 md:max-w-[67%] md:mx-auto md:mt-10 overflow-y-hidden">
      <UploadingLoad />
      {posts?.map((post, index) => (
        <div key={post._id}>
          <PostCard post={post} mutate={mutate} />
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
