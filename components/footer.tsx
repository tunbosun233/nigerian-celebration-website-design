'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappNumber = '2347031466733'
  const email = 'oniyidefathiabukola@gmail.com'

  return (
    <footer className="bg-background text-foreground border-t border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-up">
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg text-foreground">Sugarcraft Ila</span>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Handcrafted luxury cakes and artisanal henna designs for your most celebrated moments.
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-up">
            <h4 className="font-bold text-lg mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground/70 hover:text-accent transition-colors duration-300">Wedding Cakes</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground/70 hover:text-accent transition-colors duration-300">Desserts</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground/70 hover:text-accent transition-colors duration-300">Henna Design</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground/70 hover:text-accent transition-colors duration-300">Contact</button></li>
            </ul>
          </div>

          {/* Information */}
          <div className="animate-fade-up">
            <h4 className="font-bold text-lg mb-4 text-foreground">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-up">
            <h4 className="font-bold text-lg mb-4 text-foreground">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors duration-300">WhatsApp</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <a href={`mailto:${email}`} className="text-foreground/70 hover:text-accent transition-colors duration-300">Email</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground/70">Ila Orangun, Osun State</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-12 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-foreground/70">
            <p>&copy; {currentYear} Sugarcraft Ila. All rights reserved.</p>
            <a 
              href="https://www.linkedin.com/in/abdul-qoyyum-761599266/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="italic font-light hover:text-accent transition-colors duration-300"
            >
              Built By Abdul Qoyyum
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}