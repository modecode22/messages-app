"use client"
import { AddFriendValidator } from '@/lib/validations/add-friend';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { z } from 'zod';

import Button from './ui/Button';
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'

interface AddFriendButtonProps{

}

const AddFriendButton = ({}:AddFriendButtonProps) => {
  
type FormData = z.infer<typeof AddFriendValidator>

  const [showSuccessState, setShowSuccessState] = useState<boolean>(false)
 const{
  register,
  handleSubmit,
  setError,
  formState:{errors}
 } = useForm<FormData>({
  resolver:zodResolver(AddFriendValidator)
 })
 
 
 
  const addFriend = async (email:string)=>{
    try {
        const validatedEmail = AddFriendValidator.parse({email})
   await axios.post("/api/friends/add",{
    email: validatedEmail
   })
   setShowSuccessState(true)
    } catch (error) {
        if(error instanceof z.ZodError){
          setError("email", {message:error.message})
            return
        }
        if(error instanceof AxiosError){
            setError("email", {message:error.response?.data})
            return
    }
    setError("email",{message:"Something went wrong !"})
  }}

  const onSubmit =(data:FormData)=>{
    addFriend(data.email)
  }
  
  
    return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm flex  px-10   flex-col">
      <label htmlFor="email" className="select-none px-2 text-sm font-thin flex  items-center">
        Add Friend by E-Mail
      </label>
      <section className="mt-1 flex  items-center gap-2">
        <input
        {...register("email")}
        id="email"
          className=" h-10 rounded-xl border border-emerald-400/50 bg-white/90  focus:ring-emerald-400 focus:border-emerald-400 "
          type="text"
          placeholder="you@example.com"
          // required
        />
        <Button className="h-9" size={"large"} variant={"primary"}>
          Add
        </Button>
      </section>
      <p className='select-none px-2 text-red-500 text-xs'>
        {errors.email?.message}
      </p>
      {
        showSuccessState ? ( <p className='select-none px-2 text-green-500 text-xs'>
        Friend request sent ! 
      </p>):null
      }
    </form>
  );
}
export default AddFriendButton