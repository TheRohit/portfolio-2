import { FC } from 'react'

interface SectionDividerProps {
  color:string
}




const SectionDivider: FC<SectionDividerProps> = ({color}) => {
  return <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-auto h-[80px] w-full overflow-hidden">
  <svg
    aria-hidden="true"
    focusable="false"
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 110"
    x="0"
    y="0"
  >
    <polygon className={`fill-current ${color}`} transform="translate(0 10)" points="2560 0 2560 110 0 110 0 100"></polygon>
  </svg>
</div>
}

export default SectionDivider