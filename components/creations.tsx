'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const shopItems = [
  { title: 'Luxury Wedding Cake', category: 'Cakes', src: '/cake-1.png' },
  { title: 'Birthday Cake', category: 'Cakes', src: '/cake-2.png' },
  { title: 'Cupcake Collection', category: 'Cakes', src: '/cupcake-1.png' },
  { title: 'Gourmet Catering Set', category: 'Catering', src: '/catering-1.png' },
  { title: 'Appetizer Platter', category: 'Catering', src: '/catering-2.png' },
  { title: 'Birthday Surprise Box', category: 'Surprises', src: '/surprise-1.png' },
  { title: 'Full Surprise Setup', category: 'Surprises', src: '/surprise-2.png' },
  { title: 'Custom Surprise', category: 'Surprises', src: '/surprise-3.png' },
]

export default function Shop() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleOrder = (title: string) => {
    const message = `Hi! I'm interested in ordering: ${title}`
    window.open(`https://wa.me/2347031466733?text=${encodeURIComponent(message)}`, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="shop" className="py-20 px-6 bg-background border-t border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Shop</h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6 rounded-full"></div>
          <p className="text-foreground/70">
            Explore our full collection of cakes, catering services, and surprise packages.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {shopItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5 }} 
              className="bg-card rounded-xl shadow-sm overflow-hidden border border-border transition-colors duration-500 group"
            >
              {/* Clickable Image Thumbnail */}
              <div 
                className="relative h-64 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-5 text-center">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="text-lg font-bold text-foreground my-2">{item.title}</h3>
                <button 
                  onClick={() => handleOrder(item.title)}
                  className="mt-3 w-full py-2 bg-foreground text-background text-sm font-bold uppercase hover:bg-accent transition-colors duration-300"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
            >
              <Image 
                src={selectedImage} 
                alt="Enlarged View" 
                width={1200} 
                height={800} 
                className="rounded-lg shadow-2xl w-full h-auto" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}