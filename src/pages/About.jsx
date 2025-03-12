import React from 'react';
import { Users, Award, Camera, Heart, ChevronRight } from 'lucide-react';
import SEO from '../seo/SEO';
import { aboutPageSeoProps } from '../seo/seoProps';

const About = () => {


  const teamMember = {
    name: "Sarah Johnson",
    role: "Event Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Sarah brings over a decade of experience in event management, specializing in luxury corporate events and high-profile celebrations. Her attention to detail and innovative approach has earned her recognition in the industry."
  };

  return (
    <section className='relative pd-20 bg-neutral-900'>
      <SEO {...aboutPageSeoProps} />
      <div className="">
        {/* Header Section */}

        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-neutral-900 to-pink-900/20 animate-gradient"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 leading-tight">
              Crafting Unforgettable Moments
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              With over a decade of experience, we transform your vision into extraordinary events.
            </p>

          </div>
        </div>


        {/* About Section */}
        <section className='relative py-20'>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-900/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-pink-900/10 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-neutral-800 rounded-2xl relative">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">Creating Magical Experiences Since 2010</h2>
                  <p className="text-lg text-white mb-8">We are passionate about turning your dreams into reality. Our team of expert event planners brings creativity, precision, and dedication to every project.</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Users className="w-8 h-8 text-purple-600" />
                      <span className="text-gray-400">Expert Team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8 text-purple-600" />
                      <span className="text-gray-400">Award Winning</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Event Planning"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Team Section */}
        <section className='relative py-20'>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-900/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-pink-900/10 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-12 bg-neutral-800 rounded-2xl">
            <div className="container mx-auto px-4">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12">
                Meet Our Expert Team
              </h2>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch max-w-5xl mx-auto">
                {/* Image Section */}
                <div className="w-full md:w-2/5 px-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg transform rotate-6 group-hover:rotate-4 transition-transform duration-300"></div>
                    <img
                      src={teamMember.image}
                      alt={teamMember.name}
                      className="relative w-full h-[400px] object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 md:pl-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      {teamMember.name}
                    </h3>
                    <p className="text-lg font-medium text-purple-300">
                      {teamMember.role}
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <p className="text-gray-300 leading-relaxed">
                      {teamMember.description}
                    </p>
                    <div className="pt-4">
                      <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors duration-300">
                        Contact Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Benefits Section */}
        <div className="py-20" >
          <div className="container mx-auto px-4">
            <h2 className="text-center py-4 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-12 h-12 text-purple-600" />,
                  title: "Passionate Team",
                  description: "Dedicated professionals who love what they do"
                },
                {
                  icon: <Camera className="w-12 h-12 text-purple-600" />,
                  title: "Attention to Detail",
                  description: "Every small detail is carefully planned and executed"
                },
                {
                  icon: <Award className="w-12 h-12 text-purple-600" />,
                  title: "Award Winning",
                  description: "Recognized for excellence in event management"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800/70 transition-all duration-300">
                  <div className="mb-4 flex justify-center ">{benefit.icon}</div>
                  <h3 className="ext-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-neutral-400 mb-4">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <div className="py-20 bg-purple-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-purple-200 mb-8">Let's work together to bring your vision to life</p>
            <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;