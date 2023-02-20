import UpcomingCarousel from './components/Carousels/UpcomingMovies'
import ShowCarousel from './components/Carousels/TvShowsCar'
import PopularCarousel from './components/Carousels/PopularMovies'
import TrendingCarousel from './components/Carousels/TrendingMovies'
import { IoAdd, IoChevronDown, IoPlay, IoStar } from 'react-icons/io5'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="h-[100vh] grid items-center w-full bg-[url('../public/homepage.png')] bg-cover bg-center">
        <div className="w-full bg-black/50 bg-gradient-to-t from-[#060606] to-transparent">
          <div className="max-w-[1200px] mx-auto w-full h-[100vh] grid items-center">
            <div className="text-justify grid gap-5 w-full lg:w-[700px] p-10">
              <h1 className={`${inter.className} text-7xl font-bold`}>
                Peaky blinders
              </h1>
              <p className={`${inter.className} text-md`}>
                A gangster family epic set in 1900s England, centering on a gang
                who sew razor blades in the peaks of their caps, and their
                fierce boss Tommy Shelby. Thomas Shelby and his brothers return
                to Birmingham after serving in the British Army during WWI.
              </p>
              <h1 className="flex items-center gap-1">
                <IoStar className="fill-yellow-500" /> 7.5
              </h1>
              <div className="inline-flex items-center gap-4">
                <button className="uppercase bg-[#EB455F] rounded-full px-7 py-2 inline-flex items-center gap-2 active:scale-[0.95] transition-transform duration-200 ease-in-out">
                  <IoPlay /> watch
                </button>
                <button className="uppercase bg-black rounded-full px-7 py-2 inline-flex items-center gap-2 active:scale-[0.95] transition-transform duration-200 ease-in-out">
                  <IoAdd /> watch
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full px-4">
        <div
          className={`${inter.className} group p-2 inline-flex items-center gap-2 cursor-pointer`}
        >
          <h1 className="text-xl font-semibold">Upcoming </h1>
          <Link href="/pages/upcomingMovies">
            <div className="items-center inline-flex -translate-x-16 group-hover:translate-x-0 transition-all duration-300">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                See more
              </span>
              <IoChevronDown className="group-hover:translate-x-2 group-hover:-rotate-90 transition-all duration-300" />
            </div>
          </Link>
        </div>
        <UpcomingCarousel />
      </div>
      <div className="w-full p-4">
        <div
          className={`${inter.className} group p-2 inline-flex items-center gap-2 cursor-pointer`}
        >
          <h1 className="text-xl font-semibold">On TV </h1>
          <Link href="#">
            <div className="items-center inline-flex -translate-x-16 group-hover:translate-x-0 transition-all duration-300">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                See more
              </span>
              <IoChevronDown className="group-hover:translate-x-2 group-hover:-rotate-90 transition-all duration-300" />
            </div>
          </Link>
        </div>
        <ShowCarousel />
      </div>
      <div className="w-full p-4">
        <div
          className={`${inter.className} group p-2 inline-flex items-center gap-2 cursor-pointer`}
        >
          <h1 className="text-xl font-semibold">Popular Movies</h1>
          <Link href="/pages/popularMovies">
            <div className="items-center inline-flex -translate-x-16 group-hover:translate-x-0 transition-all duration-300">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                See more
              </span>
              <IoChevronDown className="group-hover:translate-x-2 group-hover:-rotate-90 transition-all duration-300" />
            </div>
          </Link>
        </div>
        <PopularCarousel />
      </div>
      <div className="w-full p-4">
        <div
          className={`${inter.className} group p-2 inline-flex items-center gap-2 cursor-pointer`}
        >
          <h1 className="text-xl font-semibold">Top rated movies</h1>
          <Link href="/pages/topratedMovies">
            <div className="items-center inline-flex -translate-x-16 group-hover:translate-x-0 transition-all duration-300">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                See more
              </span>
              <IoChevronDown className="group-hover:translate-x-2 group-hover:-rotate-90 transition-all duration-300" />
            </div>
          </Link>
        </div>
        <TrendingCarousel />
      </div>
    </>
  )
}
