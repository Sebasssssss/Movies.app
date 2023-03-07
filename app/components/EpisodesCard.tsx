'use client'
import { Shows } from '@/interfaces/shows.d'
import Image from 'next/image'
import { useState } from 'react'
import { IoStar } from 'react-icons/io5'

export default function EpisodesCard({
  name,
  still_path,
  vote_average,
  episode_number
}: Shows) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      <div className="w-[250px] h-[180px] rounded-[8px] group grid relative place-items-center overflow-hidden shadow-lg transition duration-500 ease-out hover:translate-y-[5%]">
        <div className="w-full h-full rounded-[8px]">
          {still_path === null ? (
            <Image
              src="/notfound1.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className={`${
                isLoading ? 'grayscale blur-md' : 'grayscale-0 blur-0'
              } duration-700 ease-in-out group-hover:blur-md`}
              onLoadingComplete={() => setIsLoading(false)}
            />
          ) : (
            <Image
              src={`https://image.tmdb.org/t/p/w500${still_path}`}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className={`${
                isLoading ? 'grayscale blur-md' : 'grayscale-0 blur-0'
              } duration-700 ease-in-out group-hover:blur-md`}
              onLoadingComplete={() => setIsLoading(false)}
            />
          )}
          <div className="z-10 text-white flex flex-col justify-between opacity-0 translate-y-[25%] group-hover:opacity-100 group-hover:translate-y-0 text-left w-full h-full px-6 py-2 bg-black/60 transition duration-500">
            <div className="flex flex-col gap-2">
              <h1 className="text-md w-full py-1 font-outfit">{name}</h1>
              <h1 className="text-sm w-full py-1">{}</h1>
              <h1 className="text-sm w-max py-1 px-2 inline-flex items-center gap-1 border border-[#2B3467]">
                {vote_average}
                <IoStar className="text-yellow-400 fill-yellow-400" />
              </h1>
              <div className="inline-flex items-center gap-1">
                <div className="absolute bottom-2 left-2 text-xl font-outfit">
                  {episode_number}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
