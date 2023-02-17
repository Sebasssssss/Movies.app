import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '../../public/avatar.jpg'

export default function Footer() {
  return (
    <div className="w-full bg-[#0a0a0a] p-10">
      <div className="flex justify-between w-full border-b border-[#303030] p-5 mb-5">
        <div className="grid gap-5 w-60">
          <div className="inline-flex items-center gap-2">
            <div className="rounded-full overflow-hidden w-8 h-8">
              <Image
                src={avatarImage}
                alt="AvatarFooter"
                width="50"
                height="50"
              />
            </div>
            <h1 className="text-lg">Sebass</h1>
          </div>
          <h1 className="opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et.
          </h1>
        </div>
        <div className="uppercase inline-flex gap-4">
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
