'use client'
import { usePost, useUser } from '@/utils/swr'
import { useSession } from 'next-auth/react'
import { KeyedMutator } from 'swr'
import React from 'react'
import HeaderProfile from './components/HeaderProfile'
import BodyProfile from './components/BodyProfile'
import { followUser } from '@/utils/fetch'
import MainPost from './components/MainPost'
import { redirect } from 'next/navigation'
import ProfileSkeleton from '@/components/skeleton/ProfileSkeleton'

interface Params {
  params: {
    userId: string
  }
}

const Page = ({ params: { userId } }: Params) => {
  const { data: session } = useSession({
    onUnauthenticated: () => {
      redirect('/login')
    },
    required: true,
  })

  const token = session?.user.token
  const {
    user,
    isLoading: isLoadingUser,
    mutate: userMutate,
  }: {
    user: IUser
    isLoading: boolean
    mutate: KeyedMutator<any>
  } = useUser(token as string, userId)

  const {
    post: posts,
    isLoading: isLoadingPost,
    mutate: postMutate,
  }: {
    post: IPost[]
    isLoading: boolean
    mutate: KeyedMutator<any>
  } = usePost(token as string, undefined, { author: userId })

  const handleFollowUser = async () => {
    try {
      const response = await followUser(token as string, user._id)
      if (response?.ok) {
        userMutate()
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoadingUser || isLoadingPost || !session) return <ProfileSkeleton />

  return (
    <section className="w-full md:max-w-[67%] mx-auto">
      <HeaderProfile user={user} />
      <BodyProfile user={user} userSessionId={session?.user._id as string} handleFollowUser={handleFollowUser} />
      <MainPost posts={posts} />
    </section>
  )
}

export default Page
