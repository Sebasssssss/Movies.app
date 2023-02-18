import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import SearchForm from './SearchForm'

export default function Navbar() {
  return (
    <header className="absolute w-full bg-[#0e0e10]/90 backdrop-blur-md shadow-xl">
      <nav className="justify-between p-4 max-w-[1200px] mx-auto flex">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-md font-semibold border-2 border-[#58586a] text-[#58586a] hover:text-[#9797b6] hover:border-[#9797b6] px-2 rounded-full transition-colors duration-200"
        >
          <IoHome />
        </Link>
        <SearchForm />
        <button className="px-5 hidden sm:block py-1 border-2 rounded-xl text-[##58586a] border-[#58586a]">
          Sign up
        </button>
      </nav>
    </header>
  )
}
