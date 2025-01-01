import React from 'react'
import { NavLink } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { services, testimonials } from '../data/data';
import CTA from '../components/CTA'
import SectionHeader from '../components/SectionHeader'
import TestimonialCard from '../components/TestimonialCard';
import StatisticsSection from '../components/StatisticsSection';
import FAQ from '../components/FAQ';
import MasonryGallery from '../components/MasonryGallery';
import { images } from '../data/data'
import InfiniteScroll from '../components/InfiniteScroll';


function Home() {

    return (
        <div className="min-h-screen bg-neutral-900">


            {/* <!-- Hero Section --> */}
            <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-neutral-900 to-pink-900/20 animate-gradient"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
                </div>

                
                

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 leading-tight">
                        Premium Event Management Services in Bhopal
                    </h1>
                    <p className="text-xl sm:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                        Transform your vision into unforgettable experiences. From corporate events to dream weddings, we create moments that last a lifetime.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <NavLink to="#contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity duration-300">
                            Get Started
                        </NavLink>
                        <NavLink to="#services" className="w-full sm:w-auto px-8 py-4 border border-neutral-700 text-white rounded-full text-lg font-semibold hover:bg-neutral-800/50 transition-all duration-300">
                            View Services
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section id="about_us" className="relative py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* <!-- Background Elements --> */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-900/10 to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-pink-900/10 to-transparent"></div>
                    </div>

                    {/* <!-- Content --> */}
                    <div className="relative">

                        <SectionHeader
                            heading={"Your One Stop Solution"}
                            description={"Welcome to AMAN EVENTS, Bhopal's premier Event Management Company, where we bring your dream events to life with unparalleled elegance and precision."}
                        />

                        {/* <!-- Features Grid --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
                                <div className="text-purple-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Expert Planning</h3>
                                <p className="text-neutral-400">Our experienced team ensures every detail is meticulously planned and executed to perfection.</p>
                            </div>

                            <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
                                <div className="text-pink-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Professional Team</h3>
                                <p className="text-neutral-400">A dedicated team of professionals working together to create your perfect event.</p>
                            </div>

                            <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
                                <div className="text-purple-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Creative Excellence</h3>
                                <p className="text-neutral-400">Innovative ideas and unique concepts to make your event stand out from the rest.</p>
                            </div>
                        </div>

                        {/* <!-- About Image and Text --> */}
                        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <img src="https://amaneventsbhopal.com/wp-content/uploads/2024/05/Frame_5-removebg-preview-1.png" alt="Aman Events Team" className="rounded-2xl w-full" />
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Creating Memorable Experiences Since Our Inception</h3>
                                <p className="text-neutral-400 mb-6">At the heart of our ethos is a passion for creating unforgettable experiences that resonate with our clients' visions and exceed their expectations.</p>

                                <ul className="space-y-4">
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="h-6 w-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Customized Event Solutions
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="h-6 w-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        End-to-End Event Management
                                    </li>
                                    <li className="flex items-center text-neutral-300">
                                        <svg className="h-6 w-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Experienced Event Coordinators
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights section */}
            <section className='relative  bg-neutral-900' >
                <StatisticsSection />
            </section>

            {/* Services Section */}

            <section id="our_services" className="relative py-20 bg-neutral-900">
                {/* <!-- Background Pattern --> */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                    <SectionHeader
                        heading={"Our Premier Services"}
                        description={"rom intimate gatherings to grand celebrations, we provide comprehensive event management solutions tailored to your needs."}
                    />

                    {/* <!-- Services Grid (Bento Grid) --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {
                            services && services?.map((service, idx) => {
                                return <div key={service.id} >
                                    {idx < 3 ?
                                        <ServiceCard
                                            title={service.title}
                                            description={service.description}
                                            icon={service.icon}
                                        /> :
                                        null}
                                </div>
                            })
                        }

                    </div>

                    <CTA title={"View More Services"} />

                </div>
            </section>

            {/* Celebrity Section */}

            {/* <section id="featured_events" className="relative py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        heading={"Featured Events & Celebrities"}
                        description={"Experience the magic of our star-studded events and prestigious collaborations"}
                    />

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {celebrities && celebrities?.map((celebrity, idx) => {
                            return (
                                <CelebrityCard
                                    key={celebrity.id}
                                    name={celebrity.name}
                                    category={celebrity.category}
                                    image={celebrity.image}
                                />
                            )
                        })}

                    </div>

                    <CTA title={"Book Your Event"} />
                </div>
            </section> */}

            <InfiniteScroll />

            {/* gallery section */}
            <MasonryGallery
                column={3}
                images={images} />

            {/* Testimonial */}

            <section id="testimonials" className="relative py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <SectionHeader
                        heading={"What Our Clients Say"}
                        description={" Hear from those who have experienced our exceptional event management services"}
                    />

                    {/* <!-- Testimonials Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {
                            testimonials && testimonials?.map((testimonial, idx) => {
                                return (
                                    <TestimonialCard
                                        key={testimonial.id}
                                        name={testimonial.name}
                                        event={testimonial.event}
                                        review={testimonial.review}
                                        image={testimonial.image}
                                    />
                                )
                            })
                        }

                    </div>

                </div>
            </section>

            {/* FAQ */}
            <FAQ />

        </div>
    )
}

export default Home
