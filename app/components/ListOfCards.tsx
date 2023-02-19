import { apiTypes } from 'interfaces/movie'
import Card from './Card'

export default function ListOfCards({ movies }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
      {movies.map((props: apiTypes) => (
        <Card
          key={props.id}
          adult={props.adult}
          id={props.id}
          title={props.title}
          poster_path={props.poster_path}
          release_date={props.release_date}
          popularity={props.popularity}
        />
      ))}
    </div>
  )
}
