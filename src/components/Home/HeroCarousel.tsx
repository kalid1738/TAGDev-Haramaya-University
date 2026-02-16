import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroCarousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      description: 'TAGDev 2.0: A 10-year initiative transforming agriculture and empowering youth across Africa.',
      buttonText: 'Read More',
      buttonLink: '/about'
    },
    {
      id: 2,
      description: 'Creating equal work opportunities through skill development and climate-smart technologies.',
      buttonText: 'Read More',
      buttonLink: '/programs'
    },
    {
      id: 3,
      description: 'Collaborating with 12 African universities to build capacity for agricultural innovation.',
      buttonText: 'Read More',
      buttonLink: '/partners'
    },
    {
      id: 4,
      description: 'Developing 26 climate-smart technologies to enhance resilience for smallholder farmers.',
      buttonText: 'Read More',
      buttonLink: '/impact'
    },
    {
      id: 5,
      description: 'Implementing ASEC Project to equip youth and build climate-resilient agrifood systems.',
      buttonText: 'Read More',
      buttonLink: '/asec'
    }
  ];

  
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0]
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigateSlide = useCallback(
    (direction: 'right' | 'left') => {
      if (isAnimating) return;

      setIsAnimating(true);
      const container = containerRef.current;
      if (!container) return;

      const nextSlide =
        direction === 'right'
          ? currentSlide + 1
          : currentSlide - 1;

      container.style.transition = 'transform 700ms ease-in-out';
      container.style.transform = `translateX(-${nextSlide * 100}%)`;

      setTimeout(() => {
      
        if (nextSlide === extendedSlides.length - 1) {
          container.style.transition = 'none';
          container.style.transform = `translateX(-100%)`;
          setCurrentSlide(1);
        } else if (nextSlide === 0) {
          container.style.transition = 'none';
          container.style.transform = `translateX(-${(extendedSlides.length - 2) * 100}%)`;
          setCurrentSlide(extendedSlides.length - 2);
        } else {
          setCurrentSlide(nextSlide);
        }

        setIsAnimating(false);
      }, 700);
    },
    [currentSlide, isAnimating, extendedSlides.length]
  );

  const goToSlide = (realSlideIndex: number) => {
    if (isAnimating || realSlideIndex === currentSlide - 1) return;

    setIsAnimating(true);
    const container = containerRef.current;
    if (!container) return;

    const extendedIndex = realSlideIndex + 1;
    
    container.style.transition = 'transform 700ms ease-in-out';
    container.style.transform = `translateX(-${extendedIndex * 100}%)`;

    setTimeout(() => {
      setCurrentSlide(extendedIndex);
      setIsAnimating(false);
    }, 700);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      navigateSlide('right');
    }, 5000); 

    return () => clearInterval(interval);
  }, [navigateSlide]);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[600px] overflow-hidden">
      
      <div
        ref={containerRef}
        className="flex w-full h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={`slide-${index}`}
            className="relative flex-shrink-0 w-full h-full"
            style={{ width: '100%' }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={`/images/carousel/hero-${slide.id}.jpg`}
                alt={`TAGDev 2.0 Slide ${slide.id}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="absolute inset-0 bg-gradient-to-br from-[#155a90] to-[#0f3d66]"></div>
                  `;
                }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent"></div>

            <div className="relative z-20 h-full flex items-center">
              <div className="container-custom">
                <div className="max-w-2xl">
                  <div className="mb-6">
                    <p
                      className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-bold"
                      style={{
                        color: '#f8921e',
                        fontFamily: "'Poppins', sans-serif",
                        textShadow:
                          '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      {slide.description}
                    </p>
                  </div>

                  <Link
                    to={slide.buttonLink}
                    className="bg-[#155a90] hover:scale-[1.03] text-[#f8921e] px-8 py-3 font-bold transition-transform duration-300 inline-flex items-center text-lg"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <button
        onClick={() => navigateSlide('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 z-30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        disabled={isAnimating}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => navigateSlide('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 z-30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        disabled={isAnimating}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index + 1 === currentSlide
                ? 'bg-[#f8921e] scale-125'
                : 'bg-white/80 hover:bg-white'
            }`}
            disabled={isAnimating}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;