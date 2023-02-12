import Link from 'next/link'
import { IoChevronBack } from 'react-icons/io5'
import SearchForm from './SearchForm'

export default function Navbar() {
  return (
    <nav className="flex justify-between p-2">
      <Link href="/" className="inline-flex items-center gap-2 text-sm">
        <IoChevronBack />
        Back
      </Link>
      <SearchForm />
      <button className="px-5 py-1 border border-white rounded-xl">
        Sign up
      </button>
    </nav>
  )
}
