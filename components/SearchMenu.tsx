'use client'

import React, { useState } from 'react'
import ButtonBack from './ButtonBack'
import SearchList from './SearchList'
import { useHistory, useUser } from '@/utils/swr'
import { useSession } from 'next-auth/react'
import { KeyedMutator } from 'swr'

import { addToHistory, clearHistory, deleteHistory } from '@/utils/fetch'
import { useRouter } from 'next/navigation'

const SearchMenu = () => {
  const [username, setUsername] = useState<string>('')
  const router = useRouter()

  const { data: session } = useSession()
  const token = session?.user.token
  const {
    user: users,
    mutate,
    isLoading,
  }: { user: IUser[]; isLoading: boolean; mutate: KeyedMutator<any> } = useUser(token as string, undefined, {
    username: username,
  })
  const {
    histories,
    mutate: historyMutate,
    isLoading: isLoadingHistory,
  }: { histories: IHistory[]; isLoading: boolean; mutate: KeyedMutator<any> } = useHistory(token as string)

  const handleAddToHistory = async (id: string) => {
    router.push(`/${id}/?tab=post`, { scroll: false })
    const response = await addToHistory(token as string, id)
    if (response?.ok) {
      mutate()
      historyMutate()
    }
  }

  const handleDeleteHistory = async (id: string) => {
    const response = await deleteHistory(token as string, id)
    if (response?.ok) {
      historyMutate()
    }
  }

  const handleClearHistory = async () => {
    const response = await clearHistory(token as string)
    if (response?.ok) {
      historyMutate()
    }
  }

  return (
    <div className={`h-full w-full bg-black md:w-[395px] overflow-y-auto`}>
      <div className="sticky top-0 z-50 bg-black">
        <h1 className="font-semibold text-2xl pt-5 px-4 hidden md:block">Search</h1>
        <div className="px-2 flex items-center gap-1 mt-2 md:px-4 md:mt-10">
          <span className="md:hidden">
            <ButtonBack />
          </span>
          <input
            type="search"
            autoFocus
            className="bg-[#262626] w-full px-3 py-2 rounded-lg outline-none"
            placeholder="Search"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex items-center mt-4 mb-4 justify-between px-2 md:px-5 md:mt-10 md:mb-6">
          <p className="font-semibold md:text-[#A8A8A8]">Recent</p>
          <button onClick={handleClearHistory} className="text-[#0694F1] hover:text-white">
            Clear All
          </button>
        </div>
      </div>
      {username.length === 0
        ? histories?.map((history) => (
            <SearchList
              key={history._id}
              history={history}
              isLoading={isLoading}
              addToHistory={handleAddToHistory}
              deleteHistory={handleDeleteHistory}
            />
          ))
        : users?.map((user) => (
            <SearchList
              key={user._id}
              user={user}
              isLoading={isLoading}
              addToHistory={handleAddToHistory}
              deleteHistory={handleDeleteHistory}
            />
          ))}
    </div>
  )
}

export default SearchMenu
