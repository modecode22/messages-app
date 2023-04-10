import Test from "@/components/Test";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth";

const page = async() => {
    
 
      return (
        <main className="min-w-full min-h-screen p-5">
          <main className="p-5 w-full h-full bg-slate-50 border border-emerald-50 shadow-sm shadow-emerald-100 rounded-xl ">
            <pre>{JSON.stringify({ aaa: "ffff" })}</pre>
            {/* @ts-expect-error Server Component */}
            <Test />
          </main>
        </main>
      );
}

export default page