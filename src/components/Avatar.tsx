import Image from "next/image";
import { FC } from "react";
import profilePic from "./images/profile2.jpeg";
interface AvatarProps {}

const Avatar: FC<AvatarProps> = ({}) => {
  return (
    <div className=" flex flex-col mt-10 gap-4">
      <Image
        width={250}
        src={profilePic}
        alt="profilepic"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
