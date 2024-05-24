import AllPost from './components/AllPost'
import HomeHeader from './components/HomeHeader'
import StorySlider from './components/StorySlider'
import SuggestionFollow from './components/SuggestionFollow'

export default function Home() {
  return (
    <section className="lg:max-w-[84%] lg:flex lg:mx-auto">
      <div className="lg:w-[65%]">
        <HomeHeader />
        <StorySlider />
        <AllPost />
      </div>
      <div className="lg:w-[35%] hidden lg:block">
        <SuggestionFollow />
      </div>
    </section>
  )
}
