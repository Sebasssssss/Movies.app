'use client'
import React from 'react'
import ListSuggestions from './ListSuggestions'
import useSuggestions from '@/hooks/useSuggestions'
import { FiSearch } from 'react-icons/fi'

function SearchForm() {
  const { handleSuggestion, handleChange, handleSubmit, keyword, suggestions } =
    useSuggestions()

  return (
    <form
      onSubmit={handleSubmit}
      className="items-center gap-2 relative flex flex-col w-max"
    >
      <button type="submit" className="absolute right-3 top-2.5 z-10">
        <FiSearch className="text-[#58586a] hover:text-[#EB454F] transition duration-200" />
      </button>
      <input
        placeholder="Search Movie"
        onChange={handleChange}
        value={keyword}
        className="bg-transparent relative border-2 border-[#58586a] text-[#58586a] hover:border-[#EB454F]/60 hover:shadow-search focus:shadow-search focus:border-[#EB454F] w-[150px] focus:w-[250px] focus:bg-zinc-900 focus:text-white rounded-full px-4 py-1 outline-none placeholder:text-[#58586a] transition-all duration-200"
      />
      <ListSuggestions
        handleSuggestion={handleSuggestion}
        suggestions={suggestions}
      />
    </form>
  )
}

export default React.memo(SearchForm)
