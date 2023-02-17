import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import SearchForm from './SearchForm'

export default function Navbar() {
  return (
    <header className="w-full fixed top-2 z-30 px-2">
      <nav className="flex justify-between p-4 container bg-[#0e0e10]/90 backdrop-blur-md mx-auto rounded-[1rem] shadow-xl">
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
