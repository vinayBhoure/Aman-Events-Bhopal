import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import CTA from './CTA';
import { insights } from '../data/data';


const StatisticsSection = () => {
   
    return (
        <section className="max-w-7xl mx-auto py-16 ">
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-4xl text-center text-purple-400 mb-16 leading-tight">
                    Local Insights.
                    <span className='font-bold '> Global scale.</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {insights.map((stat, index) => (
                        <div key={index} className="text-center hover:border hover:border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
                            <div className="mb-4 flex justify-center">{stat.icon}</div>
                            <AnimatedCounter
                                end={stat.value}
                                duration={4000}
                                suffix={stat.suffix}
                            />
                            <p className="mt-2 text-neutral-400">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <CTA title={"Book an event"} link={"/contact"} />
            </div>
        </section>
    );
};

export default StatisticsSection;