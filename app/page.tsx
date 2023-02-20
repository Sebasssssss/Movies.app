import UpcomingCarousel from './components/Carousels/UpcomingMovies'
import ShowCarousel from './components/Carousels/TvShowsCar'
import PopularCarousel from './components/Carousels/PopularMovies'
import TrendingCarousel from './components/Carousels/TrendingMovies'
import { IoAdd, IoPlay, IoStar } from 'react-icons/io5'
import { Rubik } from '@next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="h-[100vh] grid items-center w-full bg-[url('../public/homepage.png')] bg-cover bg-center">
        <div className="w-full bg-black/50 bg-gradient-to-t from-[#060606] to-transparent">
          <div className="max-w-[1200px] mx-auto w-full h-[100vh] grid items-center">
            <div className="text-justify grid gap-5 w-full lg:w-[700px] p-10">
              <h1 className={`${rubik.className} text-7xl`}>Peaky blinders</h1>
              <p className={`${rubik.className} text-md`}>
                A gangster family epic set in 1900s England, centering on a gang
                who sew razor blades in the peaks of their caps, and their
                fierce boss Tommy Shelby. Thomas Shelby and his brothers return
                to Birmingham after serving in the British Army during WWI.
              </p>
              <h1 className="flex items-center gap-1">
                <IoStar className="fill-yellow-500" /> 7.5
              </h1>
              <div className="inline-flex items-center gap-4">
                <button className="uppercase bg-[#EB455F] rounded-full px-7 py-2 inline-flex items-center gap-2">
                  <IoPlay /> watch
                </button>
                <button className="uppercase bg-black rounded-full px-7 py-2 inline-flex items-center gap-2">
                  <IoAdd /> watch
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full px-4">
        <h1 className={`${rubik.className} text-xl font-semibold p-2`}>
          Upcoming
        </h1>
        <UpcomingCarousel />
      </div>
      <div className="w-full p-4">
        <h1 className={`${rubik.className} text-xl font-semibold p-2`}>
          On TV
        </h1>
        <ShowCarousel />
      </div>
      <div className="w-full p-4">
        <h1 className={`${rubik.className} text-xl font-semibold p-2`}>
          Popular
        </h1>
        <PopularCarousel />
      </div>
      <div className="w-full p-4">
        <h1 className={`${rubik.className} text-xl font-semibold p-2`}>
          Trending
        </h1>
        <TrendingCarousel />
      </div>
    </>
  )
}
