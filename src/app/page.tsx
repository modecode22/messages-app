import Button from "@/components/ui/Button";
import { db } from "@/lib/db";


export default async function Home() {
  await db.set("hello" , "hello")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>hhhhhhh</Button>
      <Button  variant={"primary"}>hhhhhhh</Button>
      <Button variant={"green"}>hhhhhhh</Button>
      <Button variant={"red"}>hhhhhhh</Button>
    </main>
  );
}
