'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Header from './components/Header'
import PostCard from '@/components/PostCard'
import { usePost } from '@/utils/swr'
import PostSkeleton from '@/components/skeleton/PostSkeleton'

interface Params {
  params: {
    id: string
  }
}

const Page = ({ params }: Params) => {
  const { data: session } = useSession()
  const { post, isLoading, mutate, isValidating } = usePost(session?.user.token as string, params.id)
  if (!session || isLoading) return <PostSkeleton numberOfBlocks={1} />
  return (
    <section className="w-full md:max-w-[90%] lg:max-w-[67%] mx-auto">
      <Header />
      <PostCard mutate={mutate} post={post} isValidating={isValidating} />
    </section>
  )
}

export default Page
