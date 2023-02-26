import Link from 'next/link'
import GithubIco from './icons/github'
import SearchForm from './SearchForm'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-30 py-[32px] px-2 md:px-[64px]">
      <nav className="justify-between w-full mx-auto flex">
        <Link
          href="/"
          className="text-[24px] font-outfit text-white hover:border-[#EB454F] active:scale-[0.95] transition-transform duration-200"
        >
          Cinema
        </Link>
        <SearchForm />
        <Link
          href="https://github.com/Sebasssssss"
          className="md:inline-flex items-center gap-2 hidden"
        >
          <GithubIco /> Source
        </Link>
      </nav>
    </header>
  )
}
