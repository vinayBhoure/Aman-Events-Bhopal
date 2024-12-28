import React from 'react'
import MasonryGallery from '../components/MasonryGallery'
import { images } from '../data/data'

function Gallery() {
  return (
    <section className='relative'>
      <MasonryGallery
        column={5}
        images={images} />

    </section>
  )
}

export default Gallery
