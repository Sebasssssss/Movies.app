import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import SearchForm from './SearchForm'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-xl bg-black/50 border-b border-slate-700/60 z-30 py-[16px] px-2 md:px-[64px]">
      <nav className="justify-between w-full mx-auto flex">
        <Link
          href="/"
          className="text-[24px] font-outfit outline-none text-white hover:border-[#EB454F] active:scale-[0.95] transition-transform duration-200"
        >
          Cinema
        </Link>
        <SearchForm />
        <Link
          href="https://github.com/Sebasssssss"
          className="md:inline-flex items-center gap-2 hidden"
        >
          <IoLogoGithub /> Source
        </Link>
      </nav>
    </header>
  )
}
