import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Theme } from '../data/products';

interface AboutSectionProps {
  setCurrentTheme: (theme: Theme) => void;
}

export default function AboutSection({ setCurrentTheme }: AboutSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // When this section is in view, we can set the theme to 'about' so the navbar adapts gracefully without highlighting a chocolate tab
  useEffect(() => {
    if (inView) {
      setCurrentTheme('about');
    }
  }, [inView, setCurrentTheme]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-[100dvh] snap-start bg-[#2A1810] text-[#F4EAD8] flex items-center justify-center py-24 px-6 md:px-12 z-10"
    >
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side: Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="text-sm font-semibold tracking-widest opacity-60 mb-8 uppercase">
            The Velora Standard
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
            Mastery In Every Batch.
          </h2>
          <p className="font-light text-lg md:text-xl leading-relaxed opacity-80 max-w-md">
            We source our cacao directly from generational farmers in Madagascar and Ecuador. By controlling the entire process from bean to bar, we unlock extraordinary flavor profiles that mass production simply cannot replicate.
          </p>
        </motion.div>

        {/* Right Side: Grid of Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
        >
          {/* Detail 1 */}
          <div>
            <div className="text-4xl font-serif mb-4 opacity-50">01</div>
            <h3 className="text-lg font-bold tracking-widest uppercase mb-3">Sustainable</h3>
            <p className="font-light opacity-70 text-sm leading-relaxed">
              We pay our farmers significantly above market rates, ensuring ethical practices and the preservation of heirloom cacao varieties.
            </p>
          </div>

          {/* Detail 2 */}
          <div>
            <div className="text-4xl font-serif mb-4 opacity-50">02</div>
            <h3 className="text-lg font-bold tracking-widest uppercase mb-3">Artisanal</h3>
            <p className="font-light opacity-70 text-sm leading-relaxed">
              Each bar is tempered, poured, and wrapped by hand in our Parisian atelier, resulting in a flawless snap and velvety melt.
            </p>
          </div>

          {/* Detail 3 */}
          <div>
            <div className="text-4xl font-serif mb-4 opacity-50">03</div>
            <h3 className="text-lg font-bold tracking-widest uppercase mb-3">Pure</h3>
            <p className="font-light opacity-70 text-sm leading-relaxed">
              No artificial emulsifiers. No synthetic vanilla. Just pure, unadulterated ingredients that let the natural terroir shine.
            </p>
          </div>

          {/* Detail 4 */}
          <div>
            <div className="text-4xl font-serif mb-4 opacity-50">04</div>
            <h3 className="text-lg font-bold tracking-widest uppercase mb-3">Awarded</h3>
            <p className="font-light opacity-70 text-sm leading-relaxed">
              Recognized globally by the Academy of Chocolate for outstanding innovation in dark and botanical milk blends.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
