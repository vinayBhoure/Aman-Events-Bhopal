import React from 'react'

function ContactForm() {
    return (
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8">
            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity duration-300">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm
