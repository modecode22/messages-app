import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'

const Test = async() => {
        const session = await getServerSession(authOptions);
  return <pre>{JSON.stringify(session)}</pre>;
}

export default Test