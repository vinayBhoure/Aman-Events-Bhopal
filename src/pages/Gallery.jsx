import React from 'react'
import MasonryGallery from '../components/MasonryGallery'
import { images } from '../data/data'
import SEO from '../seo/SEO';
import { galleryPageSeoProps } from '../seo/seoProps';

function Gallery() {
  return (
    <section className='relative'>
      <SEO {...galleryPageSeoProps} />
      <MasonryGallery
        column={5}
        images={images} />

    </section>
  )
}

export default Gallery
