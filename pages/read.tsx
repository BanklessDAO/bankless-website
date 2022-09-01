import React from 'react'

import Hero from '../components/read/hero'
import { NewsletterList } from '../components/read/NewsletterList'
import Satire from '../components/read/satire'
import IntMediaNode from '../components/read/international-media-node'

export default function ReadPage() {
  return (
    <>
      <Hero />
      <NewsletterList />
      <Satire />
      <IntMediaNode />
    </>
  )
}
