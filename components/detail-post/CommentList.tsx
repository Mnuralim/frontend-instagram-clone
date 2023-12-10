import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { Collapse } from 'react-collapse'
import DateConv from '../DateConv'
import Avatar from '../Avatar'

interface Props {
  comment: IComment
  open: boolean
  togle: () => void
  chooseComment: (commentId: string, username: string) => void
}

const CommentList = ({ comment, open, togle, chooseComment }: Props) => {
  const replies = comment.replies as IReplies[]
  return (
    <div id="top-list" className="flex gap-2 justify-between px-3">
      <div className="flex gap-3 w-full">
        <div className="min-w-[37px]">
          <Avatar
            src={comment.user.profile.imageProfile}
            userId={comment.user._id}
            story={true}
            className="w-9 h-9 mt-1"
          />
        </div>
        <div className="flex flex-col gap-[1px] w-full">
          <p className="text-xs font-semibold flex">
            <p className="hover:text-[#A8A8A8]">{comment?.user.username}</p>
            <span className="text-[#a8a8a8] pl-2 text-xs">
              <DateConv createdAt={comment?.createdAt} />
            </span>
          </p>
          <p className="text-sm">{comment?.text}</p>
          <div className="flex text-xs gap-4 text-[#a8a8a8]">
            <button name="choose-comment" onClick={() => chooseComment(comment._id, comment.user.username)}>
              Reply
            </button>
            <button name="button-translate">See translation</button>
          </div>
          <Collapse isOpened={open}>
            <div className="flex flex-col w-full gap-3 mt-3">
              {replies?.map((c) => (
                <div key={c._id} className="flex gap-2 justify-between items-center relative">
                  <div className="flex gap-3 w-full">
                    <Avatar src={c.user.profile.imageProfile} userId={c.user._id} story={false} className="w-9 h-9" />
                    <div className="flex flex-col gap-[1px] w-[80%]">
                      <p className="text-xs font-semibold flex">
                        <p className="hover:text-[#A8A8A8]">{c.user.username}</p>
                        <span className="text-[#a8a8a8] pl-2 text-xs">
                          <DateConv createdAt={comment?.createdAt} />
                        </span>
                      </p>
                      <p className="text-sm">{c.text}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-[#a8a8a8] absolute -right-[30px]">
                    <AiOutlineHeart />
                    <p className="text-xs">453</p>
                  </div>
                </div>
              ))}
            </div>
          </Collapse>
          {replies.length !== 0 && (
            <button name="button-togle" onClick={togle} className="flex items-center gap-2 mt-1">
              <div className="bg-[#a8a8a8] w-8 bg-opacity-20 h-[0.5px]"></div>
              <p className="text-xs text-[#a8a8a8]">
                {!open ? `View ${replies.length} ${replies.length <= 1 ? 'reply' : 'replies'}` : 'Hide replies'}
              </p>
            </button>
          )}
        </div>
      </div>
      <div className="flex mt-3">
        <div className="flex flex-col items-center gap-1 text-[#a8a8a8]">
          <AiOutlineHeart />
          <p className="text-xs">453</p>
        </div>
      </div>
    </div>
  )
}

export default CommentList
