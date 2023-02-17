'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

export default function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    router.push(`/pages/search/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center gap-2 text-black/50 relative"
    >
      <input
        placeholder="Search Movie"
        onChange={handleChange}
        value={keyword}
        className="bg-[#e9ecf7] w-full rounded-full px-4 py-1 outline-none placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
      />
      <button type="submit" className="absolute right-3">
        <FiSearch />
      </button>
    </form>
  )
}
