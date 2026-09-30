import { useEffect, useState } from 'react';
import { MESSAGES, waLink } from '../data';

const links = [['home', 'Home'], ['services', 'Services'], ['how-it-works', 'How It Works'], ['order', 'Order'], ['faq', 'FAQ'], ['contact', 'Contact']];

function useScroll() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const update = () => setScroll(window.scrollY);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return scroll;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const scroll = useScroll();
  useEffect(() => {
    const closeOnResize = () => { if (window.innerWidth >= 1280) setOpen(false); };
    const escape = e => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        document.getElementById('menuBtn')?.focus();
      }
    };
    window.addEventListener('resize', closeOnResize);
    document.addEventListener('keydown', escape);
    return () => {
      window.removeEventListener('resize', closeOnResize);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-20% 0px -60% 0px' });
    links.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  return <header id="navbar" className={`fixed inset-x-0 z-50 border-b border-transparent ${scroll > 20 || open ? 'scrolled' : ''}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
      <a href="#home" className="flex shrink-0 items-center gap-2" aria-label="Nimexa Projects, go to home">
        <img src="assets/icons/circuit-logo.svg" width="40" height="40" alt="" />
        <span className="leading-tight"><span className="brand-title block font-head text-sm font-bold text-ink sm:text-base">Nimexa Projects</span><span className="brand-subtitle block text-[9px] text-slate-500 min-[380px]:text-[10px]">ECE · EEE · CSE · IoT · MECH</span></span>
      </a>
      <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
        {links.map(([id, title]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} className={`nav-link rounded-lg px-2 py-2 text-sm text-slate-600 hover:text-blue ${active === id ? 'font-semibold' : 'font-medium'}`}>{title}</a>)}
      </nav>
      <div className="flex items-center gap-2">
        <a href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="hidden rounded-xl bg-[#1FAF5A] px-3 py-2.5 text-sm font-semibold text-white sm:block">WhatsApp Us</a>
        <button id="menuBtn" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobileMenu" aria-label={open ? 'Close menu' : 'Open menu'} className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-ink xl:hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
        </button>
      </div>
    </div>
    <div id="mobileMenu" className={`xl:hidden ${open ? 'open' : ''}`} inert={!open}>
      <div><nav aria-label="Mobile navigation" className="mx-4 mb-3 max-h-[75vh] overflow-y-auto rounded-2xl border border-line bg-white p-2 shadow-soft">
        {links.map(([id, title]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2.5 font-medium hover:bg-mist">{title}</a>)}
        <a href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="block rounded-xl bg-[#1FAF5A] px-4 py-3 text-center font-semibold text-white">WhatsApp Us</a>
      </nav></div>
    </div>
  </header>;
}

export function BackToTop() {
  const scroll = useScroll();
  return <button type="button" aria-label="Back to top" tabIndex={scroll > 700 ? 0 : -1} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} className={`to-top fixed right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-white shadow-soft transition ${scroll > 700 ? '' : 'pointer-events-none translate-y-3 opacity-0'}`}>↑</button>;
}

export function LiveReading({ kind }) {
  const [readings, setReadings] = useState({ voltage: '230.4', load: 72, servo: 90 });
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let angle = 90, direction = 1;
    const timer = setInterval(() => {
      angle += direction * 15;
      if (angle >= 150 || angle <= 30) direction *= -1;
      setReadings({ voltage: (229 + Math.random() * 3).toFixed(1), load: Math.round(66 + Math.random() * 12), servo: angle });
    }, 1600);
    return () => clearInterval(timer);
  }, []);
  return <span>{readings[kind]}</span>;
}
