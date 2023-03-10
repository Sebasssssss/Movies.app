import PopularMovies from './components/Carousels/Movies/PopularMovies'
import SortedCarousel from './components/Carousels/Movies/SortedMovies'
import TrendingCarousel from './components/Carousels/Movies/TrendingMovies'
import UpcomingCarousel from './components/Carousels/Movies/UpcomingMovies'
import ShowCarousel from './components/Carousels/TvShows/TvShowsCar'
import MainVideo from './components/MainVideo'
import { IoArrowDown } from 'react-icons/io5'

export default function Home() {
  return (
    <>
      <main className="grid items-center w-full relative">
        <MainVideo />
        <div className="w-full  bg-gradient-to-t from-[#0c0c0c] to-transparent z-10">
          <div className="w-full py-[128px]  h-[100vh] grid items-center justify-center">
            <div className="text-justify grid gap-[32px] w-full lg:w-[719px]">
              <div className="grid gap-[16px] text-center font-outfit">
                <h1 className="text-[96px]">Cinema web app</h1>
                <p className="text-[16px] opacity-70">
                  This web app is made with the TMDB API. Feel free to look for
                  wherever movie you’re interested in. You’ll be able to search
                  for tv shows too! Stay tuned for the new features that we will
                  be adding soon!
                </p>
              </div>
              <div className="inline-flex justify-center items-center gap-4">
                <a
                  href="#upcoming"
                  className="py-[15px] px-[30px] font-outfit bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
                >
                  Let&apos;s take a look{' '}
                  <IoArrowDown className="w-[24px] h-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ShowCarousel />
      <SortedCarousel />
      <UpcomingCarousel />
      <PopularMovies />
      <TrendingCarousel />
    </>
  )
}
