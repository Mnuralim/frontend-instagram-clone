'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import PostCard from '@/components/PostCard'
import { usePost } from '@/utils/swr'
import PostSkeleton from '@/components/skeleton/PostSkeleton'

interface Props {
  params: {
    id: string
  }
}

const Post = ({ params }: Props) => {
  const { data: session } = useSession()
  const { post, isLoading, mutate, isValidating } = usePost(session?.user.token as string, params.id)
  if (!session || isLoading) return <PostSkeleton numberOfBlocks={1} />
  return <PostCard mutate={mutate} post={post} isValidating={isValidating} />
}

export default Post
