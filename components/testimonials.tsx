'use client'

const testimonials = [
  {
    name: 'Rahmah',
    text: 'She is incredibly talented. Just share your design ideas, and she will bring them to life. Her cakes are equally amazing-fresh, delicious, and high quality.',
    rating: 5,
  },
  {
    name: 'Aliyah',
    text: 'A truly professional experience. From the event setup and cakes to the henna artistry, everything was handled perfectly and stress-free.',
    rating: 5,
  },
  {
    name: 'Ayomide',
    text: 'Your work is outstanding. I am absolutely delighted with my order and will definitely be coming back for more.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    // Added border-t border-border for the clean separation line
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with standardized decorative divider */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Loved by Our Clients
          </h2>
          
          {/* This is the standardized decorative divider */}
          <div className="w-24 h-1 bg-accent mx-auto my-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-border bg-card shadow-sm hover:border-accent transition-all duration-300"
            >
              <div className="flex gap-1 mb-4 text-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mb-6 italic text-foreground/80 leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-bold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}