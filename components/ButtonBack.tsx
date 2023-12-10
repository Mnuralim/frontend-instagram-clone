'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const ButtonBack = () => {
  const router = useRouter()
  return (
    <button name="button-back" type="button" onClick={() => router.back()}>
      <BiArrowBack size="23" />
    </button>
  )
}

export default ButtonBack
