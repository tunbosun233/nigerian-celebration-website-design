'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-background transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground tracking-widest uppercase">
            About
          </h2>
          {/* Universal Theme-Aware Divider */}
          <div className="w-24 h-1 bg-accent mx-auto my-6 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5 relative h-[500px] w-full overflow-hidden shadow-2xl">
            <Image
              src="/founder-oniyide.png"
              alt="Oniyide Fathia, Founder of Sugarcraft Ila"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          <div className="md:col-span-7 flex flex-col space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground leading-tight">
              I'm Oniyide Fathia, founder of Sugarcraft Ila.
            </h3>

            <div className="space-y-5 text-lg text-foreground/80 leading-relaxed font-light max-w-2xl">
              <p>What started as a simple dream-to create beautiful, delicious cakes-has blossomed into something far greater.</p>
              <p>I believe celebrations should be more than just moments - they should be memories.</p>
              <p>My mission is to uphold the highest standard of excellence in every detail.</p>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://wa.link/42kzs2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 font-medium tracking-widest uppercase text-sm"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}