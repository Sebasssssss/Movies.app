'use client'
import React, { useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      if (keyword == '') return null
      router.push(`/pages/search/${keyword}`)
      ref.current.blur()
    },
    [keyword, router]
  )

  const handleChange = useCallback(e => {
    setKeyword(e.target.value)
  }, [])

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
        className="bg-transparent border-2 border-[#58586a] text-[#58586a] hover:border-[#EB454F]/60 hover:shadow-search focus:shadow-search focus:border-[#EB454F] w-[150px] focus:w-[250px] focus:bg-zinc-900 focus:text-white rounded-full px-4 py-1 outline-none placeholder:text-[#58586a] transition-all duration-200"
      />
      <button type="submit" className="absolute right-3">
        <FiSearch className="text-[#58586a] hover:text-[#EB454F] transition duration-200" />
      </button>
    </form>
  )
}

export default React.memo(SearchForm)
