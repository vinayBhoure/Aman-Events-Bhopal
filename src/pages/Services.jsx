import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/data';
import { packages } from '../data/data';
import { Star } from 'lucide-react'
import PriceCard from '../components/PriceCard';
import FAQ from '../components/FAQ';
import { faqService, testimonials } from '../data/data';
import SectionHeader from '../components/SectionHeader'
import TestimonialCard from '../components/TestimonialCard';


function Services() {

    const faqs = [

    ];

    return (
        <div>
            <section id="our_services" className="relative py-20 bg-neutral-900">
                {/* <!-- Background Pattern --> */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* <!-- Section Header --> */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                            Our Premier Services
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                            From intimate gatherings to grand celebrations, we provide comprehensive event management solutions tailored to your needs.
                        </p>
                    </div>

                    {/* <!-- Services Grid (Bento Grid) --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {
                            services && services?.map((service, idx) => {
                                return <div key={service.id} >

                                    <ServiceCard
                                        title={service.title}
                                        description={service.description}
                                        icon={service.icon}
                                    />
                                </div>
                            })
                        }

                    </div>

                </div>
            </section>

            <div className='bg-neutral-900 relative py-20'>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-neutral-800 rounded-2xl">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">Why Our Services Stand Out</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Personalized Planning",
                                            description: "Tailored solutions for your specific needs"
                                        },
                                        {
                                            title: "End-to-End Management",
                                            description: "Complete event handling from concept to execution"
                                        },
                                        {
                                            title: "Professional Team",
                                            description: "Experienced staff dedicated to your success"
                                        }
                                    ].map((feature, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <Star className="w-6 h-6 text-purple-300" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-purple-300">{feature.title}</h3>
                                                <p className="text-white">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Event Features"
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* pricing section */}
            <section id="pricing_packages" className="relative py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* <!-- Section Header --> */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                            Event Packages
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your event needs
                        </p>
                    </div>

                    {/* <!-- Pricing Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {packages && packages?.map((p, idx) => {
                            return (
                                <PriceCard
                                    key={idx}
                                    title={p.title}
                                    price={p.price}
                                    features={p.features}
                                    cta={p.cta}
                                    badge={p.badge}
                                />
                            )
                        })}

                    </div>

                    {/* <!-- Note --> */}
                    <div className="mt-12 text-center text-neutral-400">
                        <p>* All packages can be customized according to your specific needs. Contact us for detailed pricing.</p>
                    </div>
                </div>
            </section>

            {/* Testimonial section */}
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

                    {/* <!-- Trust Indicators --> */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">500+</div>
                            <p className="text-neutral-400">Events Completed</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">50+</div>
                            <p className="text-neutral-400">Celebrity Events</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">100%</div>
                            <p className="text-neutral-400">Satisfaction Rate</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">24/7</div>
                            <p className="text-neutral-400">Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* faq */}
            <FAQ />
        </div>
    )
}

export default Services
