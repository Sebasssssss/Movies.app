import AiringToday from '@/components/Carousels/TvShows/AiringToday'
import PopularShows from '@/components/Carousels/TvShows/PopularShows'
import ShowsOnTheAir from '@/components/Carousels/TvShows/ShowsOnTheAir'
import SortedTvShows from '@/components/Carousels/TvShows/SortedTvshows'
import TopRatedShows from '@/components/Carousels/TvShows/TopRatedShows'

export default function Page() {
  return (
    <div>
      <h1 className="w-full text-[48px] font-outfit py-[96px] grid gap-8 text-center">
        Tv shows section
      </h1>
      <SortedTvShows />
      <PopularShows />
      <AiringToday />
      <ShowsOnTheAir />
      <TopRatedShows />
    </div>
  )
}
