"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { usePost } from "@/utils/swr";
import { KeyedMutator } from "swr";
import PostCard from "./PostCard";

const AllPost = () => {
  const { data: session } = useSession();
  const token = session?.user.token;
  const { post: posts, isLoading, mutate }: { post: IPost[]; isLoading: boolean; mutate: KeyedMutator<any> } = usePost(token as string);

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-1">
      {posts?.map((post, index) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default AllPost;
