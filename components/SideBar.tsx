'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

import { PiCompassFill, PiHouse, PiHouseFill, PiMessengerLogo, PiMessengerLogoFill } from 'react-icons/pi'
import { FiPlusSquare, FiSearch } from 'react-icons/fi'
import { AiFillHeart, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai'
import { ReelIcons1, ReelIcons2 } from './ReelIcons'
import Logo from './IgLogo'
import SearchMenu from './SearchMenu'
import { BsInstagram } from 'react-icons/bs'

const SideBar = () => {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const searchTab = searchParams?.get('search') === 'true'

  const handleShowSearchMenu = () => {
    if (!searchTab) {
      router.push(`${pathName}/?search=true`, { scroll: false })
    } else {
      router.push(`${pathName}`, { scroll: false })
    }
  }

  const sideBarClassName = `flex gap-3 items-center px-2 py-3 rounded-md transition-all ease-in-out duration-300 group ${
    searchTab ? '' : 'hover:bg-[#1A1A1A]'
  } `
  const sideBarIconClassName = 'group-hover:scale-110 transition-all ease-in-out duration-300 '

  return (
    <aside
      className={`hidden fixed left-0 top-0 h-screen z-20 w-full border-r border-r-slate-400 border-opacity-20 max-w-[16%]  ${
        pathName !== '/login' && pathName !== '/register' ? 'md:block' : 'md:hidden'
      }`}
    >
      <Logo
        className={`mt-8 mx-3 white-logo transform transition-all ease-in-out duration-500 ${
          searchTab ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      />
      <BsInstagram
        size="28"
        className={`mx-6 -mt-7 white-logo transform transition-all ease-in-out duration-700 ${
          !searchTab ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      />
      <div className="px-3 flex flex-col mt-10">
        <Link aria-label="link" href={'/'} prefetch={false} scroll={false} className={sideBarClassName}>
          {pathName == '/' ? (
            <PiHouseFill size="28" className={sideBarIconClassName} />
          ) : (
            <PiHouse size="28" className="" />
          )}
          <p
            className={`${pathName} === "/" ? "font-semibold" : "font-normal" ${
              searchTab ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Home
          </p>
        </Link>
        <button onClick={handleShowSearchMenu} className={sideBarClassName}>
          <div className={`${searchTab ? 'border p-2 -my-2 -mx-2 hover:bg-[#1A1A1A]' : ''} rounded-md`}>
            {pathName == '/#search' ? (
              <FiSearch size="28" className={sideBarIconClassName} />
            ) : (
              <FiSearch size="28" className={`${sideBarIconClassName} opacity-95`} />
            )}
          </div>
          <p
            className={`${pathName} === "/#search" ? "font-semibold" : "font-normal" ${
              searchTab ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Search
          </p>
        </button>
        <Link aria-label="link" href={'/explore'} prefetch={false} scroll={false} className={sideBarClassName}>
          <div className={`${searchTab ? 'p-2 -my-2 -mx-2 hover:bg-[#1A1A1A]' : ''} rounded-md`}>
            {pathName == '/explore' ? (
              <PiCompassFill size="28" className={sideBarIconClassName} />
            ) : (
              <AiOutlineCompass size="28" className={sideBarIconClassName} />
            )}
          </div>
          <p
            className={`${pathName} === "/explore" ? "font-semibold" : "font-normal" ${
              searchTab ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Explore
          </p>
        </Link>
        <Link
          aria-label="link"
          href={'/reel'}
          className={`flex gap-[14px] items-center px-[10px] py-3 rounded-md transition-all ease-in-out duration-300 group ${
            searchTab ? '' : 'hover:bg-[#1A1A1A]'
          }`}
        >
          <div className={`${searchTab ? 'p-3 -my-2 mx-[-12px] hover:bg-[#1A1A1A]' : ''} rounded-md`}>
            {pathName == '/reel' ? (
              <ReelIcons1 className=" white-logo" />
            ) : (
              <ReelIcons2 className={sideBarIconClassName} />
            )}
          </div>
          <p
            className={`${pathName} === "/reel" ? "font-semibold" : "font-normal" ${
              searchTab ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Reel
          </p>
        </Link>
        <Link aria-label="link" href={'/direct'} prefetch={false} scroll={false} className={sideBarClassName}>
          <div className={`${searchTab ? 'p-2 -my-2 -mx-2 hover:bg-[#1A1A1A]' : ''} rounded-md`}>
            {pathName == '/direct' ? (
              <PiMessengerLogoFill size="28" className={sideBarIconClassName} />
            ) : (
              <PiMessengerLogo size="28" className={sideBarIconClassName} />
            )}
          </div>
          <p
            className={`${pathName} === "/direct" ? "font-semibold" : "font-normal" ${
              searchTab ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Messages
          </p>
        </Link>
        <Link aria-label="link" href={'/notification'} prefetch={false} scroll={false} className={sideBarClassName}>
          <div className={`${searchTab ? 'p-2 -my-2 -mx-2 hover:bg-[#1A1A1A]' : ''} rounded-md`}>
            {pathName == '/notification' ? (
              <AiFillHeart size="28" className={sideBarIconClassName} />
            ) : (
              <AiOutlineHeart size="28" className={sideBarIconClassName} />
            )}
          </div>
          <p
            className={`${pathName} === "/notification" ? "font-semibold" : "font-normal" ${
              searchTab ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Notifications
          </p>
        </Link>
        <Link
          aria-label="link"
          href={`${pathName}/?create=true`}
          prefetch={false}
          scroll={false}
          className={sideBarClassName}
        >
          <div className={`${searchTab ? 'p-2 -my-2 -mx-2 hover:bg-[#1A1A1A]' : ''} rounded-md`}>
            {pathName == '/s' ? (
              <FiPlusSquare size="28" className={sideBarIconClassName} />
            ) : (
              <FiPlusSquare size="28" className={sideBarIconClassName} />
            )}
          </div>
          <p
            className={`${pathName} === "/s" ? "font-semibold" : "font-normal" ${
              searchTab ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Create
          </p>
        </Link>
        <Link
          aria-label="link"
          href={`/${session?.user._id}/?tab=post`}
          prefetch={false}
          scroll={false}
          className={sideBarClassName}
        >
          <div className={`${searchTab ? 'p-2 -my-2 -mx-2 hover:bg-[#1A1A1A]' : ''} rounded-md`}>
            <Image
              src={session?.user.image as string}
              width={28}
              height={28}
              alt="avatar"
              className={`rounded-full object-cover w-7 h-7 border-2 border-white ${
                pathName === `/${session?.user._id}` ? 'border-opacity-100' : 'border-opacity-0'
              }`}
            />
          </div>
          <p
            className={`${pathName} === "/${session?.user._id}" ? "font-semibold" : "font-normal" ${
              searchTab ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Profile
          </p>
        </Link>
      </div>
      <div
        className={`absolute h-full top-0 transform transition-all ease-out duration-500 ${
          searchParams?.get('search') == 'true' ? 'left-20' : 'left-[-420px]'
        }`}
      >
        <SearchMenu />
      </div>
    </aside>
  )
}

export default SideBar
