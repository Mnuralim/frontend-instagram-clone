import React from "react";
import Link from "next/link";

interface Props {
  posts: IPost[];
}

const ReelProfile = ({ posts }: Props) => {
  return (
    <section className="flex flex-col pt-1 text-white w-full">
      <div className="grid grid-cols-3 gap-[2px] md:grid-cols-4">
        {posts.map(
          (post) =>
            post.type === "reel" && (
              <Link href={"/"} key={post._id} className="aspect-[13/20] hover:opacity-50">
                <video autoPlay muted src={post.media} loop className="object-cover w-full h-full" />
              </Link>
            )
        )}
      </div>
    </section>
  );
};

export default ReelProfile;
