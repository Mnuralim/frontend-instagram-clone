import React, { useEffect, useRef, useState } from "react";
import CommentHeader from "./CommentHeader";
import CommentList from "./CommentList";
import Caption from "./Caption";
import CommentBar from "./CommentBar";
import { addComment, replyComment } from "@/utils/fetch";
import { AiOutlineClose } from "react-icons/ai";
import { KeyedMutator } from "swr";
import Controll from "./Controll";

interface Props {
  post: IPost;
  comments: IComment[];
  token: string;
  mutate: KeyedMutator<any>;
}

export const Comment = ({ post, comments, token, mutate }: Props) => {
  const [openReplies, setOpenReplies] = useState<number | null>(null);
  const [typeComment, setTypeComment] = useState<string>("comment");
  const [text, setText] = useState<string>("");
  const [commentId, setCommentId] = useState<string>("");
  const [commentUsername, setCommentUsername] = useState<string>("");
  const [scrolltoTop, setScrolltoTop] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById("top-list")?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [scrolltoTop]);

  const repliesTogle = (index: number) => {
    if (openReplies === index) {
      return setOpenReplies(null);
    }
    setOpenReplies(index);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response =
        typeComment === "comment"
          ? await addComment(token, post._id, text)
          : await replyComment(token, commentId, text);
      if (response?.ok) {
        setTypeComment("comment");
        mutate();
        setText("");
        typeComment === "comment" ? setScrolltoTop((prev) => !prev) : null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChooseComment = (commentId: string, username: string) => {
    setCommentId(commentId);
    setCommentUsername(username);
    setText(`@${username}`);
    setTypeComment("reply");
  };

  const handleCloseChooseComment = () => {
    setCommentId("");
    setCommentUsername("");
    setTypeComment("comment");
    setText("");
  };

  return (
    <section className="bg-[#262626] border-slate-50/25 overflow-y-auto no-scrollbar pb-28 md:bg-black md:border-l">
      <CommentHeader />
      <Caption post={post} />
      <div className="flex flex-col gap-3 mt-16 md:mt-4">
        {comments.map((comment, index) => (
          <CommentList
            key={comment._id}
            comment={comment}
            open={index === openReplies}
            togle={() => repliesTogle(index)}
            chooseComment={handleChooseComment}
          />
        ))}
      </div>
      {typeComment === "reply" && (
        <div className="bg-[#363636] z-50 w-full flex justify-between items-center py-3 px-3 fixed bottom-14 md:bottom-20 md:max-w-[37%] md:left-1/2">
          <p className="text-[#A8A8A8] text-sm">Replying to {commentUsername}</p>
          <button onClick={handleCloseChooseComment}>
            <AiOutlineClose color="#A8A8A8" />
          </button>
        </div>
      )}
      <Controll post={post} token={token} />
      <CommentBar post={post} text={text} setText={setText} handleSubmit={handleSubmit} />
    </section>
  );
};
