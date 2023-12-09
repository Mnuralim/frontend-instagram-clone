import AllPost from './components/AllPost';
import HomeHeader from './components/HomeHeader';
import StorySlider from './components/StorySlider';
import SuggestionFollow from './components/SuggestionFollow';

export default function Home() {
  return (
    <section className="md:max-w-[84%] md:flex md:mx-auto">
      <div className="md:w-[65%]">
        <HomeHeader />
        <StorySlider />
        <AllPost />
      </div>
      <div className="md:w-[35%] hidden md:block">
        <SuggestionFollow />
      </div>
    </section>
  );
}
