import React from 'react';
import ScrollContainer from './container/ScrollContainer';
import SectionHeader from './SectionHeader';
import CTA from './CTA';
import { celebrities } from '../data/data';


const InfiniteScroll = () => {
    return (
        <section className="relative py-20 bg-neutral-900">
            <div className="container mx-auto px-4 mb-8">
                <SectionHeader
                    heading={"Featured Events & Celebrities"}
                    description={"Experience the magic of our star-studded events and prestigious collaborations"}
                />
            </div>

            <ScrollContainer speed="slow">
                {celebrities.map((celebrity, index) => (
                    <div
                        key={index}
                        className="inline-block mx-4 w-[300px] overflow-hidden rounded-lg"
                    >
                        <div className="relative group">
                            <img
                                src={celebrity.image}
                                alt={celebrity.name}
                                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white font-semibold">{celebrity.name}</p>
                                    <p className='text-white text-sm'>{celebrity.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ScrollContainer>
        </section>
    );
};

export default InfiniteScroll;