import Image from 'next/image';
import React from 'react';
import { useSession } from 'next-auth/react';

interface Props {
  post: IPost;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const CommentBar = ({ post, text, setText, handleSubmit }: Props) => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="fixed  flex justify-between items-center border-slate-50/25 md:left-1/2 bottom-0 gap-3 w-full px-3 py-2 bg-[#262626] md:bottom-6 md:bg-black md:max-w-[37%] md:border-l ">
      <div className="aspect-square min-w-[40px]">
        <Image
          src={user?.image as string}
          alt={'profile'}
          width={4000}
          height={4000}
          className="object-cover w-10 h-10 rounded-full"
        />
      </div>
      <form onSubmit={handleSubmit} className="w-full flex">
        <div className="w-full">
          <input
            type="text"
            placeholder={`Add a comment for ${post.userId.username}...`}
            className="w-full outline-none  py-1 bg-transparent text-sm"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button title="submit-comment" className="text-sm text-blue-500 hover:text-[#A8A8A8]" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentBar;
