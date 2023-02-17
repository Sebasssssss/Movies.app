import Image from 'next/image'
import avatarImage from '../../public/homepage.jpg'

export default function Footer() {
  return (
    <div className="w-full bg-[#0a0a0a] p-20 mt-10">
      <div className="flex justify-between w-full border-b p-5 mb-5">
        <div className="grid gap-5 w-56">
          <div className="inline-flex items-center gap-2">
            <Image
              src={avatarImage}
              alt="AvatarFooter"
              width="50"
              height="50"
              className="rounded-full"
            />
            <h1 className="text-md">dreamy.</h1>
          </div>
          <h1 className="opacity-70 text-justify">
            Dreamy UI RR. Carefully created components for A@@@@ Experiment
            Design
          </h1>
        </div>
        <div className="uppercase inline-flex items-center gap-4">
          <h1>products</h1>
          <h1>blog</h1>
          <h1>shop</h1>
          <h1>contacts</h1>
        </div>
      </div>
      <div className="w-full text-right opacity-70">
        Copyright © 2023 Sebass. All rights reserved.
      </div>
    </div>
  )
}
