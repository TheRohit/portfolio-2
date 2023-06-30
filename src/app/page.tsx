import Avatar from '@/components/Avatar'
import Name from '@/components/ui/Name'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center mt-5 gap-5 '>
      <Avatar/>
      <Name/>
    </div>
  )
}
