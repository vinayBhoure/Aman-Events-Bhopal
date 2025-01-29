import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '../data/data';

const FaqAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                    <button
                        className="w-full py-4 flex items-center justify-between text-left"
                        onClick={() => toggleFaq(index)}
                    >
                        <span className="text-lg font-semibold text-neutral-400 hover:text-white transition-colors duration-300">{faq.question}</span>
                        {openIndex === index ? (
                            <Minus className="w-6 h-6 text-purple-600" />
                        ) : (
                            <Plus className="w-6 h-6 text-purple-600" />
                        )}
                    </button>
                    {openIndex === index && (
                        <div className="pb-4 text-purple-600 animate-fadeIn">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-neutral-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <HelpCircle className="w-16 h-16 text-purple-400/20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Find answers to common questions about our event management services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:bg-neutral-800/70"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{faq.icon}</span>
                  <span className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div className="ml-4">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-purple-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-purple-400" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-tr-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default FAQ;