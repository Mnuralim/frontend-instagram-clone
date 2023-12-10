import React from 'react'
import ButtonBack from '../ButtonBack'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  return (
    <div className="flex w-full bg-black z-20 sticky top-0 justify-between items-center py-2 px-2 md:border-opacity-20 border-white md:rounded-t-xl md:border-b-[1px] md:bg-[#262626]">
      <div className="w-10">
        <span className="md:hidden">
          <ButtonBack />
        </span>
      </div>
      <h2 className="font-semibold">Likes</h2>
      <button name="button-back" className="w-10">
        <span className="hidden md:block">
          <AiOutlineClose onClick={() => router.back()} size="23" color="#fff" className="cursor-pointer" />
        </span>
      </button>
    </div>
  )
}

export default Header
