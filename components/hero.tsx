'use client'

export default function Hero() {
  const handleWhatsApp = () => {
    // Linked to the provided brand WhatsApp link
    const whatsappUrl = 'https://wa.link/42kzs2'
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Brand-consistent Gradient Overlay - Using Dark Mocha (#2C1A0E) */}
      <div className="absolute inset-0 bg-[#2C1A0E]/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-[#F5F0E8] mb-6 tracking-tight">
          Sugarcraft Ila
        </h1>
        <p className="text-xl sm:text-2xl text-[#E8C97A] mb-12 font-light tracking-wide">
          Crafting Cakes & Pastries With Love
        </p>

        {/* CTA Buttons - Premium Styled */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-[#C9A040] hover:bg-[#E8C97A] text-[#2C1A0E] font-medium transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Order Now
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-[#F5F0E8] text-[#F5F0E8] hover:bg-[#F5F0E8] hover:text-[#2C1A0E] transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  )
}