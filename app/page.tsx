import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <div>
      <main>
        <h1 className='text-white'>Home Page</h1>
      </main>
    </div>
  )
}
