import Image from 'next/image'
import { FC } from 'react'
import profilePic from './images/profile.jpg'
interface AvatarProps {
  
}

const Avatar: FC<AvatarProps> = ({}) => {
  return <div className=' flex flex-col mt-10 gap-4'>
    <Image src={profilePic} alt='profilepic' className='rounded-full'/> 
    

</div>
}

export default Avatar