'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

export default function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push(`/pages/results/${keyword}`)
  }

  const handleChange = (e: any) => {
    setKeyword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="inline-flex items-center gap-2">
      <button type="submit">
        <FiSearch />
      </button>
      <input
        placeholder="Search Movie"
        onChange={handleChange}
        value={keyword}
        className="bg-transparent outline-none"
      />
    </form>
  )
}
