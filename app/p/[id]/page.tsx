"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Header from "./components/Header";
import PostCard from "@/components/PostCard";
import { usePost } from "@/utils/swr";

interface Params {
  params: {
    id: string;
  };
}

const Page = ({ params }: Params) => {
  const { data: session } = useSession();
  const { post, isLoading, mutate } = usePost(session?.user.token as string, params.id);
  if (!post || isLoading) return <p>loading</p>;
  return (
    <section>
      <Header />
      <PostCard mutate={mutate} post={post} />
    </section>
  );
};

export default Page;
