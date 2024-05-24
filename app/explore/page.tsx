import React from 'react'
import AllPost from './components/AllPost'
import ExploreHeader from './components/ExploreHeader'

const Page = () => {
  return (
    <section className="w-full mx-auto md:pt-5 pb-20 md:max-w-[90%] lg:max-w-[67%]">
      <ExploreHeader />
      <AllPost />
    </section>
  )
}

export default Page
