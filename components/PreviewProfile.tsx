import { followUser } from "@/utils/fetch";
import { usePost, useUser } from "@/utils/swr";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { KeyedMutator } from "swr";

interface Props {
  userId: string;
}

const PreviewProfile = ({ userId }: Props) => {
  const { data: session } = useSession();
  const userSession = session?.user;

  const {
    post: posts,
    isLoading: isLoadingPost,
    mutate: postMutate,
  }: {
    post: IPost[];
    isLoading: boolean;
    mutate: KeyedMutator<any>;
  } = usePost(userSession?.token as string, undefined, { author: userId, limit: "3" });

  const {
    user,
    isLoading: isLoadingUser,
    mutate: userMutate,
  }: {
    user: IUser;
    isLoading: boolean;
    mutate: KeyedMutator<any>;
  } = useUser(userSession?.token as string, userId);

  const handleFollowUser = async () => {
    try {
      const response = await followUser(userSession?.token as string, userId);
      const data = await response?.json();
      console.log(data);
      if (response?.ok) {
        userMutate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoadingPost || isLoadingUser || !posts || !user) return <p>Loading...</p>;

  return (
    <section className="bg-black w-[360px] rounded-md hidden md:block">
      <div className="flex items-center gap-3 pt-3 px-3">
        <Link href={`/${user._id}/?tab=post`} scroll={false} className="rounded-full min-w-[57px]">
          <Image
            src={user.profile.imageProfile}
            alt="profile"
            width={100}
            height={100}
            className="object-cover rounded-full bg-red-50 p-[2px] bg-gradient-to-r from-[#FECD00] via-[#F9373F] to-[#C913B9] w-14 h-14 "
          />
        </Link>
        <div>
          <Link href={`/${user._id}/?tab=post`} scroll={false} className="font-semibold hover:text-[#A8A8A8]">
            {user.username}
          </Link>
          <p>{user.profile.fullName}</p>
        </div>
      </div>
      <div className="flex w-full justify-between px-8 gap-8 mt-4 ">
        <div className="text-center flex flex-col items-center gap-1">
          <h3 className="font-bold text-lg md:text-sm md:font-semibold">{user.totalPost}</h3>
          <p className="md:text-sm">{user.totalPost <= 1 ? "Post" : "Posts"}</p>
        </div>
        <div className="text-center flex flex-col items-center gap-1">
          <h3 className="font-bold text-lg md:text-sm md:font-semibold">{user.totalFollower}</h3>
          <p className="md:text-sm">{user.totalFollower <= 1 ? "Follower" : "Followers"}</p>
        </div>
        <div className="text-center flex flex-col items-center gap-1">
          <h3 className="font-bold text-lg md:text-sm md:font-semibold">{user.totalFollowing}</h3>
          <p className="md:text-sm">{user.totalFollowing <= 1 ? "Following" : "Followings"}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[2px] mt-3">
        {posts?.map((post) =>
          post.type === "post" ? (
            <Link key={post._id} href={`/p/${post._id}`} className="aspect-square hover:opacity-50">
              <Image
                src={post.media}
                alt={post.caption}
                width={5000}
                height={5000}
                className="object-cover w-full h-full"
              />
            </Link>
          ) : (
            post.type === "reel" && (
              <Link href={`/p/${post._id}`} key={post._id} className="aspect-square hover:opacity-50">
                <video autoPlay muted src={post.media} loop className="object-cover w-full h-full" />
              </Link>
            )
          )
        )}
      </div>
      <div className="w-full p-4">
        {userSession?._id !== user._id ? (
          <button
            onClick={handleFollowUser}
            className={`${
              user.alreadyFollow ? "bg-[#262626]" : "bg-[#0195f7]"
            } py-1 w-full text-center rounded-lg font-semibold hover:bg-[#151515]`}
          >
            {user.alreadyFollow ? "Following" : "Follow"}
          </button>
        ) : (
          <Link
            href={`/profile/edit/${user?.username}`}
            className="bg-[#262626] py-1 w-full block text-center rounded-lg font-semibold hover:bg-[#151515]"
          >
            Edit profile
          </Link>
        )}
      </div>
    </section>
  );
};

export default PreviewProfile;
