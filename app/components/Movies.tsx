import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'
import { IoStar, IoStarHalf } from 'react-icons/io5'

interface Props {
  adult?: string
  id: string
  title: string
  poster_path: string
  release_date?: string
  popularity: string
}

export default function Movies(props: Props) {
  return (
    <>
      <li className="w-[170px] h-[250px] group grid place-items-center overflow-hidden relative shadow-lg transition duration-500 ease-out hover:translate-y-[5%] before:content-[''] before:w-full before:h-full before:z-20 before:transition before:duration-500 hover:before:opacity-100 rounded-[1rem]">
        <div key={props.adult}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
            className="rounded-[1rem]"
            alt={props.title}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <div className="z-30 text-white opacity-0 translate-y-[50%] transition duration-500 group-hover:opacity-100 group-hover:translate-y-12 text-left flex flex-col w-[300px] h-max px-6 py-2 bg-slate-900/70">
            <h1 className="text-md w-full py-1.5 font-bold">{props.title}</h1>
            <h1 className="text-sm w-full py-1.5 inline-flex items-center gap-1">
              Release date <FiChevronRight className="mt-0.5" />{' '}
              {props.release_date}
            </h1>
            <h1 className="text-sm w-full py-1.5">{props.popularity}</h1>
            <h1 className="text-sm w-full py-1.5">{props.adult}</h1>
            <div className="inline-flex items-center gap-1">
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStarHalf className="fill-yellow-500" />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
