import { useComment, usePost } from "@/utils/swr";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { KeyedMutator } from "swr";
import Image from "next/image";
import { Comment } from "./Comment";

interface Props {
  postId: string;
}

const DetailPost = ({ postId }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const router = useRouter();
  const vidRef = useRef<HTMLVideoElement>(null);

  const { data: session } = useSession();

  const {
    comments,
    isLoading: IsloadingComment,
    mutate,
  }: { comments: IComment[]; isLoading: boolean; mutate: KeyedMutator<any> } = useComment(
    session?.user.token as string,
    postId
  );
  const { post, isLoading: isLoadingPost }: { post: IPost; isLoading: boolean; mutate: KeyedMutator<any> } = usePost(
    session?.user.token as string,
    postId
  );

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleVideoClick = () => {
    if (vidRef.current) {
      if (isPlaying) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!comments || !post || isLoadingPost || IsloadingComment) return <p>loading...</p>;

  return (
    <section className="fixed bg-black inset-0 top-0 left-0 z-50 flex justify-center items-center md:bg-opacity-50">
      <div className="absolute right-4 top-4 hidden md:block">
        <AiOutlineClose onClick={() => router.back()} size="23" color="#fff" className="cursor-pointer" />
      </div>
      <div className="w-full h-full z-10 cursor-pointer relative grid grid-cols-1 md:p-6 md:max-w-[78%] md:grid-cols-2">
        <div className={`hidden md:block overflow-hidden bg-black`}>
          {post.type === "post" && (
            <Image
              width={50000}
              height={50000}
              alt={post.media}
              src={post.media}
              className="object-fill w-full h-full"
            />
          )}
          {post.type === "reel" && (
            <video
              onClick={handleVideoClick}
              ref={vidRef}
              src={post.media}
              autoPlay
              loop
              className="w-full object-fill"
            />
          )}
        </div>
        <Comment post={post} comments={comments} token={session?.user.token as string} mutate={mutate} />
      </div>
    </section>
  );
};

export default DetailPost;
