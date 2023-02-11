import Movies from './Movies'

export default function ListOfMovies({ movies }) {
  return (
    <div className="w-full flex flex-wrap gap-5">
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
