import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import SearchForm from './SearchForm'

export default function Navbar() {
  return (
    <header className="w-full absolute top-2">
      <nav className="flex justify-between p-4 container bg-[#19191e] mx-auto rounded-[1rem] shadow-xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-md font-semibold border-2 border-[#58586a] px-2 rounded-full"
        >
          <IoHome className="fill-[#58586a]" />
        </Link>
        <SearchForm />
        <button className="px-5 py-1 border-2 rounded-xl text-[##58586a] border-[#58586a]">
          Sign up
        </button>
      </nav>
    </header>
  )
}
