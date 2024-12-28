import React from 'react'

function CelebrityCard({name, category, image}) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-neutral-700">
            <div className="aspect-w-4 aspect-h-5">
                <img src={image} alt={`${name}`} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
                <p className="text-neutral-300">{category}</p>
            </div>
        </div>
    )
}

export default CelebrityCard
