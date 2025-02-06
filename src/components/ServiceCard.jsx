import React from 'react'

function ServiceCard({ title, description, icon, image, index }) {
  return (
    //     <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
    //     <div className="text-pink-400 mb-6">
    //        {icon}
    //     </div>
    //     <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    //     <p className="text-neutral-400 mb-4">{description}</p>
    // </div>
    <div
      key={index}
      className="group relative bg-neutral-800 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-800/70 to-neutral-800"></div>
      </div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed flex-grow">
          {description.length > 130 ? `${description.substring(0, 130)}...` : description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-tr-full"></div>
    </div>
  )
}

export default ServiceCard
