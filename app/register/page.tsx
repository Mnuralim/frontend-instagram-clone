"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RegisterForm from "./components/RegisterForm";
import { register } from "@/utils/fetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonLoginGoogle from "../login/components/ButtonLoginGoogle";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(email, password, username);
      const data = await response?.json();
      if (response?.ok) {
        setIsLoading(false);
        toast.success("Register successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setInterval(() => {
          router.push("/login");
        }, 2000);
      } else {
        setIsLoading(false);
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      throw new Error("Error");
    }
  };

  return (
    <section className="flex justify-between flex-col items-center h-screen w-full mx-auto md:max-w-[33%]">
      <div className="pt-3"></div>
      <div className="flex flex-col w-5/6 gap-3">
        <center>
          <Image src={"/image/iglogo.png"} alt="logo" width={10300} height={1000} className="white-logo pt-1 object-fill w-[193px] h-[59px]" />
        </center>
        <RegisterForm handleChangeValue={{ setEmail, setPassword, setUsername }} handleSubmit={handleSubmit} inputValue={{ email, password, username }} isLoading={isLoading} />
        <p className="text-sm text-center text-[#A8A8A8]">
          Have problems?{" "}
          <Link href={"#"} className="text-slate-300 font-semibold">
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
          Do you have an account?{" "}
          <Link href={"/login"} className="text-slate-300 font-semibold">
            Login.
          </Link>
        </p>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;
