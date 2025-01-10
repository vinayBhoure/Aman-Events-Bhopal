import React from 'react';
import { Users, Award, Camera, Heart, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section className='relative pd-20 bg-neutral-900'>
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
        <section className='relative max-w-7xl mx-auto py-20'>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Creating Magical Experiences Since 2010</h2>
                <p className="text-lg text-gray-600 mb-8">We are passionate about turning your dreams into reality. Our team of expert event planners brings creativity, precision, and dedication to every project.</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-purple-600" />
                    <span className="text-gray-700">Expert Team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-purple-600" />
                    <span className="text-gray-700">Award Winning</span>
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
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Expert Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Event Director",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Michael Chen",
                  role: "Creative Head",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Emma Williams",
                  role: "Operations Manager",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-purple-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
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
                <div key={index} className="text-center p-6">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logo Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">Trusted By Leading Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-gray-400">Logo {index + 1}</span>
                  </div>
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