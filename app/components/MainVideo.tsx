'use client'
import { useState } from 'react'
import { IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5'
export default function MainVideo() {
  const [muted, setMuted] = useState(true)

  const handleMuted = () => setMuted(current => !current)

  return (
    <div className="w-full h-[100vh] absolute left-0 right-0 ml-auto mr-auto text-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted={muted}
      >
        <source src="/homepage.mp4" />
      </video>
      <button
        className="absolute bottom-10 right-10 z-20 text-zinc-700 hover:text-zinc-300/40 active:text-zinc-200 transition-colors duration-200"
        onClick={handleMuted}
      >
        {muted ? (
          <IoVolumeMuteOutline className="w-10 h-auto" />
        ) : (
          <IoVolumeHighOutline className="w-10 h-auto" />
        )}
      </button>
    </div>
  )
}
