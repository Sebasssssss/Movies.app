import UpcomingCarousel from './components/Carousels/UpcomingMovies'
import ShowCarousel from './components/Carousels/TvShowsCar'
import PopularCarousel from './components/Carousels/PopularMovies'
import TrendingCarousel from './components/Carousels/TrendingMovies'
import Link from 'next/link'
import { IoArrowDown, IoChevronForward } from 'react-icons/io5'

export default function Home() {
  return (
    <>
      <main className="h-[100vh] grid items-center w-full bg-[url('../public/homepage1.png')] bg-cover bg-center">
        <div className="w-full bg-[#060606]/50 bg-gradient-to-tr from-black to-transparent">
          <div className="w-full py-[128px]  h-[100vh] grid items-center justify-center">
            <div className="text-justify grid gap-[32px] w-full lg:w-[719px]">
              <div className="grid gap-[16px] text-center">
                <h1 className="text-[96px]" style={{ fontFamily: 'Mirage' }}>
                  Cinema web app
                </h1>
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
                  className="py-[15px] px-[30px] bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
                >
                  Let&apos;s take a look{' '}
                  <IoArrowDown className="w-[24px] h-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="upcoming" className="w-full p-[16px] lg:p-[64px]">
        <div className="bg-[#161616] p-[32px] rounded-[8px]">
          <div className="py-8 w-full flex justify-between items-center">
            <h1
              style={{ fontFamily: 'Mirage' }}
              className="text-[20px] md:text-[32px]"
            >
              Upcoming
            </h1>
            <Link
              href="/pages/upcomingMovies"
              className="py-[8px] px-[16px] md:py-[15px] md:px-[30px] bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
            >
              See more <IoChevronForward className="mt-0.5" />
            </Link>
          </div>
          <UpcomingCarousel />
        </div>
      </div>
      <div id="upcoming" className="w-full p-[16px] lg:p-[64px]">
        <div className="bg-[#161616] p-[32px] rounded-[8px]">
          <div className="py-8 w-full flex justify-between items-center gap-2">
            <h1
              style={{ fontFamily: 'Mirage' }}
              className="text-[20px] md:text-[32px]"
            >
              Tv shows
            </h1>
            <Link
              href="/pages/tvshows"
              className="py-[8px] px-[16px] md:py-[15px] md:px-[30px] bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
            >
              See more <IoChevronForward />
            </Link>
          </div>
          <ShowCarousel />
        </div>
      </div>
      <div id="upcoming" className="w-full p-[16px] lg:p-[64px]">
        <div className="bg-[#161616] p-[32px] rounded-[8px]">
          <div className="py-8 w-full flex justify-between items-center gap-2">
            <h1
              style={{ fontFamily: 'Mirage' }}
              className="text-[20px] md:text-[32px]"
            >
              Popular movies
            </h1>
            <Link
              href="/pages/popularMovies"
              className="py-[8px] px-[16px] md:py-[15px] md:px-[30px] bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
            >
              See more <IoChevronForward />
            </Link>
          </div>
          <PopularCarousel />
        </div>
      </div>
      <div id="upcoming" className="w-full p-[16px] lg:p-[64px]">
        <div className="bg-[#161616] p-[32px] rounded-[8px]">
          <div className="py-8 w-full flex justify-between items-center gap-2">
            <h1
              style={{ fontFamily: 'Mirage' }}
              className="text-[20px] md:text-[32px]"
            >
              Top rated movies
            </h1>
            <Link
              href="/pages/topratedMovies"
              className="py-[8px] px-[16px] md:py-[15px] md:px-[30px] bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
            >
              See more <IoChevronForward />
            </Link>
          </div>
          <TrendingCarousel />
        </div>
      </div>
    </>
  )
}
