'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="text-red-500">Hello Tailwind</h1>
      {/* we can use the Link Component to actually link pages. also this is how u comment*/}
      <Link href="/users">Users</Link>
    </main>
  )
}
