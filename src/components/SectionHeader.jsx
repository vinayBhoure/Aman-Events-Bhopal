import React from 'react'

function SectionHeader({heading, description}) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                {heading}
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader
