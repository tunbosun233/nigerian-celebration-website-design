'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  { title: 'Custom Cakes', image: '/cakes.png' },
  { title: 'Catering Services', image: '/catering.png' },
  { title: 'Henna Artistry', image: '/henna.png' },
  { title: 'Surprise Gift Boxes', image: '/giftbox.png' },
  { title: 'Event Decoration', image: '/decor.png' },
  // Doubled for seamless infinite looping
  { title: 'Custom Cakes', image: '/cakes.png' },
  { title: 'Catering Services', image: '/catering.png' },
  { title: 'Henna Artistry', image: '/henna.png' },
  { title: 'Surprise Gift Boxes', image: '/giftbox.png' },
  { title: 'Event Decoration', image: '/decor.png' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-background border-t border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-accent mx-auto my-6 rounded-full"></div>
        <p className="text-foreground/70 max-w-lg mx-auto">
          We bring your vision to life through professional baking, catering, artistic henna designs, and beautiful event setups.
        </p>
      </div>

      {/* Marquee Animation Wrapper */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, // Increased duration for a smooth flow with more items
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-72 rounded-xl border border-border bg-card overflow-hidden hover:border-accent transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}