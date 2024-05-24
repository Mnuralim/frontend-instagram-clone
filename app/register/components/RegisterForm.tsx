'use client'
import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { register } from '@/utils/fetch'
import { toast } from 'react-toastify'

const registerSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string }>({})

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const validationResult = registerSchema.safeParse({ username, email, password })

    if (!validationResult.success) {
      const newErrors: { username?: string; email?: string; password?: string } = {}
      validationResult.error.errors.forEach((err) => {
        if (err.path.includes('username')) {
          newErrors.username = err.message
        }
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
    }

    setErrors({})

    try {
      const response = await register(email, password, username)
      const data = await response?.json()
      if (!response?.ok) {
        throw new Error(data?.message)
      }

      toast.success('Register successfully', {
        position: toast.POSITION.TOP_RIGHT,
      })
      router.push('/login')
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
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className={`w-full bg-[#262626] py-3 px-3 outline-none rounded-md ${
            errors.username ? 'border-[#EF144A]' : ''
          }`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="m-1 text-[#EF144A] leading-none text-xs">{errors.username}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={`w-full bg-[#262626] py-3 px-3 outline-none rounded-md ${errors.email ? 'border-[#EF144A]' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="m-1 text-[#EF144A] leading-none text-xs">{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={`w-full bg-[#262626] py-3 px-3 outline-none rounded-md ${
            errors.password ? 'border-[#EF144A]' : ''
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Register'}
      </button>
    </form>
  )
}

export default RegisterForm
