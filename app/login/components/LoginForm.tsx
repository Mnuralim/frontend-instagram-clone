'use client'
import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const validationResult = loginSchema.safeParse({ email, password })
    if (!validationResult.success) {
      const newErrors: { email?: string; password?: string } = {}
      validationResult.error.errors.forEach((err) => {
        if (err.path.includes('email')) {
          newErrors.email = err.message
        }
        if (err.path.includes('password')) {
          newErrors.password = err.message
        }
      })
      setErrors(newErrors)
      setIsLoading(false)
      return
    } else {
      setErrors({})
    }

    try {
      const data = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (!data?.ok && data?.error) {
        throw new Error(data.error)
      }
      toast.success('Login successfully', {
        position: toast.POSITION.TOP_RIGHT,
      })
      router.push('/')
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      } else {
        toast.error('Something went wrong', {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#262626] py-3 px-3 outline-none rounded-md invalid:focus:ring-[#EF144A] invalid:border-[#EF144A] peer"
        />
        {errors.email && <p className="m-1 text-[#EF144A] leading-none text-xs">{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-[#262626] py-3 px-3 outline-none rounded-md invalid:focus:ring-[#EF144A] invalid:border-[#EF144A] peer"
          minLength={6}
        />
        {errors.password && <p className="m-1 text-[#EF144A] leading-none text-xs">{errors.password}</p>}
      </div>
      <button
        name="button-submit"
        disabled={isLoading ? true : false}
        type="submit"
        className={`flex items-center justify-center text-white h-12 rounded-md font-semibold ${
          isLoading ? 'cursor-not-allowed bg-blue-950' : 'cursor-pointer bg-blue-500 hover:bg-blue-700'
        }`}
      >
        {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Log in'}
      </button>
    </form>
  )
}

export default LoginForm
