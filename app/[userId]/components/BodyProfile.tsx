import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { HiOutlineUserAdd } from 'react-icons/hi'
import StoryProfile from './StoryProfile'
import TabPost from './TabPost'
import { IoSettingsSharp } from 'react-icons/io5'
import ModalOptions from './ModalOptions'

interface Props {
  user: IUser
  userSessionId: string
  handleFollowUser: () => {}
}

const BodyProfile = ({ user, userSessionId, handleFollowUser }: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const isMyProfile = user?._id === userSessionId

  const handleCloseModal = () => {
    setShowOptions(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 w-full mt-7 px-3 md:px-8">
        <div className="md:w-1/3">
          <div className="min-w-[81px] md:min-w-[144px]">
            <Image
              src={user?.profile.imageProfile}
              alt={user?.username || 'profile'}
              width={8000}
              height={8000}
              className="object-center w-20 h-20 rounded-full md:w-36 md:h-36"
            />
          </div>
        </div>
        <div className="md:w-2/3 self-center">
          {isMyProfile ? (
            <div className="items-center w-full gap-3 mb-5 hidden md:flex">
              <p className="text-lg">{user?.username}</p>
              <Link
                aria-label="link"
                href={`/${user?._id}/?tab=edit`}
                scroll={false}
                className="bg-[#262626] py-1 w-28 text-center rounded-lg font-semibold hover:bg-[#151515]"
              >
                Edit profile
              </Link>
              <button
                name="button-share"
                className="bg-[#262626] py-1 w-28  text-center rounded-lg font-semibold hover:bg-[#151515]"
              >
                Share profile
              </button>
              <button onClick={() => setShowOptions(true)}>
                <IoSettingsSharp size={24} />
              </button>
            </div>
          ) : (
            <div className="items-center w-full gap-3 mb-5 hidden md:flex">
              <p className="text-lg">{user?.username}</p>
              <button
                name="button-follow"
                onClick={handleFollowUser}
                className={`${
                  user?.alreadyFollow ? 'bg-[#262626]' : 'bg-[#0195f7]'
                } py-1 w-28 text-center rounded-lg font-semibold hover:bg-[#151515]`}
              >
                {user.alreadyFollow ? 'Following' : 'Follow'}
              </button>
              <button
                name="button-message"
                className="bg-[#262626] py-1 w-28 text-center rounded-lg font-semibold hover:bg-[#151515]"
              >
                Message
              </button>
              <button
                name="button-add"
                className="bg-[#262626] py-1 w-[9%]  rounded-lg font-semibold hover:bg-[#151515]"
              >
                <HiOutlineUserAdd className="text-center inline-block transform scale-x-[-1]" />
              </button>
            </div>
          )}
          <div className="flex flex-wrap gap-3 md:gap-10">
            <div className="text-center flex flex-col md:flex-row md:items-center md:gap-1">
              <h3 className="font-bold text-lg md:text-sm md:font-semibold">{user?.totalPost}</h3>
              <p className="md:text-sm">{user?.totalPost <= 1 ? 'Post' : 'Posts'}</p>
            </div>
            <div className="text-center flex flex-col md:flex-row md:items-center md:gap-1">
              <h3 className="font-bold text-lg md:text-sm md:font-semibold">{user?.totalFollower}</h3>
              <p className="md:text-sm">{user?.totalFollower <= 1 ? 'Follower' : 'Followers'}</p>
            </div>
            <div className="text-center flex flex-col md:flex-row md:items-center md:gap-1">
              <h3 className="font-bold text-lg md:text-sm md:font-semibold">{user?.totalFollowing}</h3>
              <p className="md:text-sm">{user?.totalFollowing <= 1 ? 'Following' : 'Followings'}</p>
            </div>
          </div>
          <div className="hidden mt-3 flex-col gap-2 md:flex">
            <h2 className="font-semibold text-sm">{user?.profile.fullName}</h2>
            <p className="text-sm">{user?.profile?.bio}</p>
            {user.profile.link && (
              <Link
                aria-label="link"
                href={`https://${user?.profile?.link}`}
                target="_blank"
                className="text-sm text-[#E0F1FF]"
              >
                <AiOutlineLink className="inline text-lg" /> {user?.profile?.link}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mt-1 px-3 md:hidden">
        <h2 className="font-semibold text-lg">{user?.profile.fullName}</h2>
        <p className="text-sm">{user?.profile?.bio}</p>
        {user.profile.link && (
          <Link
            aria-label="link"
            href={`https://${user?.profile?.link}`}
            target="_blank"
            className="text-sm text-[#E0F1FF]"
          >
            <AiOutlineLink className="inline text-lg" /> {user?.profile?.link}
          </Link>
        )}
      </div>
      {isMyProfile ? (
        <div className="flex items-center gap-1 my-3 px-3 md:hidden">
          <Link
            aria-label="link"
            href={`/${user?._id}/?tab=edit`}
            scroll={false}
            className="bg-[#262626] py-1 w-[45%] text-center rounded-lg font-semibold hover:bg-[#151515]"
          >
            Edit profile
          </Link>
          <button
            name="button-share"
            className="bg-[#262626] py-1 w-[45%] text-center rounded-lg font-semibold hover:bg-[#151515]"
          >
            Share profile
          </button>
          <button name="button-add" className="bg-[#262626] py-1 w-[9%]  rounded-lg font-semibold hover:bg-[#151515]">
            <HiOutlineUserAdd className="text-center inline-block transform scale-x-[-1]" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1 my-3 px-3 md:hidden">
          <button
            name="button-follow"
            onClick={handleFollowUser}
            className={`${
              user?.alreadyFollow ? 'bg-[#262626]' : 'bg-[#0195f7]'
            } py-1 w-[45%] text-center rounded-lg font-semibold`}
          >
            {user.alreadyFollow ? 'Following' : 'Follow'}
          </button>
          <button
            name="button-message"
            className="bg-[#262626] py-1 w-[45%] text-center rounded-lg font-semibold hover:bg-[#151515]"
          >
            Message
          </button>
          <button name="button-add" className="bg-[#262626] py-1 w-[9%]  rounded-lg font-semibold hover:bg-[#151515]">
            <HiOutlineUserAdd className="text-center inline-block transform scale-x-[-1]" />
          </button>
        </div>
      )}
      <StoryProfile />
      <TabPost user={user} />
      <ModalOptions isOpen={showOptions} onClose={handleCloseModal} />
    </div>
  )
}

export default BodyProfile
