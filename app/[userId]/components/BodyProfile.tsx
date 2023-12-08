import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { HiOutlineUserAdd } from 'react-icons/hi';
import StoryProfile from './StoryProfile';
import TabPost from './TabPost';

interface Props {
  user: IUser;
  userSessionId: string;
  handleFollowUser: () => {};
}

const BodyProfile = ({ user, userSessionId, handleFollowUser }: Props) => {
  const isMyProfile = user?._id === userSessionId;

  return (
    <div>
      <div className="flex items-center justify-between gap-3 w-full mt-7 px-3 md:px-8">
        <div className="md:w-1/3">
          <Image
            src={user?.profile.imageProfile}
            alt={user?.username || 'profile'}
            width={8000}
            height={8000}
            className="object-center w-20 h-20 rounded-full md:w-36 md:h-36"
          />
        </div>
        <div className="md:w-2/3 self-center">
          {isMyProfile ? (
            <div className="items-center w-full gap-3 mb-5 hidden md:flex">
              <p className="text-lg">{user?.username}</p>
              <Link
                href={`/${user?._id}/?tab=edit`}
                scroll={false}
                className="bg-[#262626] py-1 w-28 text-center rounded-lg font-semibold hover:bg-[#151515]"
              >
                Edit profile
              </Link>
              <button className="bg-[#262626] py-1 w-28  text-center rounded-lg font-semibold hover:bg-[#151515]">
                Share profile
              </button>
            </div>
          ) : (
            <div className="items-center w-full gap-3 mb-5 hidden md:flex">
              <p className="text-lg">{user?.username}</p>
              <button
                onClick={handleFollowUser}
                className={`${
                  user?.alreadyFollow ? 'bg-[#262626]' : 'bg-[#0195f7]'
                } py-1 w-28 text-center rounded-lg font-semibold hover:bg-[#151515]`}
              >
                {user.alreadyFollow ? 'Following' : 'Follow'}
              </button>
              <button className="bg-[#262626] py-1 w-28 text-center rounded-lg font-semibold hover:bg-[#151515]">
                Message
              </button>
              <button className="bg-[#262626] py-1 w-[9%]  rounded-lg font-semibold hover:bg-[#151515]">
                <HiOutlineUserAdd className="text-center inline-block transform scale-x-[-1]" />
              </button>
            </div>
          )}
          <div className="flex gap-8 md:gap-10">
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
              <Link href={`https://${user?.profile?.link}`} target="_blank" className="text-sm text-[#E0F1FF]">
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
          <Link href={`https://${user?.profile?.link}`} target="_blank" className="text-sm text-[#E0F1FF]">
            <AiOutlineLink className="inline text-lg" /> {user?.profile?.link}
          </Link>
        )}
      </div>
      {isMyProfile ? (
        <div className="flex items-center gap-1 my-3 px-3 md:hidden">
          <Link
            href={`/${user?._id}/?tab=edit`}
            scroll={false}
            className="bg-[#262626] py-1 w-[45%] text-center rounded-lg font-semibold hover:bg-[#151515]"
          >
            Edit profile
          </Link>
          <button className="bg-[#262626] py-1 w-[45%] text-center rounded-lg font-semibold hover:bg-[#151515]">
            Share profile
          </button>
          <button className="bg-[#262626] py-1 w-[9%]  rounded-lg font-semibold hover:bg-[#151515]">
            <HiOutlineUserAdd className="text-center inline-block transform scale-x-[-1]" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1 my-3 px-3 md:hidden">
          <button
            onClick={handleFollowUser}
            className={`${
              user?.alreadyFollow ? 'bg-[#262626]' : 'bg-[#0195f7]'
            } py-1 w-[45%] text-center rounded-lg font-semibold`}
          >
            {user.alreadyFollow ? 'Following' : 'Follow'}
          </button>
          <button className="bg-[#262626] py-1 w-[45%] text-center rounded-lg font-semibold hover:bg-[#151515]">
            Message
          </button>
          <button className="bg-[#262626] py-1 w-[9%]  rounded-lg font-semibold hover:bg-[#151515]">
            <HiOutlineUserAdd className="text-center inline-block transform scale-x-[-1]" />
          </button>
        </div>
      )}
      <StoryProfile />
      <TabPost user={user} />
    </div>
  );
};

export default BodyProfile;
