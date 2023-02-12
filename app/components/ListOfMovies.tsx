import Movies from './Movies'

interface Props {
  adult?: string
  id: string
  title: string
  poster_path: string
  release_date?: string
  popularity: string
}

export default function ListOfMovies({ movies }) {
  return (
    <div className="w-full flex flex-wrap gap-5">
      {movies.map((props: Props) => (
        <Movies
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
