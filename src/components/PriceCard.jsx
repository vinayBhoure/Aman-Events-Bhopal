import React from 'react'

function PriceCard({ title, price, features, cta, badge }) {
    return (
        <div className="relative bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

            <ul className="space-y-4 mb-8">
                {features && features?.map((feature, idx) => {
                    return (
                        <li key={idx} className="flex items-center text-neutral-300">
                            <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                        </li>

                    )
                })}
            </ul>
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity duration-300">
                {cta}
            </button>
        </div>
    )
}

export default PriceCard
