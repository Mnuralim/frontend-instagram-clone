'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const ButtonLoginGoogle = () => {
  return (
    <button
      name="login-google"
      onClick={() => signIn('google', { callbackUrl: '/' })}
      className="bg-blue-600 flex justify-center items-center gap-1 py-3 rounded-md hover:bg-blue-700"
    >
      <FcGoogle className="text-2xl" />
      <p className="font-bold">Continue with Google</p>
    </button>
  )
}

export default ButtonLoginGoogle
