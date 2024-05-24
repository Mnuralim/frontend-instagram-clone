import React from 'react'
import Header from './components/Header'
import Post from './components/Post'

interface Params {
  params: {
    id: string
  }
}

const Page = ({ params }: Params) => {
  return (
    <section className="w-full md:max-w-[90%] lg:max-w-[67%] mx-auto">
      <Header />
      <Post params={params} />
    </section>
  )
}

export default Page
