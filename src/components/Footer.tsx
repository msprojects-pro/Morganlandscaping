export default function Footer() {
  return (
    <footer className="py-16 bg-primary-dark text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-light flex items-center justify-center text-white font-bold text-lg">M</div>
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white block">Morgan Landscaping</span>
        </div>
        
        <p className="text-[9px] uppercase tracking-widest text-white/40 max-w-sm text-center">
          © {new Date().getFullYear()} Morgan Landscaping. Professional Garden & Outdoor Services in Birmingham and across the UK.
        </p>
        
        <div className="flex gap-10">
          {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[9px] uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
