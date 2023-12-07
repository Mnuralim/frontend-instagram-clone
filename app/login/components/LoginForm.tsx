import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  inputValue: {
    email: string;
    password: string;
  };
  isLoading: boolean;
  handleChangeValue: {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
  };
}

const LoginForm = ({ handleSubmit, handleChangeValue, inputValue, isLoading }: Props) => {
  const isDisabled = inputValue.email.length === 0 || inputValue.password.length === 0 || inputValue.password.length < 6;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 mt-5">
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={inputValue.email}
          onChange={(e) => handleChangeValue.setEmail(e.target.value)}
          className="w-full bg-[#262626] py-3 px-3 outline-none rounded-md invalid:focus:ring-[#EF144A] invalid:border-[#EF144A] peer"
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
          value={inputValue.password}
          onChange={(e) => handleChangeValue.setPassword(e.target.value)}
          className="w-full bg-[#262626] py-3 px-3 outline-none rounded-md invalid:focus:ring-[#EF144A] invalid:border-[#EF144A] peer"
          minLength={6}
        />
        <p className="m-1 text-[#EF144A] leading-none invisible peer-invalid:visible text-xs">Password must grather than 6 characthers</p>
      </div>
      <button
        disabled={isLoading || isDisabled ? true : false}
        type="submit"
        className={`flex items-center justify-center text-white h-12 rounded-md font-semibold ${isLoading || isDisabled ? "cursor-not-allowed bg-blue-950" : "cursor-pointer bg-blue-500 hover:bg-blue-700"}`}
      >
        {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Log in"}
      </button>
    </form>
  );
};

export default LoginForm;
