'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello my homo world  </h1>
      {/* we can use the Link Component to actually link pages. also this is how u comment*/}
      <Link href="/users">Users</Link>
    </main>
  )
}
