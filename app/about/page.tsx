import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me'
}

export default function About() {
  return (
    <>
        <h1>About</h1>
        <Link href="/">Go to Home Page</Link>
    </>
  )
}
