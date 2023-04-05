import Link from 'next/link'
import React from 'react'
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
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
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
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default Navbar