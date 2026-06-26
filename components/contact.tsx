'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const whatsappNumber = '2347031466733'
  const email = 'oniyidefathiabukola@gmail.com'
  const location = 'Ila Orangun, Osun State'
  const mapsUrl = 'https://www.google.com/maps/search/Ila+Orangun,+Osun+State'

  return (
    // Added border-t border-border to create the separation line
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with standardized decorative divider */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Get in Touch
          </h2>
          {/* Standardized decorative accent divider */}
          <div className="w-24 h-1 bg-accent mx-auto my-6 rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to create something special? Let&apos;s talk about your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Sugarcraft%20Ila%2C%20I%20would%20like%20to%20inquire%20about%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-foreground/70 mb-2">Message us anytime</p>
            <p className="text-accent font-semibold hover:underline">+{whatsappNumber}</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70 mb-2">For inquiries and bookings</p>
            <p className="text-accent font-semibold hover:underline text-sm break-all">{email}</p>
          </a>

          {/* Location */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
            <p className="text-foreground/70 mb-2">Based in</p>
            <p className="text-accent font-semibold hover:underline">{location}</p>
          </a>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Create Magic?</h3>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s bring your celebration dreams to life with our handcrafted creations.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Sugarcraft%20Ila%2C%20I%20would%20like%20to%20book%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>
  )
}