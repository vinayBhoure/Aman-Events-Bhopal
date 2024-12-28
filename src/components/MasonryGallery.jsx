import React from 'react';
import { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';


const MasonryGallery = ({column, images}) => {
  const [columns, setColumns] = useState(column);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 768) {
        setColumns(column);
      } else if (window.innerWidth >= 500) {
        setColumns(Math.floor(column/2));
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const getColumnImages = (columnIndex) => {
    return images.filter((_, index) => index % columns === columnIndex);
  };

  return (
    <section className="relative py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader heading={"Our Event Gallery"} />
        <div className="flex gap-8">
          {[...Array(columns)].map((_, columnIndex) => (
            <div key={columnIndex} className="flex-1 space-y-6">
              {getColumnImages(columnIndex).map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]
                  hover:box-shadow: rgba(255, 255, 255, 0.56) 0px 22px 70px 4px;"
                >
                  <img
                    src={`${image.url}?w=600&fit=crop&auto=format`}
                    alt={`Gallery image ${imageIndex + 1}`}
                    className="w-full object-cover"
                    style={{ height: `${image.height}px` }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;