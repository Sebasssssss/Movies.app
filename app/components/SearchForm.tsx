'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

export default function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    if (keyword == '') return null
    router.push(`/pages/search/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center gap-2 relative"
    >
      <input
        placeholder="Search Movie"
        onChange={handleChange}
        value={keyword}
        className="bg-transparent border-2 border-[#58586a] w-full rounded-full px-4 py-1 outline-none placeholder:text-[#58586a] focus:outline-none focus:ring-2 focus:ring-[#ff4a4f] focus:ring-offset-2 focus:ring-offset-[#FCFFE7] transition-all"
      />
      <button type="submit" className="absolute right-3">
        <FiSearch className="text-[#58586a]" />
      </button>
    </form>
  )
}
