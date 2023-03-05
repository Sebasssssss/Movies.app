import { apiTypes } from 'interfaces/movie.d'
import Movie from './Movie'

export default function ListOfCards({ movies }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-[32px]">
      {movies.map((props: apiTypes) => (
        <Movie
          key={props.id}
          adult={props.adult}
          id={props.id}
          title={props.title}
          poster_path={props.poster_path}
          release_date={props.release_date}
          vote_average={props.vote_average}
        />
      ))}
    </div>
  )
}
