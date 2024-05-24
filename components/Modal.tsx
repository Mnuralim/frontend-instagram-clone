'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import MainLikeLists from './like-lists/MainLikeList'
import DetailPost from './detail-post/DetailPost'
import MainCreatePost from './create-post/MainCreatePost'

const Modal = () => {
  const searchParams = useSearchParams()

  const detailPost = searchParams?.get('p') || ''
  const likedBy = searchParams?.get('like') || ''
  const createPost = searchParams?.get('create') || ''

  return (
    <>
      {detailPost && <DetailPost postId={detailPost as string} />}
      {likedBy && <MainLikeLists />}
      {createPost && <MainCreatePost />}
    </>
  )
}

export default Modal
