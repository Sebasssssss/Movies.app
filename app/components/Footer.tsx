import Link from 'next/link'
import { Rubik } from '@next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function Footer() {
  return (
    <div className="w-full bg-[#0a0a0a] p-8 grid justify-center">
      <div className="grid text-center w-full border-b border-[#303030] gap-2 pb-5 mb-5">
        <div
          className={`${rubik.className} uppercase inline-flex gap-4 justify-center text-sm`}
        >
          <Link href="https://github.com/Sebasssssss/Movies.app">source</Link>
          <h1>email</h1>
          <Link href="https://github.com/Sebasssssss">github</Link>
        </div>
      </div>
      <div className="w-full text-right opacity-40">
        Copyright © 2023 Sebass. All rights reserved.
      </div>
    </div>
  )
}
