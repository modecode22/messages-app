import AddFriendButton from "@/components/AddFriendButton"

const page = () => {
  return (
    <main className="flex justify-center items-center min-h-screen w-full">
      <main className="flex flex-col items-center  p-5 gap-5 w-full max-w-xs h-96 bg-slate-50 border border-emerald-50 shadow-sm shadow-emerald-100 rounded-xl">
        <h1 className="text-cyan-950 font-bold text-4xl ">Add A friend</h1>
        <AddFriendButton />
      </main>
    </main>
  );
}

export default page