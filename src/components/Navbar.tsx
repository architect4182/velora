import { ShoppingBag } from 'lucide-react';
import type { Theme } from '../data/products';

interface NavbarProps {
  currentTheme: Theme;
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ currentTheme, cartCount, onCartClick }: NavbarProps) {
  const navItems: { id: Theme; label: string }[] = [
    { id: 'white', label: 'White' },
    { id: 'dark', label: 'Dark' },
    { id: 'silk', label: 'Silk' },
    { id: 'pista', label: 'Pista' },
  ];

  const isLightText = currentTheme === 'dark' || currentTheme === 'silk' || currentTheme === 'about';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-transparent transition-colors duration-300 ${
        isLightText ? 'text-white' : 'text-[#2A1810]'
      }`}
    >
      <div className="font-serif font-bold text-xl md:text-2xl tracking-[0.2em] uppercase">
        VELORA
      </div>
      <div className="hidden md:flex gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase items-center">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-5 py-2 rounded-full transition-all ${
              currentTheme === item.id
                ? 'bg-white shadow-sm text-[#2A1810]'
                : `hover:bg-white/20 ${isLightText ? 'text-white' : 'text-[#2A1810]'}`
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <a 
          href="#about"
          className={`hidden md:block text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${
            isLightText ? 'text-white hover:opacity-70' : 'text-[#2A1810] hover:opacity-70'
          }`}
        >
          About
        </a>
        <button 
          onClick={onCartClick}
          className={`relative p-2 rounded-full transition-colors ${
            isLightText ? 'text-white hover:bg-white/20' : 'text-[#2A1810] hover:bg-[#2A1810]/10'
          }`}
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-[#2A1810] text-white text-[9px] font-bold flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        <div className="md:hidden ml-2 cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isLightText ? 'text-white' : 'text-[#2A1810]'}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>
    </nav>
  );
}
