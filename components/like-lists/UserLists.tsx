import Link from 'next/link'
import Image from 'next/image'

interface Props {
  like: ILikes
  handleFollow: (id: string) => Promise<void>
  currentUserId: string
}

const UserLists = ({ like, handleFollow, currentUserId }: Props) => {
  return (
    <div className="items-center flex justify-between px-2 mt-4">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="group relative">
          <Link aria-label="link" href={`/${like._id}/?tab=post`} className="min-w-[44px]">
            <Image
              src={like.profile.imageProfile}
              alt="profile"
              width={44}
              height={44}
              className="object-cover w-11 h-11 rounded-full"
            />
          </Link>
        </div>
        <div>
          <div className="group relative ">
            <Link
              aria-label="link"
              href={`/${like._id}/?tab=post`}
              className="text-xs font-semibold text-[#F5F5F5] hover:text-[#A8A8A8]"
            >
              {like.username}
            </Link>
          </div>
          <p className="text-xs text-[#A8A8A8]">{like.profile.fullName}</p>
        </div>
      </div>
      {currentUserId === like._id ? null : (
        <button
          name="handle-follow"
          onClick={() => handleFollow(like._id)}
          className={`${
            like.alreadyFollow ? 'bg-[#A8A8A8]' : 'bg-[#0195f7]'
          } py-2 w-[25%] text-xs text-center rounded-md font-semibold hover:bg-[#262626]`}
        >
          {like.alreadyFollow ? 'Following' : 'Follow'}
        </button>
      )}
    </div>
  )
}

export default UserLists
