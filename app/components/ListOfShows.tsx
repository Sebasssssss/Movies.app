import Show from './Show'
import { Shows } from 'interfaces/shows.d'

export default function ListOfShows({ shows }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-[32px]">
      {shows.map((props: Shows) => (
        <Show
          key={props.id}
          adult={props.adult}
          id={props.id}
          name={props.name}
          poster_path={props.poster_path}
          release_date={props.release_date}
          vote_average={props.vote_average}
        />
      ))}
    </div>
  )
}
