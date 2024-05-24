import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from './components/RegisterForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ButtonLoginGoogle from '../login/components/ButtonLoginGoogle'

const Register = () => {
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
        <RegisterForm />
        <p className="text-sm text-center text-[#A8A8A8]">
          Have problems?{' '}
          <Link aria-label="link" href={'#'} className="text-slate-300 font-semibold">
            Support.
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
          Do you have an account?{' '}
          <Link aria-label="link" href={'/login'} className="text-slate-300 font-semibold">
            Login.
          </Link>
        </p>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Register
