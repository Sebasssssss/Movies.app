import Link from 'next/link'
import SearchForm from './SearchForm'
import { IoHome } from 'react-icons/io5'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#0e0e10]/50 backdrop-blur-md z-30">
      <nav className="justify-between p-4 w-full mx-auto flex">
        <Link
          href="/"
          className="flex items-center text-md font-semibold border-2 border-[#58586a] text-[#58586a] hover:text-[#EB455F] hover:border-[#EB454F] px-2 rounded-full transition-colors duration-200"
        >
          <IoHome />
        </Link>
        <SearchForm />
        <button className="px-5 hidden sm:block py-1 border-2 rounded-xl text-[#58586a] border-[#58586a] hover:text-[#EB455F] hover:border-[#EB455F] transition-colors duration-200">
          Sign up
        </button>
      </nav>
    </header>
  )
}
