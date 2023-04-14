import React from 'react'
import { ScrollArea } from './ui/scrollarea'
import Link from 'next/link';

const SideBar = () => {
  return (
    <>
      <ScrollArea className="w-full h-full">
        <Link
          className="py-5 text-2xl font-bold w-full text-center"
          href={"/dashboard"}
        >
          dashboard
        </Link>
      </ScrollArea>
    </>
  );
}

export default SideBar