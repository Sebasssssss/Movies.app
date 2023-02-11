'use client'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

export default function SearchForm() {
  const router = useRouter()

  return (
    <form className="inline-flex items-center gap-2">
      <button type="submit" onClick={() => router.push('/')}>
        <FiSearch />
      </button>
      <input
        placeholder="Search Movie"
        className="bg-transparent outline-none"
      />
    </form>
  )
}
