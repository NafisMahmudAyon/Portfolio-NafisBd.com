import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  { GmailIcon, GithubIcon, LinkedInIcon, FacebookIcon, TelegramIcon, WhatsAppIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({ href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[2px] inline-block group-hover:w-full transition-[width] ease duration-300 bg-dark absolute left-0 -bottom-0.5 
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light
            `}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }



  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative dark:text-light'>
        <button className="flex flex-col items-center justify-center hidden lg:flex"  onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `}></span>
        </button>
        <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href='/' title="Home" className=' uppercase font-bold mr-4' />
                <CustomLink href='/about' title="About" className=' uppercase font-bold mx-4' />
                <CustomLink href='/projects' title="Projects" className=' uppercase font-bold mx-4' />
                <CustomLink href='/articles' title="Articles" className=' uppercase font-bold ml-4' />
            </nav>
            
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://www.facebook.com/nafismahmud0/" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mr-3 dark:fill-light'><FacebookIcon /></motion.a>
                <motion.a href="https://github.com/NafisMahmudAyon" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mx-3 dark:fill-light'><GithubIcon /></motion.a>
                <motion.a href="https://www.linkedin.com/in/nafis-mahmud-ayon-760b45190/" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mx-3 dark:fill-light'><LinkedInIcon /></motion.a>
                <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mx-3 dark:fill-light'><WhatsAppIcon /></motion.a>
                <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mx-3 dark:fill-light'><TelegramIcon /></motion.a>
                <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 ml-3 dark:fill-light'><GmailIcon /></motion.a>
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {
                        mode === "dark" ?
                        <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-dark"} />
                    }
                </button>
            </nav>
        </div>

        {/* mobile menu */}
        <div className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
            <nav className='flex items-center flex-col justify-center'>
                <CustomLink href='/' title="Home" className=' uppercase font-bold mr-4 text-light dark:text-dark' />
                <CustomLink href='/about' title="About" className=' uppercase font-bold mx-4 text-light dark:text-dark' />
                <CustomLink href='/projects' title="Projects" className=' uppercase font-bold mx-4 text-light dark:text-dark' />
                <CustomLink href='/articles' title="Articles" className=' uppercase font-bold ml-4 text-light dark:text-dark' />
            </nav>
            
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://www.facebook.com/nafismahmud0/" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mr-3 fill-light dark:fill-dark'><FacebookIcon /></motion.a>
                <motion.a href="https://github.com/NafisMahmudAyon" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mx-3 fill-light dark:fill-dark'><GithubIcon /></motion.a>
                <motion.a href="https://www.linkedin.com/in/nafis-mahmud-ayon-760b45190/" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mx-3 fill-light dark:fill-dark'><LinkedInIcon /></motion.a>
                <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mx-3 fill-light dark:fill-dark'><WhatsAppIcon /></motion.a>
                <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 mx-3 fill-light dark:fill-dark'><TelegramIcon /></motion.a>
                <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-2 }} whileTap={{ scale:0.9 }} className='w-6 ml-3 fill-light dark:fill-dark'><GmailIcon /></motion.a>
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {
                        mode === "dark" ?
                        <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-dark"} />
                    }
                </button>
            </nav>
        </div>


        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default Navbar