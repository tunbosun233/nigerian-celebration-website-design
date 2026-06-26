'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Can you deliver anywhere in Nigeria?',
    answer: 'Yes! We deliver across Nigeria to ensure your cakes and surprise packages reach you in perfect condition. Just let us know your location when you place your order, and we will handle the rest.',
  },
  {
    question: 'How do I place an order?',
    answer: 'It is simple! Just click the "Book Now" or "Order Now" button on any item. It will take you straight to my WhatsApp, where we can chat about exactly what you need.',
  },
  {
    question: 'Can I request a custom design?',
    answer: 'Yes, I love custom orders! Whether it is a specific cake idea, a surprise setup, or a henna pattern you saw online, just send me a picture or describe your vision, and we will bring it to life.',
  },
  {
    question: 'Do you cater for events?',
    answer: 'Yes, we do. From small birthday parties to larger celebrations, we offer catering, surprise setups, and henna services. Let’s talk about your event details!',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'The earlier, the better-especially for weekends and weddings. If you have an event coming up, please reach out as soon as you have a date so I can secure a spot for you.',
  },
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    // Border-t border-border creates the separation line from the section above
    <section className="py-20 px-6 bg-background border-t border-border transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section with standardized decorative divider */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Questions? I’ve got answers
          </h2>
          
          {/* Standardized decorative accent divider */}
          <div className="w-24 h-1 bg-accent mx-auto my-6 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl border border-border overflow-hidden transition-colors duration-500"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-foreground font-bold"
              >
                {faq.question}
                <ChevronDown 
                  className={`transition-transform duration-300 ${expandedIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>

              {expandedIndex === idx && (
                <div className="px-6 py-4 bg-card text-foreground/80 border-t border-border">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}