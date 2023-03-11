export default function ListSuggestions({ suggestions, handleSuggestion }) {
  return (
    <ul className="text-zinc-300 suggestions flex flex-col gap-2 text-sm rounded-md bg-[#060606] z-10 overflow-hidden backdrop-blur-xl border border-zinc-700/40 absolute bottom-0 translate-y-[101.5%]">
      {suggestions &&
        suggestions.map((suggestion, i) => {
          return (
            <li
              onClick={() => handleSuggestion(suggestion)}
              className="p-2 cursor-pointer w-full hover:bg-zinc-800 transition-colors duration-300"
              key={i}
            >
              {suggestion}
            </li>
          )
        })}
    </ul>
  )
}
