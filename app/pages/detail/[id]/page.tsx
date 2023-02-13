import Image from 'next/image'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { API_URL, API_KEY } from '../../../services/settings'

const fetchSingleMovie = async (id: number) => {
  const apiUrl = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  return fetch(apiUrl).then(res => res.json())
}

export default async function Page({ params }) {
  const { id }: any = params
  const { runtime, title, poster_path, overview, release_date } =
    await fetchSingleMovie(id)

  const hoursConvert = (num: number) => {
    let hours = Math.floor(num / 60)
    let minutes = num % 60
    return hours + 'h' + ' : ' + minutes + 'min'
  }

  return (
    <main className="w-full h-screen">
      <div className="w-full h-full fixed -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          fill
        />
        <div className="backdrop-blur-md w-full h-full bg-black/50"></div>
      </div>
      <div className="h-[100vh] max-w-[1200px] mx-auto p-4">
        <div className="grid grid-cols-2 gap-5 place-items-center p-24">
          <div className="grid gap-4">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <h1 className="text-sm">{overview}</h1>
            <h1 className="text-md">{hoursConvert(runtime)}</h1>
            <h1 className="text-md">{release_date}</h1>
            <div className="inline-flex items-center gap-1">
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStarHalf className="fill-yellow-500" />
            </div>
            <button className="w-max rounded bg-red-500 px-3 py-1">
              Watch
            </button>
          </div>
          <div className="w-[270px] h-[350px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              className="rounded-sm shadow-2xl"
              alt={title}
              width="270"
              height="350"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
