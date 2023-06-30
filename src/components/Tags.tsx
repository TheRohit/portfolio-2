import { FC } from 'react'

interface TagsProps {
  size?:string
  tags?:string[] | undefined
  className?:string
}

const Tags: FC<TagsProps> = ({size,tags,className}) => {
  return <div className={`pb-2 flex flex-row flex-wrap gap-2`}>
  {
    //@ts-ignore
    tags.map((s: string) => (
      <span
        className={`whitespace-nowrap px-4 py-2 font-semibold ${className} ${
          size === 'lg' ? 'rounded-2xl text-xs' : 'rounded text-sm'
        }`}
      >
        {s}
      </span>
    ))
  }
</div>
}

export default Tags