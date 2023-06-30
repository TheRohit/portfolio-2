import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import { FC } from 'react'

interface ContactProps {
  
}



const Contact: FC<ContactProps> = ({}) => {
  return <div>
    <h2 id="section-contact">./public/contact</h2>
      <p className='text-brand-tint'>You can find me here.</p>
      <div className="mb-8 flex flex-row flex-wrap gap-x-4 md:gap-x-8">
        <a href='https://github.com/TheRohit' target='_blank' title='Github' ><Github />  </a>
        <a href='https://www.linkedin.com/in/rohit-meshram000/' target='_blank' title='LinkedIn' ><Linkedin />  </a>
        <a href='mailto:rohitmeshram000@gmail.com' target='_blank' title='email' ><Mail />  </a>
        <a href='https://twitter.com/rohitmeshram76' target='_blank' title='Twitter' ><Twitter />  </a>
        <a href='https://www.instagram.com/rohitmhere/' target='_blank' title='Instagram' ><Instagram />  </a>


        </div>
  </div>
}

export default Contact