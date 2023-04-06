import React from 'react'
import html from '../../public/icon/html.png'
import css from '../../public/icon/css.png'
import js from '../../public/icon/js.png'
import react from '../../public/icon/react.png'
import wordpress from '../../public/icon/wordpress.png'
import php from '../../public/icon/php.png'
import mysql from '../../public/icon/mysql.png'
import sass from '../../public/icon/sass.png'
import illustrator from '../../public/icon/illustrator.png'
import photoshop from '../../public/icon/photoshop.png'
import figma from '../../public/icon/figma.png'
import tailwind from '../../public/icon/tailwind.png'
import bootstrap from '../../public/icon/bootstrap.png'
import Image from 'next/image'

const title = (props) => {
    return (
      <>
      <h3 className='text-md text-light bg-dark'>{props}</h3>
      </>
    )
  }
  
const ExpertIcon = () => {

  


  return (
    <div className='flex items-center justify-center flex-wrap'>
            
            <Image src={html} alt="HTML" title={title.props='HTML'} className='dot w-[28px] mt-2 mr-[8px] h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={css} alt="CSS" title={title.props='CSS'} className='dot w-[28px] mt-2 mx-[8px]  h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={js} alt="JavaScript" title={title.props='JavaScript'} className='dot w-[28px] mt-2 mx-[8px]  h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={react} alt="ReactJS" title={title.props='ReactJS'} className='dot w-[28px] mt-2 mx-[8px]  h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={wordpress} alt="WordPress" title={title.props='WordPress'} className='dot w-[28px] mt-2 mx-[8px] h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={sass} alt="Sass" title={title.props='Sass'} className='dot w-[28px] mt-2 mx-[8px] h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={tailwind} alt="Tailwind" title={title.props='Tailwind'} className='dot w-[28px] mt-2 mx-[8px] h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={bootstrap} alt="Bootstrap" title={title.props='Bootstrap'} className='dot w-[28px] mt-2 mx-[8px] h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={php} alt="PHP" title={title.props='PHP'} className='dot w-[28px] mt-2 mx-[8px] h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={mysql} alt="MySQL" title={title.props='MySQL'} className='dot w-[28px] mt-2 mx-[8px] h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={illustrator} alt="Illustrator" title={title.props='Illustrator'} className='dot w-[28px] mt-2 mx-[8px]  h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={photoshop} alt="Photoshop" title={title.props='Photoshop'} className='dot w-[28px] mt-2 mx-[8px]  h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
            <Image src={figma} alt="Figma" title={title.props='Figma'} className='dot w-[28px] mt-2 ml-[8px]  h-auto transition ease-in-out  hover:-translate-y-2 hover:scale-150' />
        
    </div>
  )
}

export default ExpertIcon