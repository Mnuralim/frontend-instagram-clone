import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface Props {
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  inputValue: {
    email: string
    password: string
    username: string
  }
  isLoading: boolean
  handleChangeValue: {
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setUsername: React.Dispatch<React.SetStateAction<string>>
  }
}

const RegisterForm = ({ inputValue, isLoading, handleChangeValue, handleSubmit }: Props) => {
  const { email, password, username } = inputValue
  const { setEmail, setPassword, setUsername } = handleChangeValue

  const isDisabled =
    inputValue.email.length === 0 ||
    inputValue.password.length === 0 ||
    inputValue.username.length === 0 ||
    inputValue.password.length < 6

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 mt-5">
      <div className="mb-4">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="w-full bg-[#262626] py-3 px-3 outline-none rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full bg-[#262626] py-3 px-3 outline-none rounded-md invalid:focus:ring-[#EF144A] invalid:border-[#EF144A] peer"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="m-1 text-[#EF144A] leading-none invisible peer-invalid:visible text-xs">Invalid email format</p>
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-full bg-[#262626] py-3 px-3 outline-none rounded-md invalid:focus:ring-[#EF144A] invalid:border-[#EF144A] peer"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="m-1 text-[#EF144A] leading-none invisible peer-invalid:visible text-xs">
          Password must grather than 6 characthers
        </p>
      </div>
      <button
        name="button-submit"
        disabled={isLoading || isDisabled ? true : false}
        type="submit"
        className={`flex items-center justify-center text-white h-12 rounded-md font-semibold ${
          isLoading || isDisabled ? 'cursor-not-allowed bg-blue-950' : 'cursor-pointer bg-blue-500 hover:bg-blue-700'
        }`}
      >
        {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Register'}
      </button>
    </form>
  )
}

export default RegisterForm
