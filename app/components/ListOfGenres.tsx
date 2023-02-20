export default function ListOfGenres({ listofGenres }) {
  return (
    <h1 className="text-sm flex flex-wrap items-center gap-2 w-full">
      {listofGenres.genres?.map(genre => {
        return (
          <li className="list-none" key={listofGenres.id}>
            {genre.name},
          </li>
        )
      })}
    </h1>
  )
}
