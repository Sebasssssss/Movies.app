import { seasons } from '@/const/seasons.d'

export default function SeasonSelect({ number_of_seasons, setSeason }) {
  const handleChange = e => {
    setSeason(e.target.value)
  }

  return (
    <select
      onChange={handleChange}
      className="outline-none bg-black text-zinc-300 py-1 px-4 rounded"
    >
      {seasons
        .map(episode => (
          <option value={episode.id} key={episode.id}>
            {episode.label}
          </option>
        ))
        .slice(0, number_of_seasons)}
    </select>
  )
}
