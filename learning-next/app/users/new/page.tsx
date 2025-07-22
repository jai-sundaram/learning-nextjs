import React from 'react'
import Link from 'next/link'
import { ProductCard } from '@/app/components/ProductCard'
const page = () => {
  return (
    <main>
    <div>Hello World</div>
    {/* we can use the Link Component to actually link pages. also this is how u comment*/}
    <Link href="/users">Users</Link>
    <ProductCard></ProductCard>
    </main>
  )
}

export default page