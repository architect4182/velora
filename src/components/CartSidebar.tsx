import { motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import type { Product } from '../data/products';

interface CartSidebarProps {
  onClose: () => void;
  cartItems: { product: Product; quantity: number }[];
  updateQuantity: (productId: string, quantity: number) => void;
}

export default function CartSidebar({ onClose, cartItems, updateQuantity }: CartSidebarProps) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-[#F4EAD8] text-[#2A1810] z-50 shadow-2xl flex flex-col"
      >
        <div className="flex justify-between items-center p-6 border-b border-[#2A1810]/10">
          <h2 className="font-serif font-bold text-2xl tracking-widest uppercase flex items-center gap-3">
            <ShoppingBag /> Your Cart
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-[#2A1810]/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-60">
              <ShoppingBag size={48} className="mb-4 opacity-50" />
              <p className="font-serif text-xl mb-2">Your cart is empty.</p>
              <p className="text-sm">Discover our collections to begin.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-center bg-white/50 p-3 rounded-2xl">
                <img 
                  src={item.product.imageUrl} 
                  alt={item.product.subtitle} 
                  className="w-20 h-20 object-cover rounded-xl shadow-sm"
                />
                <div className="flex-1">
                  <div className="text-xs font-bold tracking-widest uppercase opacity-60 mb-1">
                    {item.product.watermarkText}
                  </div>
                  <div className="font-serif font-bold leading-tight mb-2">
                    {item.product.subtitle.split('\n')[0]}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold">${item.product.price.toFixed(2)}</div>
                    <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-full border border-[#2A1810]/10">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-[#2A1810]/5 rounded-full"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-[#2A1810]/5 rounded-full"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-[#2A1810]/10">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold tracking-widest uppercase opacity-60">Subtotal</span>
              <span className="font-serif font-bold text-3xl">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 bg-[#2A1810] text-white rounded-full font-bold tracking-widest uppercase hover:bg-black transition-colors">
              Checkout Securely
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}
