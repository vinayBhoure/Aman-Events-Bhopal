import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';

const MasonryGallery = ({ images = [] }) => {
  if (!images.length) return null;

  const getGridPosition = (index) => {
    switch (index % 12) {
      case 0:
        return "col-span-2 row-span-2";
      case 3:
      case 8:
        return "col-span-2";

      case 5:
      case 9:
        return "row-span-2";

      default:
        return "";
    }
  };

  return (
    <section className="relative py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader heading="Our Event Gallery" />

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-min gap-2 sm:gap-3 md:gap-4">
          {images.map((image, index) => {
            const position = getGridPosition(index);

            return (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-lg shadow-lg group
                  ${position}
                `}
                style={{
                  aspectRatio: position.includes('row-span-2') && !position.includes('col-span-2') ? '1/2' :
                    position.includes('col-span-2') && !position.includes('row-span-2') ? '2/1' : '1/1'
                }}
              >
                <img
                  src={`${image.url}?w=${position.includes('col-span-2') ? 800 : 400}&fit=crop&auto=format`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;