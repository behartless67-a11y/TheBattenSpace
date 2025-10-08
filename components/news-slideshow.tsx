'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { newsItems } from '@/data/news';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function NewsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const currentNews = newsItems[currentIndex];

  return (
    <div className="relative h-full flex gap-6">
      {/* Text Content */}
      <div className="w-1/2 flex flex-col justify-between py-4">
        <div>
          <div className="mb-4">
            <span className="text-sm font-semibold bg-accent text-white px-3 py-1 rounded-full">
              {formatDate(currentNews.date)}
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-4 leading-tight text-primary">
            {currentNews.title}
          </h3>
          <p className="text-lg leading-relaxed text-foreground">
            {currentNews.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between mt-8">
          <Link
            href={currentNews.link}
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
          >
            Read More
            <ChevronRight className="w-5 h-5" />
          </Link>
          {/* Dots Navigation */}
          <div className="flex gap-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        className="w-1/2 relative rounded-lg overflow-hidden border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)]"
        style={{
          backgroundImage: `url(${currentNews.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
