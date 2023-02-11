import { FiSearch } from 'react-icons/fi'
import { IoChevronBack } from 'react-icons/io5'

export default function Navbar() {
  return (
    <nav className="flex justify-between p-2">
      <div className="inline-flex items-center gap-2 text-sm">
        <IoChevronBack />
        Back
      </div>
      <form className="inline-flex items-center gap-2">
        <FiSearch />
        <input
          placeholder="Search Movie"
          className="bg-transparent outline-none"
        />
      </form>
      <button className="px-5 py-1 border border-white rounded-xl">
        Sign up
      </button>
    </nav>
  )
}
