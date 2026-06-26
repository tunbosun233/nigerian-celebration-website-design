'use client'

import Image from 'next/image'

export default function Henna() {
  return (
    // Added border-t border-border to create the separation line
    <section id="henna" className="py-20 px-6 bg-background border-t border-border transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section with standardized decorative divider */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Beautiful Henna Designs</h2>
          
          {/* This is the standardized decorative divider */}
          <div className="w-24 h-1 bg-accent mx-auto my-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-8">
              We create stunning henna patterns for your weddings, parties, and special days. 
              Whether you want traditional designs or something modern, we are here to make you look amazing.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Perfect bridal henna',
                'Beautiful traditional patterns',
                'Safe and natural ingredients',
                'Custom designs for any event',
                'Packages for you and your friends',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <span className="text-accent">✔</span>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2347031466733?text=Hi!%20I%20would%20like%20to%20book%20a%20henna%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-foreground text-background font-bold rounded-lg hover:bg-accent transition-colors duration-300"
            >
              Book Your Henna Session
            </a>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-border">
            <Image
              src="/henna-bridal.png"
              alt="Beautiful bridal henna"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}