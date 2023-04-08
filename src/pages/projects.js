import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import ramadan from "../../public/projects/ramadan.png"
import aiImage from "../../public/projects/AIimageGallery.png"
import jokeGenerate from "../../public/projects/jokegenerator.png"
import EnglishDictionary from "../../public/projects/EnglishDictionary.png"
import QRCodeGenerator from "../../public/projects/QRCodeGenerator.png"
import QuoteGenerator from "../../public/projects/QuoteGenerator.png"
import { motion } from 'framer-motion'
import Transition from '@/components/Transition'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full relative flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5]" />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg  lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto' 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2 dark:underline-light'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-xs'>{summary}</p>
        <div className=' mt-2 flex items-center'>
          <Link href={github} target='_blank' className="w-10 dark:fill-light">
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank' className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base">Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, github }) => {
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4'>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto' 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:textb-ase'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
        </Link>
        <div className=' w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className=" text-dark dark:text-light text-lg font-semibold underline md:text-base">Visit</Link>
          <Link href={github} target='_blank' className="w-8 md:w-6 dark:fill-light">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>NafisBD | Projects</title>
        <meta name="description" content="NafisBd.com is a protfolio website which created by Nafis Mahmud Ayon" />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!"  className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className=' col-span-12'>
              <FeaturedProject 
                title="Ramadan Calendar 2023"
                img={ramadan}
                summary="A mobile or web-based tool called a Ramadan calendar offers users a thorough overview of the Islamic holy month of Ramadan. It typically has a calendar showing the precise dates of the month and the times for Iftar and Sheri on each day."
                link='https://ramadan-2023-nafisbd.netlify.app/'
                type="Featured Project"
                github='https://github.com/NafisMahmudAyon/ramadan-schedule'
              />
            </div>
            <div className=' col-span-6 sm:col-span-12'>
              <Project 
                title="Joke Generator App"
                img={jokeGenerate}
                link='https://joke-generator-nafisbd.netlify.app/'
                type="Website"
                github='https://github.com/NafisMahmudAyon/Joke-Generator'
              />
            </div>
            <div className=' col-span-6 sm:col-span-12'>
              <Project 
                title="English Dictionary"
                img={EnglishDictionary}
                link='https://english-dictionary-nafisbd.netlify.app/'
                type="Website"
                github='https://github.com/NafisMahmudAyon/English-Dictionary'
              />
            </div>
            <div className=' col-span-12'>
              <FeaturedProject 
                title="AI Image Gallery"
                img={aiImage}
                summary="An AI image gallery application is a software program that utilizes artificial intelligence algorithms to manage and display collections of digital images."
                link='https://ai-image-gallery-nafisbd.netlify.app'
                type="Featured Project"
                github='https://github.com/NafisMahmudAyon/image-gallery'
              />
            </div>
            <div className=' col-span-6 sm:col-span-12'>
              <Project 
                title="QR Code Generator"
                img={QRCodeGenerator}
                link='https://qr-code-generator-nafisbd.netlify.app/'
                type="Website"
                github='https://github.com/NafisMahmudAyon/QR-Code-Generator-HTML-CSS-JS'
              />
            </div>
            <div className=' col-span-6 sm:col-span-12'>
              <Project 
                title="Quote Generator"
                img={QuoteGenerator}
                link='https://quote-generator-nafisbd.netlify.app/'
                type="Website"
                github='https://github.com/NafisMahmudAyon/Quote-Generator'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects