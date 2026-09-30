import { EEE_CATS, MECH_CATS, CSE_CATS, MESSAGES, waLink } from './data';
import { Header, BackToTop, LiveReading } from './components/Navigation';
import { Icon, CategoryGrid, FAQs, ContactForm } from './components/Projects';

export default function App() {
  return <>


<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold">Skip to content</a>

{/* ============ NAVBAR ============ */}
<Header />

<main id="main">

{/* ============ HERO ============ */}
<section id="home" className="relative overflow-hidden bg-navy pb-14 pt-24 text-white sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-36">
  <div className="grid-dark absolute inset-0" aria-hidden="true"></div>
  <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-bright/20 blur-3xl" aria-hidden="true"></div>
  <div className="absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-3xl" aria-hidden="true"></div>

  <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
    <div>
      <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] font-medium text-slate-300">
        <span className="pulse-dot h-2 w-2 rounded-full bg-cyan"></span> Diploma · Mini · Final-Year Projects
      </p>
      <h1 className="mt-5 font-head text-[2rem] font-bold leading-[1.08] tracking-tight min-[390px]:text-[2.3rem] sm:mt-6 sm:text-5xl lg:text-[3.6rem]">
        Tell Us What Project You Need. We Will Build It.
      </h1>
      <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate-300 sm:text-lg">
        We build Diploma, mini and final-year projects for ECE, EEE, CSE, IoT and Mechanical students, including web applications. Contact us with your requirement, discuss the scope, and place an order for a project built specifically for you.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue/30 transition hover:bg-blue-bright">
          Tell Us Your Requirement
        </a>
        <a href={waLink(MESSAGES.general)} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><use href="#i-wa" /></svg>
          Chat on WhatsApp
        </a>
      </div>
      <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[15px] text-slate-300 sm:flex sm:flex-wrap">
        <li className="flex items-center gap-2"><span className="text-cyan" aria-hidden="true">✓</span> Discuss Your Idea</li>
        <li className="flex items-center gap-2"><span className="text-cyan" aria-hidden="true">✓</span> Confirm the Order</li>
        <li className="flex items-center gap-2"><span className="text-cyan" aria-hidden="true">✓</span> Custom Project Build</li>
        <li className="flex items-center gap-2"><span className="text-cyan" aria-hidden="true">✓</span> Final Delivery</li>
      </ul>
    </div>

    {/* Engineering illustration */}
    <div className="relative mx-auto min-h-[330px] w-full max-w-[560px] sm:min-h-0" role="img" aria-label="Engineering workbench with software, electronics, IoT sensors and mechanical components">
      <img src="assets/images/engineering-workbench.png" alt="" className="absolute inset-0 z-20 h-full w-full rounded-2xl object-cover object-center shadow-2xl shadow-black/30 sm:rounded-3xl" />
      <div className="absolute inset-x-0 bottom-0 z-30 rounded-b-3xl bg-gradient-to-t from-navy via-navy/70 to-transparent px-6 pb-6 pt-24">
        <p className="font-head text-xl font-semibold text-white">Custom projects built for your requirement</p>
        <p className="mt-1 text-sm text-slate-300">Diploma · Mini · Final-year</p>
      </div>
      <div className="glass relative overflow-hidden rounded-3xl p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-white/20"></span><span className="h-2.5 w-2.5 rounded-full bg-white/20"></span><span className="h-2.5 w-2.5 rounded-full bg-white/20"></span></div>
          <span className="flex items-center gap-2 font-mono text-[12px] text-slate-300"><span className="pulse-dot h-2 w-2 rounded-full bg-[#25D366]"></span>device online</span>
        </div>
        <svg viewBox="0 0 480 300" className="mt-4 w-full" aria-hidden="true">
          <defs>
            <linearGradient id="chipG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1B3A6B" /><stop offset="1" stopColor="#0F2140" /></linearGradient>
          </defs>
          <rect x="1" y="1" width="478" height="298" rx="18" fill="#0C1C36" stroke="rgba(255,255,255,.08)" />
          {/* traces */}
          <g fill="none" stroke="#1E3A64" strokeWidth="3" strokeLinecap="round">
            <path d="M40 60h90v60h60" /><path d="M40 240h120v-60h30" /><path d="M290 120h60V60h90" /><path d="M290 180h70v60h80" /><path d="M240 40v50" /><path d="M240 210v50" />
          </g>
          <g fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" className="trace">
            <path d="M40 60h90v60h60" /><path d="M290 180h70v60h80" /><path d="M240 210v50" />
          </g>
          <g fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" className="trace" style={{"animationDuration": "4.5s"}}>
            <path d="M40 240h120v-60h30" /><path d="M290 120h60V60h90" /><path d="M240 40v50" />
          </g>
          {/* pads */}
          <g fill="#22D3EE"><circle cx="40" cy="60" r="5" /><circle cx="40" cy="240" r="5" /><circle cx="440" cy="60" r="5" /><circle cx="440" cy="240" r="5" /><circle cx="240" cy="40" r="5" /><circle cx="240" cy="260" r="5" /></g>
          {/* MCU chip */}
          <g>
            <g stroke="#5B7BA8" strokeWidth="3">
              <path d="M205 100v-10M220 100v-10M235 100v-10M250 100v-10M265 100v-10M205 210v10M220 210v10M235 210v10M250 210v10M265 210v10M180 125h-10M180 145h-10M180 165h-10M180 185h-10M290 125h10M290 145h10M290 165h10M290 185h10" />
            </g>
            <rect x="180" y="100" width="110" height="110" rx="10" fill="url(#chipG)" stroke="#3B82F6" strokeOpacity=".5" />
            <text x="235" y="152" textAnchor="middle" fill="#CFE3FF" fontFamily="JetBrains Mono, monospace" fontSize="15" fontWeight="600">ESP32</text>
            <text x="235" y="172" textAnchor="middle" fill="#6E8BB5" fontFamily="JetBrains Mono, monospace" fontSize="10">MCU • Wi-Fi</text>
          </g>
          {/* gear */}
          <g className="spin" transform="translate(395 150)">
            <path d="M0-26l5 0 2 8 7 3 7-4 4 4-4 7 3 7 8 2v6l-8 2-3 7 4 7-4 4-7-4-7 3-2 8h-6l-2-8-7-3-7 4-4-4 4-7-3-7-8-2v-6l8-2 3-7-4-7 4-4 7 4 7-3 2-8z" fill="#132B50" stroke="#3B82F6" strokeWidth="1.5" transform="translate(-2.5 0)" />
            <circle r="7" fill="#0C1C36" stroke="#22D3EE" strokeWidth="2" />
          </g>
          {/* sensor block */}
          <rect x="60" y="130" width="70" height="44" rx="8" fill="#10264A" stroke="#22D3EE" strokeOpacity=".4" />
          <path d="M72 158c6-14 10-14 16 0s10 14 16 0 8-10 14-4" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3"><p className="text-[11px] text-slate-400">Voltage</p><p className="mt-0.5 font-mono text-lg font-semibold text-white"><LiveReading kind="voltage" /><span className="text-xs text-slate-400"> V</span></p></div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3"><p className="text-[11px] text-slate-400">Load</p><p className="mt-0.5 font-mono text-lg font-semibold text-cyan"><LiveReading kind="load" /><span className="text-xs text-slate-400"> %</span></p></div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3"><p className="text-[11px] text-slate-400">Servo</p><p className="mt-0.5 font-mono text-lg font-semibold text-white"><LiveReading kind="servo" /><span className="text-xs text-slate-400"> °</span></p></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ HIGHLIGHT STRIP ============ */}
<section aria-label="What we offer" className="relative z-10 -mt-px border-b border-line bg-white">
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line px-0 lg:grid-cols-4">
    <div className="flex items-start gap-3 bg-white p-5 sm:p-6">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-blue-soft text-blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg></span>
      <div><h3 className="font-head text-[15px] font-semibold sm:text-base">ECE &amp; EEE</h3><p className="mt-0.5 text-sm text-slate-500">Electronics, embedded and electrical systems</p></div>
    </div>
    <div className="flex items-start gap-3 bg-white p-5 sm:p-6">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-blue-soft text-blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></svg></span>
      <div><h3 className="font-head text-[15px] font-semibold sm:text-base">CSE &amp; Web Apps</h3><p className="mt-0.5 text-sm text-slate-500">Custom software and web applications</p></div>
    </div>
    <div className="flex items-start gap-3 bg-white p-5 sm:p-6">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-blue-soft text-blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z" /></svg></span>
      <div><h3 className="font-head text-[15px] font-semibold sm:text-base">IoT Projects</h3><p className="mt-0.5 text-sm text-slate-500">Sensors, controllers and connected systems</p></div>
    </div>
    <div className="flex items-start gap-3 bg-white p-5 sm:p-6">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-blue-soft text-blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="m10 8 5 3-5 3z" /><path d="M8 22h8" /></svg></span>
      <div><h3 className="font-head text-[15px] font-semibold sm:text-base">Mechanical</h3><p className="mt-0.5 text-sm text-slate-500">Machines, mechanisms and automation</p></div>
    </div>
  </div>
</section>

{/* ============ SERVICES ============ */}
<section id="services" className="bg-mist py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-blue-soft px-3 py-1 text-[13px] font-semibold text-blue">Made only after an order</span>
      <h2 className="mt-4 font-head text-3xl font-bold tracking-tight sm:text-4xl">You Bring the Requirement. We Build the Project.</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">Custom Diploma, mini and final-year projects built after we discuss and confirm your requirement. No ready-made projects are kept for sale.</p>
    </div>
    <div className="mt-10">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {[
          ['chip', 'ECE', 'Electronics, communication and embedded systems'],
          ['bolt', 'EEE', 'Electrical, power and control systems'],
          ['code', 'CSE', 'Software and computer-based solutions'],
          ['wireless', 'IoT', 'Sensors, connected devices and monitoring'],
          ['gear', 'Mechanical', 'Machines, mechanisms and automation'],
          ['code', 'Web Applications', 'Responsive portals, dashboards and management systems']
        ].map(([icon, title, description]) => <article key={title} className="rounded-2xl border border-line bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-lg sm:p-5">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-soft text-blue"><Icon name={icon} size={21} /></span>
          <h3 className="mt-3 font-head text-base font-semibold">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
        </article>)}
      </div>
    </div>
    <div className="mt-7 text-center"><a href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl bg-navy px-6 py-3.5 font-semibold text-white transition hover:bg-blue">Discuss Your Requirement on WhatsApp</a></div>
    </div>
</section>

{/* ============ EEE ============ */}
<section id="eee" className="hidden bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-3 py-1 text-[13px] font-semibold text-blue">EEE</span>
        <h2 className="mt-3 font-head text-3xl font-bold tracking-tight sm:text-4xl">Electrical &amp; Electronics Engineering Projects</h2>
      </div>
      <p className="text-lg leading-relaxed text-slate-600">Explore practical EEE project concepts covering electrical systems, electronics, embedded systems, IoT, automation, power systems and renewable energy.</p>
    </div>
    <CategoryGrid id="eeeGrid" branch="EEE" categories={EEE_CATS} />
  </div>
</section>

{/* ============ MECHANICAL ============ */}
<section id="mechanical" className="hidden grid-light border-y border-line bg-mist py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-cyan/15 px-3 py-1 text-[13px] font-semibold text-cyan-deep">Mechanical</span>
        <h2 className="mt-3 font-head text-3xl font-bold tracking-tight sm:text-4xl">Mechanical Engineering Projects</h2>
      </div>
      <p className="text-lg leading-relaxed text-slate-600">Explore practical mechanical engineering projects involving automation, manufacturing, robotics, mechanisms, hydraulics, pneumatics and smart machines.</p>
    </div>
    <CategoryGrid id="mechGrid" branch="Mechanical" categories={MECH_CATS} />
  </div>
</section>

{/* ============ CSE ============ */}
<section id="cse" className="hidden bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal grid gap-6 lg:grid-cols-2 lg:items-end">
      <div><span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-[13px] font-semibold text-violet-700">CSE</span>
        <h2 className="mt-3 font-head text-3xl font-bold tracking-tight sm:text-4xl">Computer Science Engineering Projects</h2></div>
      <p className="text-lg leading-relaxed text-slate-600">Build practical software projects in artificial intelligence, web development, data analytics and cybersecurity. Explore an idea and discuss the features that fit your academic requirements.</p>
    </div>
    <CategoryGrid id="cseGrid" branch="CSE" categories={CSE_CATS} />
  </div>
</section>

{/* ============ CUSTOM PROJECT CTA ============ */}
<section className="bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue to-navy2 px-6 py-12 text-white sm:px-12 lg:py-16">
      <div className="grid-dark absolute inset-0 opacity-60" aria-hidden="true"></div>
      <svg className="absolute -right-10 -top-10 h-64 w-64 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".6" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></svg>
      <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="font-head text-3xl font-bold tracking-tight sm:text-4xl">Have Your Own Project Idea?</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">Share your concept and requirements. We will review feasibility and provide the proposed scope, price and delivery time before you order.</p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <a href={waLink(MESSAGES.custom)} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-navy shadow-lg transition hover:bg-blue-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1FAF5A" aria-hidden="true"><use href="#i-wa" /></svg>
            Get a Quote
          </a>
          <p className="text-sm text-blue-100/80">Opens WhatsApp with your message ready to send</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ HOW IT WORKS ============ */}
<section id="how-it-works" className="bg-mist py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal mx-auto max-w-2xl text-center">
      <h2 className="font-head text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
      <p className="mt-3 text-lg text-slate-600">Every project is made after the order is confirmed.</p>
    </div>
    <ol className="relative mt-10 grid gap-8 sm:mt-12 lg:grid-cols-4 lg:gap-6">
      {/* connecting line */}
      <span className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-blue via-cyan to-blue/20 lg:left-6 lg:right-6 lg:top-6 lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r" aria-hidden="true"></span>
      <li className="reveal relative flex gap-5 lg:block">
        <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-4 border-mist bg-navy font-mono text-sm font-semibold text-cyan">01</span>
        <div className="lg:mt-6"><h3 className="font-head text-xl font-semibold">Choose</h3><p className="mt-2 leading-relaxed text-slate-600">Browse EEE, CSE and Mechanical project ideas.</p></div>
      </li>
      <li className="reveal relative flex gap-5 lg:block">
        <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-4 border-mist bg-navy font-mono text-sm font-semibold text-cyan">02</span>
        <div className="lg:mt-6"><h3 className="font-head text-xl font-semibold">Confirm &amp; Order</h3><p className="mt-2 leading-relaxed text-slate-600">Approve the requirements, price and estimated delivery time.</p></div>
      </li>
      <li className="reveal relative flex gap-5 lg:block">
        <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-4 border-mist bg-navy font-mono text-sm font-semibold text-cyan">03</span>
        <div className="lg:mt-6"><h3 className="font-head text-xl font-semibold">We Build</h3><p className="mt-2 leading-relaxed text-slate-600">Development begins for your confirmed project, with progress updates.</p></div>
      </li>
      <li className="reveal relative flex gap-5 lg:block">
        <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-4 border-mist bg-navy font-mono text-sm font-semibold text-cyan">04</span>
        <div className="lg:mt-6"><h3 className="font-head text-xl font-semibold">Review &amp; Delivery</h3><p className="mt-2 leading-relaxed text-slate-600">Review the completed work and receive the agreed project deliverables.</p></div>
      </li>
    </ol>
  </div>
</section>

{/* ============ ORDER ============ */}
<section id="order" className="relative overflow-hidden bg-navy py-14 text-white sm:py-16 lg:py-20">
  <div className="grid-dark absolute inset-0 opacity-70" aria-hidden="true"></div>
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue/20 blur-3xl" aria-hidden="true"></div>
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <span className="inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[13px] font-semibold text-cyan">Simple order process</span>
        <h2 className="mt-4 font-head text-3xl font-bold tracking-tight sm:text-4xl">Ready to Discuss Your Project?</h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">Send your requirement first. We review it and confirm the scope, price and delivery time before you place the order.</p>
        <a href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-center font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#1FAF5A] sm:w-auto sm:px-6" aria-label="Start a project order on WhatsApp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><use href="#i-wa" /></svg>
          Send Requirement on WhatsApp
        </a>
        <p className="mt-3 text-sm text-slate-400">No payment or order is confirmed until the details are agreed.</p>
      </div>

      <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-sm sm:rounded-3xl sm:p-7">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div><p className="font-head text-xl font-semibold">What to send us</p><p className="mt-1 text-sm text-slate-400">A few details help us give you the right quote.</p></div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16v16H4zM8 9h8M8 13h8M8 17h5" /></svg></span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ['01', 'Project type', 'Diploma, mini or final-year'],
            ['02', 'Branch', 'ECE, EEE, CSE, IoT or Mechanical'],
            ['03', 'Requirement', 'Your idea, features or guide instructions'],
            ['04', 'Deadline', 'When you need the completed project']
          ].map(([number, title, detail]) => <div key={number} className="rounded-2xl border border-white/10 bg-navy/60 p-4">
            <span className="font-mono text-xs font-semibold text-cyan">{number}</span>
            <h3 className="mt-2 font-head font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">{detail}</p>
          </div>)}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-white/10 p-4">
          <span className="mt-0.5 text-cyan">✓</span>
          <p className="text-sm leading-relaxed text-slate-300"><strong className="text-white">Then we confirm:</strong> feasibility, final scope, price, estimated delivery time and deliverables.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ WHY ============ */}
<section className="bg-white py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal mx-auto max-w-2xl text-center">
      <h2 className="font-head text-3xl font-bold tracking-tight sm:text-4xl">Why Students Contact Us</h2>
      <p className="mt-3 text-lg text-slate-600">Clear discussion, practical builds and honest technical explanation.</p>
    </div>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      <article className="reveal lift rounded-2xl border border-line bg-white p-6 shadow-soft">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-cyan"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" /></svg></span>
        <h3 className="mt-4 font-head text-lg font-semibold">Practical Projects</h3>
        <p className="mt-2 leading-relaxed text-slate-600">Projects designed around practical engineering concepts.</p>
      </article>
      <article className="reveal lift rounded-2xl border border-line bg-white p-6 shadow-soft">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-cyan"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
        <h3 className="mt-4 font-head text-lg font-semibold">Project Discussion</h3>
        <p className="mt-2 leading-relaxed text-slate-600">Discuss your requirements before development.</p>
      </article>
      <article className="reveal lift rounded-2xl border border-line bg-white p-6 shadow-soft">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-cyan"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" /></svg></span>
        <h3 className="mt-4 font-head text-lg font-semibold">Customization</h3>
        <p className="mt-2 leading-relaxed text-slate-600">Project scope can be discussed according to requirements.</p>
      </article>
      <article className="reveal lift rounded-2xl border border-line bg-white p-6 shadow-soft">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-cyan"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="m10 8 5 3-5 3z" /></svg></span>
        <h3 className="mt-4 font-head text-lg font-semibold">Final Review</h3>
        <p className="mt-2 leading-relaxed text-slate-600">Review the working project before the agreed final delivery.</p>
      </article>
      <article className="reveal lift rounded-2xl border border-line bg-white p-6 shadow-soft">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-cyan"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg></span>
        <h3 className="mt-4 font-head text-lg font-semibold">Documentation Support</h3>
        <p className="mt-2 leading-relaxed text-slate-600">Project documentation requirements can be discussed.</p>
      </article>
      <article className="reveal lift rounded-2xl border border-line bg-white p-6 shadow-soft">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-cyan"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></svg></span>
        <h3 className="mt-4 font-head text-lg font-semibold">Technical Explanation</h3>
        <p className="mt-2 leading-relaxed text-slate-600">Understand the components, architecture and working principle.</p>
      </article>
    </div>
  </div>
</section>

{/* ============ FAQ ============ */}
<section id="faq" className="bg-mist py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <div className="reveal text-center">
      <h2 className="font-head text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
      <p className="mt-3 text-lg text-slate-600">Quick answers before you reach out.</p>
    </div>
    <FAQs />
  </div>
</section>

{/* ============ CONTACT ============ */}
<section id="contact" className="bg-white py-14 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="reveal mx-auto max-w-2xl text-center">
      <h2 className="font-head text-3xl font-bold tracking-tight sm:text-4xl">Request a Project Quote</h2>
      <p className="mt-3 text-lg text-slate-600">Tell us whether you need a Diploma, mini or final-year project so we can confirm the scope, price and delivery time.</p>
    </div>

    <div className="mx-auto mt-8 max-w-5xl">
      <ContactForm />
    </div>
  </div>
</section>
</main>

{/* ============ FOOTER ============ */}
<footer className="bg-navy text-slate-300">
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid gap-7 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-3"><img src="assets/icons/circuit-logo.svg" width="40" height="40" alt="" /><p className="font-head text-xl font-bold text-white">Nimexa Projects</p></div>
        <p className="mt-1 text-sm text-slate-400">ECE · EEE · CSE · IoT · Mechanical · Web Applications</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">Custom Diploma, mini and final-year projects built after discussing your requirements.</p>
      </div>
      <nav aria-label="Footer">
        <h3 className="font-head text-sm font-semibold text-white">Quick Links</h3>
        <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#services" className="hover:text-white">Services</a></li>
          <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
          <li><a href="#order" className="hover:text-white">Order Process</a></li>
          <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
          <li><a href={waLink(MESSAGES.general)} target="_blank" rel="noopener" className="hover:text-white">WhatsApp</a></li>
        </ul>
      </nav>
      <div>
        <h3 className="font-head text-sm font-semibold text-white">Start Your Project</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">Send your branch, project type, requirement and deadline.</p>
        <ul className="mt-3 space-y-1.5 text-sm">
          <li><a href="tel:+918142161862" className="font-mono hover:text-white">8142161862</a></li>
          <li><a href="mailto:imamshas125@gmail.com" className="break-all hover:text-white">imamshas125@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-6 flex flex-col gap-1 border-t border-white/10 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Nimexa Projects. All rights reserved.</span><span>Custom projects made after order confirmation.</span></div>
  </div>
</footer>

{/* Floating WhatsApp */}
<a href={waLink(MESSAGES.general)} target="_blank" rel="noopener" className="wa-float group fixed right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-black/20 transition hover:scale-105 hover:bg-[#1FAF5A] md:px-5 md:py-3.5" aria-label="Chat with us on WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><use href="#i-wa" /></svg>
  <span className="hidden font-semibold md:inline">Chat with us</span>
  <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-medium opacity-0 transition group-hover:opacity-100 md:hidden">Chat with us</span>
</a>

{/* Back to top */}
<BackToTop />

{/* ============ PROJECT MODAL ============ */}


{/* ============ DEMO MODAL ============ */}


{/* Shared WhatsApp icon */}
<svg width="0" height="0" className="absolute" aria-hidden="true">
  <symbol id="i-wa" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 12 .1C5.4.1.1 5.4.1 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3z" /></symbol>
</svg>



</>;
}
