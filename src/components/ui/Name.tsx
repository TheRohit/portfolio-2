"use client"
import { FC } from 'react'

interface NameProps {
  
}

const Name: FC<NameProps> = ({}) => {
  return <div>
    <h1 className="mb-2 overflow-hidden font-mono text-4xl dark:text-gray-100 md:text-6xl font-bold mt-9">
  hi, I&apos;m <br className="block md:hidden" />
  <span className="relative">
    <span className="overflow-x-hidden whitespace-nowrap pt-2 text-brand-accent ">
      Rohit <span className="text-3xl md:text-5xl">👋</span>
    </span>
    <span
      className="absolute -bottom-0 -top-1 left-0 inline-block w-full animate-type bg-white will-change-transform [font-family:monospace] after:absolute after:block after:h-full after:w-2 after:animate-cursor after:bg-black after:content-[''] dark:bg-black after:dark:bg-gray-100"
    ></span>
  </span>
</h1>

  </div>
}

export default Name