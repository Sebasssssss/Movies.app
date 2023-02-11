import Image from 'next/image'

export default function Movies({
  adult,
  id,
  title,
  overview,
  poster_path,
  release_date,
  popularity
}) {
  return (
    <>
      <li className="w-[190px] h-[254px] group relative flex p-[1.9rem] shadow-lg transition duration-500 ease-out overflow-hidden hover:translate-y-[5%]">
        <div key={id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className="h-full w-full object-cover rounded-[1rem]"
            alt={title}
            width="200"
            height="200"
          />
          <div className="hidden group-hover:flex group-hover:flex-col absolute bottom-0 group-hover:-translate-y-[5%] transition-transform duration-500 ease-out">
            <h1 className="text-md w-full bg-slate-900/40 py-1.5 font-bold backdrop-blur-sm">
              {title}
            </h1>
            <h1 className="text-sm w-full bg-slate-900/40 py-1.5 font-bold backdrop-blur-sm">
              {overview}
            </h1>
            <h1 className="text-sm w-full bg-slate-900/40 py-1.5 font-bold backdrop-blur-sm">
              {popularity}
            </h1>
            <h1 className="text-sm w-full bg-slate-900/40 py-1.5 font-bold backdrop-blur-sm">
              {adult}
            </h1>
            <h1 className="text-sm w-full bg-slate-900/40 py-1.5 font-bold backdrop-blur-sm">
              {release_date}
            </h1>
          </div>
        </div>
      </li>
    </>
  )
}
