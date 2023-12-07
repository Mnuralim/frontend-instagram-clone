import React, { useEffect } from "react";
import { useLikes } from "@/utils/swr";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { KeyedMutator } from "swr";
import Header from "./Header";
import UserLists from "./UserLists";
import { followUser } from "@/utils/fetch";

const MainLikeLists = () => {
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const token = session?.user.token;

  const postId = searchParams?.get("like");

  const { likes, isLoading, mutate }: { likes: ILikes[]; isLoading: boolean; mutate: KeyedMutator<any> } = useLikes(token as string, postId as string);

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleFollow = async (id: string) => {
    try {
      const response = await followUser(token as string, id);
      if (response?.ok) {
        mutate();
      }
    } catch (error) {
      throw new Error("Error");
    }
  };

  if (!likes || isLoading) return <p>loading</p>;
  return (
    <section className="fixed bg-black inset-0 top-0 left-0 z-50 flex justify-center items-center md:bg-opacity-50">
      <div className="w-full h-full z-10 bg-black md:rounded-xl md:max-w-[27%] md:max-h-[53%] md:bg-[#262626]">
        <Header />
        {likes.map((like) => (
          <UserLists key={like._id} like={like} handleFollow={handleFollow} currentUserId={session?.user._id as string} />
        ))}
      </div>
    </section>
  );
};

export default MainLikeLists;
