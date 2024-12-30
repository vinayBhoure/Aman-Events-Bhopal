import React from 'react'
import { NavLink } from 'react-router-dom'

function CTA({title}) {
    return (
        <div className="mt-16 text-center">
            <NavLink to="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity duration-300">
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </NavLink>
        </div>
    )
}

export default CTA
