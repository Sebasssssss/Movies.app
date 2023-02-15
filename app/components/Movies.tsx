import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { apiTypes } from 'interfaces/movie'

export default function Movies({
  adult,
  id,
  title,
  poster_path,
  release_date,
  popularity
}: apiTypes) {
  return (
    <>
      <Link
        href={`/pages/detail/${id}`}
        className="w-[170px] h-[250px] group grid place-items-center overflow-hidden relative shadow-lg transition duration-500 ease-out hover:translate-y-[5%] before:content-[''] before:w-full before:h-full before:z-20 before:transition before:duration-500 hover:before:opacity-100"
      >
        <div key={adult}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className="rounded"
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <div className="z-30 text-white opacity-0 translate-y-[50%] transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 text-left flex flex-col w-max h-full px-6 py-2 backdrop-blur-sm">
            <h1 className="text-md w-full py-1.5 font-bold">{title}</h1>
            <h1 className="text-sm w-full py-1.5 inline-flex items-center gap-1">
              Release date <FiChevronRight className="mt-0.5" /> {release_date}
            </h1>
            <h1 className="text-sm w-full py-1.5">{popularity}</h1>
            <h1 className="text-sm w-full py-1.5">{adult ? '+18' : '+13'}</h1>
            <div className="inline-flex items-center gap-1">
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStarHalf className="fill-yellow-500" />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
