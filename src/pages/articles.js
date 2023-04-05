import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import Article from '../../public/images/articles/pagination component in reactjs.jpg'
import Article1 from '../../public/images/articles/smooth scrolling in reactjs.png'
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedArticle =({img, title, time, summary, link}) => {
  return (
    <li className=' col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto' 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
      </Link>
      <p className=' text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>NafisBD | Article Page</title>
            <meta name="description" content="NafisBd.com is a protfolio website which created by Nafis Mahmud Ayon" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
          <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16 ' />
            <ul className='grid grid-cols-2 gap-16'>
              <FeaturedArticle
                img={Article}
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                time="9 min read"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                link="/"
              />
              <FeaturedArticle
                img={Article}
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                time="9 min read"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                link="/"
              />
              <FeaturedArticle
                img={Article1}
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                time="9 min read"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                link="/"
              />
            </ul>
          </Layout>
        </main>
    </>
  )
}

export default articles