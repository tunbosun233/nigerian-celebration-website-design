'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  image: string
  title: string
  onClose: () => void
}

export default function ImageModal({ isOpen, image, title, onClose }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-background rounded-xl overflow-hidden shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-primary/80 hover:bg-primary text-foreground-light rounded-lg transition-all duration-300"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full max-h-[80vh]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <div className="p-6 bg-background border-t border-border">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h3>
        </div>
      </div>
    </div>
  )
}
