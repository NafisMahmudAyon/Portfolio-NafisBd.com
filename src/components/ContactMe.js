import React from 'react'
import {motion} from 'framer-motion'
import  { GmailIcon, GithubIcon, LinkedInIcon, FacebookIcon, TelegramIcon, WhatsAppIcon } from '../components/Icons'

const ContactMe = () => {
  return (
    <div className='mt-64 mb-[13rem]'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Contact Me
        </h2>
        <div className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://www.facebook.com/nafismahmud0/" target={"_blank"} whileHover={{ y:-6, scale:1.10 }} whileTap={{ scale:0.9 }} className='w-10 fill-[#3b5998] mr-3' title="Contact me on Facebook"><FacebookIcon /></motion.a>
            <motion.a href="https://github.com/NafisMahmudAyon" target={"_blank"} whileHover={{ y:-6, scale:1.10 }} whileTap={{ scale:0.9 }} className='w-10 fill-[#171515] mx-3' title="Follw me on Github"><GithubIcon /></motion.a>
            <motion.a href="https://www.linkedin.com/in/nafis-mahmud-ayon-760b45190/" target={"_blank"} whileHover={{ y:-6, scale:1.10 }} whileTap={{ scale:0.9 }} className='w-10 fill-[#0A66C2] mx-3' title="Contact me on Linkedin"><LinkedInIcon /></motion.a>
            <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-6, scale:1.10 }} whileTap={{ scale:0.9 }} className='w-10 fill-[#075E54] mx-3' title="Contact me on WhatsApp"><WhatsAppIcon /></motion.a>
            <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-6, scale:1.10 }} whileTap={{ scale:0.9 }} className='w-10 fill-[#0088cc] mx-3' title="Contact me on Telegram"><TelegramIcon /></motion.a>
            <motion.a href="mailto:nafismahmudayon@gmail.com" target={"_blank"} whileHover={{ y:-6, scale:1.10 }} whileTap={{ scale:0.9 }} className='w-10 fill-[#F4B400] ml-3' title="Email me"><GmailIcon /></motion.a>
        </div>
    </div>
  )
}

export default ContactMe