import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqService } from '../data/data';

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
    return (
        <div className="py-20 bg-neutral-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    <FaqAccordion faqs={faqService} />
                </div>
            </div>
        </div>
    )
}

export default FAQ;