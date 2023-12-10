'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

import { PiHouse, PiHouseFill } from 'react-icons/pi'
import { FiPlusSquare, FiSearch } from 'react-icons/fi'
import { ReelIcons1, ReelIcons2 } from './ReelIcons'

const Navbar = () => {
  const { data: session } = useSession()
  const pathName = usePathname()
  return (
    <nav
      className={`${
        pathName === '/login' || pathName === '/register' ? 'hidden' : ''
      } fixed bottom-0 left-0 z-20 bg-black w-full px-3 flex items-center justify-between max-w-full md:hidden`}
    >
      <Link
        aria-label="link"
        href={'/'}
        scroll={false}
        className="px-2 py-2 rounded-md transition-all ease-in-out duration-300 hover:bg-[#1A1A1A] group"
      >
        {pathName == '/' ? (
          <PiHouseFill size="25" className="group-hover:scale-110 transition-all ease-in-out duration-300" />
        ) : (
          <PiHouse size="25" className="group-hover:scale-110 transition-all ease-in-out duration-300" />
        )}
      </Link>
      <Link
        aria-label="link"
        href={'/explore'}
        scroll={false}
        className="px-2 py-2 rounded-md transition-all ease-in-out duration-300 hover:bg-[#1A1A1A] group"
      >
        {pathName == '/explore' ? (
          <FiSearch size="25" className="group-hover:scale-110 transition-all ease-in-out duration-300" />
        ) : (
          <FiSearch
            size="25"
            className="group-hover:scale-110 font-bold transition-all ease-in-out duration-300 opacity-95"
          />
        )}
      </Link>
      <Link
        aria-label="link"
        href={`${pathName}/?create=true`}
        scroll={false}
        className="px-2 py-2 rounded-md transition-all ease-in-out duration-300 hover:bg-[#1A1A1A] group"
      >
        {pathName == '/s' ? (
          <FiPlusSquare size="25" className="group-hover:scale-110 transition-all ease-in-out duration-300" />
        ) : (
          <FiPlusSquare size="25" className="group-hover:scale-110 transition-all ease-in-out duration-300" />
        )}
      </Link>
      <Link
        aria-label="link"
        href={'/reel'}
        scroll={false}
        className="flex gap-[14px] items-center px-[10px] py-3 rounded-md transition-all ease-in-out duration-300 hover:bg-[#1A1A1A] group"
      >
        {pathName == '/reel' ? (
          <ReelIcons1 className="group-hover:scale-110 transition-all ease-in-out duration-300 white-logo" />
        ) : (
          <ReelIcons2 className="group-hover:scale-110 transition-all ease-in-out duration-300" />
        )}
      </Link>
      <Link
        aria-label="link"
        href={`/${session?.user._id}/?tab=post`}
        scroll={false}
        className="flex gap-3 items-center px-2 py-2 rounded-md transition-all ease-in-out duration-300 hover:bg-[#1A1A1A] group"
      >
        {session && (
          <Image
            src={session?.user.image as string}
            width={28}
            height={28}
            alt="avatar"
            className={`rounded-full object-cover w-7 h-7 border border-white ${
              pathName === '/#s' ? 'border-opacity-100' : 'border-opacity-0'
            }`}
          />
        )}
      </Link>
    </nav>
  )
}

export default Navbar
