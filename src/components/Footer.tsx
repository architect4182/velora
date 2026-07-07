export default function Footer() {
  return (
    <footer className="w-full min-h-[60vh] snap-start bg-[#080403] text-[#F4EAD8] flex flex-col justify-between px-6 py-12 md:px-12 md:py-20 relative z-20">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="font-serif font-bold text-3xl md:text-5xl tracking-[0.2em] uppercase mb-6">
            VELORA
          </div>
          <p className="font-light opacity-60 max-w-sm mb-8 leading-relaxed">
            Crafting the world's most luxurious artisanal chocolate experiences, sourcing only the finest sustainable cacao from master growers.
          </p>
          <div className="flex gap-6">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest text-xs font-bold">Instagram</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest text-xs font-bold">Pinterest</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest text-xs font-bold">Twitter</a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-bold tracking-widest uppercase text-sm mb-6 opacity-80">Explore</h4>
          <ul className="flex flex-col gap-4 font-light opacity-60">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Our Collections</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">The VELORA Story</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Sustainability</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Journal</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-bold tracking-widest uppercase text-sm mb-6 opacity-80">Join The Club</h4>
          <p className="font-light opacity-60 text-sm mb-4">
            Subscribe for exclusive releases and early access to limited collections.
          </p>
          <div className="flex border-b border-[#F4EAD8]/30 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-none outline-none w-full text-sm font-light placeholder:text-[#F4EAD8]/30"
            />
            <button className="uppercase tracking-widest text-xs font-bold hover:opacity-70 transition-opacity">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto mt-20 md:mt-32 pt-8 border-t border-[#F4EAD8]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light opacity-40">
        <div>&copy; {new Date().getFullYear()} VELORA CHOCOLATIER. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
