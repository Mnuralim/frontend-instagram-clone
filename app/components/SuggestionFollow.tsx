'use client'
import Link from 'next/link'
import React from 'react'
import ListUserCard from './ListUserCard'
import { useUser } from '@/utils/swr'
import { useSession, signOut } from 'next-auth/react'
import { KeyedMutator } from 'swr'
import CardSuggestionFollow from './CardSuggestionFollow'
import { followUser } from '@/utils/fetch'
import Avatar from '@/components/Avatar'
import SuggestionSkeleton from '@/components/skeleton/SuggestionSkeleton'

const SuggestionFollow = () => {
  const { data: session } = useSession()
  const token = session?.user.token
  const {
    user: users,
    isLoading,
    mutate,
  }: { user: IUser[]; isLoading: boolean; mutate: KeyedMutator<any> } = useUser(token as string, undefined, {
    suggestion: 'true',
  })

  const handleFollow = async (id: string) => {
    try {
      const response = await followUser(token as string, id)
      if (response?.ok) {
        mutate()
      }
    } catch (error) {
      throw new Error('Error')
    }
  }

  if (isLoading || !session) return <SuggestionSkeleton />

  return (
    <div className="my-2 md:mt-14 bg-[#1a1a1a] md:bg-black">
      <div className="hidden  items-center justify-between px-10 mt-4 md:flex">
        <div className="flex items-center gap-2">
          <Avatar src={session.user.image} className="w-11 h-11" story={false} userId={session.user._id} />
          <div>
            <h2 className="text-xs font-semibold text-[#F5F5F5]">{session?.user.username}</h2>
            <p className="text-xs text-[#A8A8A8]">{session?.user.name}</p>
          </div>
        </div>
        <button
          name="button-logout"
          onClick={() => signOut({ callbackUrl: '/login' })}
          className={`bg-[#0195f7] py-1 w-[25%] text-xs text-center rounded-md font-semibold hover:bg-[#A8A8A8]`}
        >
          Log out
        </button>
      </div>
      <div className="flex items-center justify-between mt-6 pt-[6px] pb-1 px-3 md:px-10">
        <p className="font-semibold text-sm  md:text-[#A8A8A8]">Suggested for you</p>
        <Link aria-label="link" href={'/'} className="text-xs text-[#0694F1] md:text-[#f2f2f2]">
          See All
        </Link>
      </div>
      {users?.map((user) => (
        <ListUserCard handleFollow={handleFollow} key={user._id} user={user} token={token as string} mutate={mutate} />
      ))}
      <CardSuggestionFollow handleFollow={handleFollow} users={users} />
    </div>
  )
}

export default SuggestionFollow
