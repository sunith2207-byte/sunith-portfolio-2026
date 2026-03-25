export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter text-gradient">
            Sunith.<span className="text-white">dev</span>
          </span>
          <p className="text-sm text-white/50 text-center md:text-left">
            Building Growth Systems with AI + SEO.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">GitHub</a>
        </div>
        
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Sunith Ramachandra.<br className="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};
