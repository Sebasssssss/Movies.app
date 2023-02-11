import Movies from './Movies'

export default function ListOfMovies({ movies }) {
  return (
    <div className="w-full grid grid-cols-4 gap-5">
      {movies.map(
        ({ adult, id, title, poster_path, release_date, popularity }) => (
          <Movies
            key={id}
            adult={adult}
            id={id}
            title={title}
            poster_path={poster_path}
            release_date={release_date}
            popularity={popularity}
          />
        )
      )}
    </div>
  )
}
