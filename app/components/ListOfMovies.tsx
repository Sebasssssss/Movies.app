import Movies from './Movies'

export default function ListOfMovies({ movies }) {
  return (
    <div className="w-full flex flex-wrap">
      {movies.map(
        ({
          adult,
          id,
          title,
          overview,
          poster_path,
          release_date,
          popularity
        }) => (
          <Movies
            key={id}
            adult={adult}
            id={id}
            title={title}
            overview={overview}
            poster_path={poster_path}
            release_date={release_date}
            popularity={popularity}
          />
        )
      )}
    </div>
  )
}
