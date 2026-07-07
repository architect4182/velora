import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ChocolateSection from './components/ChocolateSection';
import ParticleSystem from './components/ParticleSystem';
import CartSidebar from './components/CartSidebar';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

import { products, type Product, type Theme } from './data/products';

const gradients: Record<Theme, string> = {
  white: 'radial-gradient(circle at center, #FFF8EC 0%, #F4E8D0 45%, #B89D6A 100%)',
  dark: 'radial-gradient(circle at center, #6B4423 0%, #2A1810 50%, #080403 100%)',
  silk: 'radial-gradient(circle at center, #3B82F6 0%, #172554 45%, #020617 100%)',
  pista: 'radial-gradient(circle at center, #CDE8B5 0%, #567A36 45%, #13200B 100%)',
  about: '#2A1810',
};

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('white');
  const [cartItems, setCartItems] = useState<{product: Product, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prev => {
      if (quantity <= 0) return prev.filter(item => item.product.id !== productId);
      return prev.map(item => item.product.id === productId ? { ...item, quantity } : item);
    });
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory">
      {/* Global Background Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[-1]"
          style={{ background: gradients[currentTheme] }}
        />
      </AnimatePresence>

      <ParticleSystem currentTheme={currentTheme} />
      
      <Navbar 
        currentTheme={currentTheme} 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="w-full">
        {products.map((item) => (
          <ChocolateSection
            key={item.id}
            product={item}
            setCurrentTheme={setCurrentTheme}
            onAddToCart={() => addToCart(item)}
          />
        ))}
        <AboutSection setCurrentTheme={setCurrentTheme} />
        <Footer />
      </main>

      <AnimatePresence>
        {isCartOpen && (
          <CartSidebar 
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            updateQuantity={updateQuantity}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
