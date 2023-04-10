"use client"

import Button from "@/components/ui/Button";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import {toast} from 'react-hot-toast'
const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
 
 const loginWithGoogle =async()=>{
  setIsLoading(true);
  try {
    await signIn("google")
  } catch (error) {
    // display error message to user  (react-hot-toast)
    toast.error("failed to login ! ")
  } finally{
    setIsLoading(false);
  }
 }
 
 
 
  return (
    <>
      <main className="w-full min-h-screen flex justify-center items-center">
        <main className="bg-cyan-50 h-96 w-72 p-5 rounded-xl border border-cyan-100 shadow-md shadow-emerald-300 flex flex-col gap-5 items-center">
          <h1 className="text-3xl text-center font-bold text-cyan-950">
            Sign in to your account
          </h1>
          <Button
            onClick={loginWithGoogle}
            isLoading={isLoading}
            className="gap-2 text-lg font-bold  h-10 max-w-sm mx-auto "
          >
            {isLoading ? null : <FcGoogle className="w-7 h-7" />}
            Google
          </Button>
        </main>
      </main>
    </>
  );
};

export default Page
