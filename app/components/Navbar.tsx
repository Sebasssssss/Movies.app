import Link from 'next/link'
import SearchForm from './SearchForm'
import { IoHome } from 'react-icons/io5'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#0e0e10]/30 backdrop-blur-md z-30">
      <nav className="justify-between p-4 w-full mx-auto flex">
        <Link
          href="/"
          className="flex items-center text-md font-semibold gap-1 text-[#58586a] hover:text-[#EB455F] hover:border-[#EB454F] px-2 rounded-full active:scale-[0.95] transition-colors duration-200 ease-in-out"
        >
          <IoHome /> Home
        </Link>
        <SearchForm />
        <button className="px-4 font-semibold hidden sm:block py-1 rounded-xl text-[#58586a] hover:text-[#EB455F] hover:border-[#EB455F] active:scale-[0.95] transition-colors duration-200 ease-in-out">
          Sign up
        </button>
      </nav>
    </header>
  )
}
