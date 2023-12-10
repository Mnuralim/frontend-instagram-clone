'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import LoginForm from './components/LoginForm'
import ButtonLoginGoogle from './components/ButtonLoginGoogle'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    try {
      const data = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (data?.ok) {
        setIsLoading(false)
        toast.success('Login successfully', {
          position: toast.POSITION.TOP_RIGHT,
        })
        router.push('/')
      } else {
        setIsLoading(false)
        toast.error(data?.error, {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error) {
      throw new Error('error')
    }
  }

  return (
    <section className="flex fixed top-0 left-1/2 transform -translate-x-1/2 justify-between flex-col items-center w-full h-screen md:max-w-[33%]">
      <div className="pt-3"></div>
      <div className="flex flex-col w-5/6 gap-3">
        <center>
          <Image
            src={'/image/iglogo.png'}
            alt="logo"
            width={10300}
            height={1000}
            className="white-logo pt-1 object-fill w-[193px] h-[59px]"
          />
        </center>
        <LoginForm
          handleSubmit={handleSubmit}
          handleChangeValue={{ setEmail, setPassword }}
          isLoading={isLoading}
          inputValue={{ email, password }}
        />
        <p className="text-sm text-center text-[#A8A8A8]">
          Forgot your login details?{' '}
          <Link aria-label="link" href={'#'} className="text-slate-300 font-semibold">
            Get help logging in.
          </Link>
        </p>
        <div className="flex items-center gap-1">
          <div className="w-full h-[1px] bg-[#262626] bg-opacity-50"></div>
          <h3 className="text-[#A8A8A8] font-semibold">OR</h3>
          <div className="w-full h-[1px] bg-[#262626] bg-opacity-50"></div>
        </div>
        <ButtonLoginGoogle />
      </div>
      <div className="pb-3">
        <p className="text-sm text-center text-[#A8A8A8]">
          Don&apos;t have an account?{' '}
          <Link aria-label="link" href={'/register'} className="text-slate-300 font-semibold">
            Sign up.
          </Link>
        </p>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Login
