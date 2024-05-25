import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  user?: IUser
  history?: IHistory
  isLoading: boolean
  addToHistory: (id: string) => {}
  deleteHistory: (id: string) => {}
}

const SearchList = ({ user, isLoading, history, addToHistory, deleteHistory }: Props) => {
  if (isLoading) return <p>loading</p>
  return (
    <>
      {user && !history && (
        <div
          onClick={() => addToHistory(user._id)}
          className="items-center relative flex justify-between px-2 py-2 hover:bg-[#1A1A1A] cursor-pointer md:px-5 overflow-y-auto"
        >
          <div className="flex items-center gap-2">
            <Image
              src={user?.profile.imageProfile}
              alt="profile"
              width={48}
              height={48}
              className="object-cover w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-xs font-semibold text-[#F5F5F5]">{user?.username}</h2>
              <p className="text-xs text-[#A8A8A8]">{user?.profile.fullName}</p>
            </div>
          </div>
        </div>
      )}
      {!user && history && (
        <div className="items-center relative flex justify-between px-2 py-2 hover:bg-[#1A1A1A] cursor-pointer md:px-5">
          <div onClick={() => addToHistory(history.savedUser._id)} className="flex items-center gap-2 w-[90%]">
            <Image
              src={history.savedUser.profile.imageProfile}
              alt="profile"
              width={48}
              height={48}
              className="object-cover w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-xs font-semibold text-[#F5F5F5]">{history.savedUser.username}</h2>
              <p className="text-xs text-[#A8A8A8]">{history.savedUser.profile.fullName}</p>
            </div>
          </div>
          <button onClick={() => deleteHistory(history._id)} className="hover:scale-110">
            <AiOutlineClose size="20" color="#A8A8A8" />
          </button>
        </div>
      )}
    </>
  )
}

export default SearchList
