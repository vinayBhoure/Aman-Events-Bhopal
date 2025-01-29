import React from 'react'
import { Star, Quote } from 'lucide-react';

function TestimonialCard({ index, name, role, image, quote, rating, eventImage }) {
    return (
        // <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
        //     <div className="flex items-center mb-6">
        //         <img src={image} alt="Client" className="w-12 h-12 rounded-full" />
        //         <div className="ml-4">
        //             <h4 className="text-white font-semibold">{name}</h4>
        //             <p className="text-neutral-400">{event}</p>
        //         </div>
        //     </div>
        //     <div className="mb-4">
        //         <div className="flex text-yellow-400">
        //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        //             </svg>
        //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        //             </svg>
        //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        //             </svg>
        //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        //             </svg>
        //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        //             </svg>
        //         </div>
        //     </div>
        //     <p className="text-neutral-300">{`"${review}"`}</p>
        // </div>
        <div
            key={index}
            className="group relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden"
        >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <img
                    src={eventImage}
                    alt={role}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/70 to-neutral-800/90"></div>
            </div>

            {/* Content */}
            <div className="relative p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-12 h-12 text-purple-400" />
                </div>

                {/* Profile Section */}
                <div className="flex items-center mb-6">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-400/30">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-1">
                            <Star className="w-4 h-4 text-white" fill="white" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                            {name}
                        </h3>
                        <p className="text-gray-400">{role}</p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                    {[...Array(rating)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                        />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 leading-relaxed">
                    "{quote}"
                </blockquote>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-tr-full"></div>
            </div>
        </div>
    )
}

export default TestimonialCard
