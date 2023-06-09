import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/developer.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import ExpertIcon from '@/components/ExpertIcon'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import Transition from '@/components/Transition'



export default function Home() {
  return (
    <>
      <Head>
        <title>NafisBD | Frontend Developer & UI/UX Designer | Nafis Mahmud Ayon</title>
        <meta name="description" content="NafisBD.com is a Portfolio site of a web developer named 'Nafis Mahmud Ayon'. " />
      </Head>
      <Transition />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'> 
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Nafis Mahmud Ayon" className='w-full h-auto lg:hidden md:inline-block md:w-full' 
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <h1 className=''>
                <AnimatedText text="Turning Vision Into Reality With Code And Design."  className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/></h1>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='my-4 w-full  flex items-center justify-center'>
                <ExpertIcon />
              </div>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="/Nafis-Mahmud-Ayon-01733235762.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light py-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base " download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} /></Link>
                <Link href="mailto:nafismahmudayon@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Contact</Link>
              </div>
              
            </div>
            
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='NafisBD' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
