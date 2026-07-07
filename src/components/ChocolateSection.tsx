import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import type { Product, Theme } from '../data/products';

interface ChocolateSectionProps {
  product: Product;
  setCurrentTheme: (theme: Theme) => void;
  onAddToCart: () => void;
}

export default function ChocolateSection({
  product,
  setCurrentTheme,
  onAddToCart,
}: ChocolateSectionProps) {
  const { type, subtitle, description, imageUrl, watermarkText, indexLabel, price, weight, ingredients } = product;

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCurrentTheme(type);
    }
  }, [inView, setCurrentTheme, type]);

  const isLightText = type === 'dark' || type === 'silk';
  const textColor = isLightText ? 'text-white' : 'text-[#2A1810]';

  return (
    <section
      id={type}
      ref={ref}
      className={`relative w-full h-[100dvh] snap-start overflow-hidden ${textColor} flex items-center justify-center`}
    >
      {/* Layer 1: Massive Watermark Background Text */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 0.05, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h1 className={`font-serif font-black text-[40vw] md:text-[30vw] leading-none tracking-[-0.08em] uppercase text-center whitespace-nowrap ${isLightText ? 'text-white' : 'text-black'
          }`}>
          {watermarkText}
        </h1>
      </motion.div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 lg:gap-0 max-w-[1400px] w-full h-full mx-auto px-6 md:px-12 pt-20 pb-6 md:pt-24 md:pb-12 lg:py-0">

        {/* Left Side: Product Image Wrapper */}
        <div 
          className="w-full md:flex-1 flex items-center justify-center md:justify-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="w-full flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex items-center justify-center"
            >
              <img
                src={imageUrl}
                alt={`${type} chocolate`}
                className="w-[50%] md:w-full max-w-md h-[30vh] md:h-[55vh] lg:h-[75vh] object-cover rounded-[1.5rem] md:rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Typography Content Block */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="text-xs md:text-sm font-semibold tracking-widest opacity-60 mb-6 uppercase">
            {indexLabel}
          </div>
          <h2 className="font-serif text-4xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1] drop-shadow-lg whitespace-pre-line mb-4">
            {subtitle}
          </h2>
          <p className="font-light text-sm md:text-base leading-relaxed drop-shadow-md whitespace-pre-line max-w-md opacity-80 mb-6">
            {description}
          </p>
          
          <div className="w-full max-w-md flex flex-col gap-4 border-t border-current pt-4 opacity-90">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-1 opacity-70">Weight</div>
                <div className="text-base font-light">{weight}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold tracking-widest uppercase mb-1 opacity-70">Price</div>
                <div className="text-2xl font-serif">${price.toFixed(2)}</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-2 opacity-70">Tasting Notes</div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {ingredients.map((ing, idx) => (
                  <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 border border-current rounded-full">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <button 
              onClick={onAddToCart}
              className={`mt-2 w-full py-3 px-8 rounded-full text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${
                isLightText 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'bg-[#2A1810] text-white hover:bg-[#2A1810]/90'
              }`}
            >
              Add to Cart
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
