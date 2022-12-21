import Head from 'next/head'
import Seo from '../components/global/Seo'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <>
      <Seo title={"MedStreet | India's No.1 Health Interface"} robots={"index, follow"} />
      <Hero />
    </>
  )
}
