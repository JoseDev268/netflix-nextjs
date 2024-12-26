import { authOptions } from '@/app/utils/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function SignUp() {
  const session = await getServerSession(authOptions);

  if(session){
    redirect('/home')
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="" className="">
        <h1 className='text-3xl font-semibold text-white'>Sign Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type='email'
            name='email'
            placeholder='Input your email'
            className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
          />
          <Button
            type='submit'
            variant={"destructive"}
            className='w-full bg-[#e50914]'
          >Sign Up</Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        Already Have a account? {""}
        <Link
          className='text-white hover:underline'
          href={'/login'}>
          Log in now!
        </Link>
      </div>

      <div className="flex w-full items-justify-center gap-x-3 mt-6">
        <Button
          variant={'outline'}
          size={'icon'}
        >
          <Image
            src={'github.svg'}
            alt='gitHubIcon'
            width={40}
            height={40}
          />
        </Button>
        <Button
          variant={'outline'}
          size={'icon'}
        >
          <Image
            src={'/google.svg'}
            alt='googleIcon'
            width={60}
            height={60}
          />
        </Button>
      </div>
    </div>
  )
}
