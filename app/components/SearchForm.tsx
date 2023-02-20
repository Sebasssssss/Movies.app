'use client'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

export default function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (keyword == '') return null
    router.push(`/pages/search/${keyword}`)
    ref.current.blur()
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
        ref={ref}
        className="bg-transparent border-2 border-[#58586a] hover:border-[#EB454F] hover:shadow-search focus:shadow-search focus:border-[#EB454F] w-[150px] focus:w-[250px] focus:bg-black/20 rounded-full px-4 py-1 outline-none placeholder:text-[#58586a] transition-all duration-200"
      />
      <button type="submit" className="absolute right-3">
        <FiSearch className="text-[#58586a] hover:text-[#EB454F] transition duration-200" />
      </button>
    </form>
  )
}
