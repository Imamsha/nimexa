import { useEffect, useRef, useState } from 'react';
import { PROJECTS, ICONS, MESSAGES, DEV_OPTIONS, FAQS, waLink } from '../data';

export function Icon({ name, size = 24 }) {
  // Icon paths are trusted, local SVG artwork from data.js, never user input.
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[name] || ICONS.chip }} />;
}

const branchStyles = {
  EEE: ['from-[#0F2140] to-[#1646A8]', 'bg-blue-soft text-blue'],
  CSE: ['from-[#251345] to-[#6D28D9]', 'bg-violet-100 text-violet-700'],
  Mechanical: ['from-[#0F2140] to-[#0E5E73]', 'bg-cyan/15 text-cyan-deep'],
};

export function ProjectCard({ project: p, onSelect }) {
  const badge = branchStyles[p.branch][1];
  return <article className="project-card card-in flex min-w-0 items-center gap-3 rounded-lg border border-line bg-white p-3 transition hover:border-blue/40">
    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${badge}`}><Icon name={p.icon} size={18} /></span>
    <div className="min-w-0 flex-1">
      <h3 className="truncate font-head text-sm font-semibold">{p.title}</h3>
      <p className="mt-0.5 text-[11px] text-slate-500">{p.branch} · Made to order</p>
    </div>
    <div className="flex shrink-0 items-center gap-1.5">
      <button type="button" onClick={() => onSelect(p)} aria-haspopup="dialog" className="rounded-md border border-line px-2.5 py-2 text-[11px] font-semibold hover:border-ink">View Details</button>
      <a href={waLink(MESSAGES.project(p.title))} target="_blank" rel="noopener noreferrer" aria-label={`Order ${p.title} on WhatsApp`} className="rounded-md bg-navy px-2.5 py-2 text-[11px] font-semibold text-white hover:bg-blue">Order</a>
    </div>
  </article>;
}

export function CategoryGrid({ id, categories, branch }) {
  return <div id={id} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{categories.map(c => <article key={c.name} className="lift flex flex-col rounded-xl border border-line bg-white p-4 shadow-soft">
    <div className="flex items-center gap-2.5"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${branchStyles[branch][1]}`}><Icon name={c.icon} size={20} /></span><h3 className="font-head text-sm font-semibold">{c.name}</h3></div>
    <ul className="mt-3 flex-1 list-inside list-disc space-y-1 text-xs leading-relaxed text-slate-600">{c.ex.map(example => <li key={example}>{example}</li>)}</ul>
    <a href={waLink(MESSAGES.category(branch, c.name))} target="_blank" rel="noopener noreferrer" className="mt-3 py-2 text-xs font-semibold text-blue hover:underline">Ask about {c.name} ↗</a>
  </article>)}</div>;
}

export function FAQs() {
  const [expanded, setExpanded] = useState(null);
  return <div id="faqList" className="mt-10 space-y-3">{FAQS.map(([question, answer], i) => <div key={question} className={`faq-item rounded-2xl border border-line bg-white ${expanded === i ? 'open' : ''}`}>
    <h3><button type="button" id={`faq-q-${i}`} aria-expanded={expanded === i} aria-controls={`faq-${i}`} onClick={() => setExpanded(expanded === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-head text-sm font-semibold"><span>{question}</span><span className="faq-icon text-xl" aria-hidden="true">+</span></button></h3>
    <div id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} aria-hidden={expanded !== i} className="faq-panel"><div><p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{answer}</p></div></div>
  </div>)}</div>;
}

function Modal({ open, onClose, titleId, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!open) return;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus();
    };
  }, [open]);
  return <dialog ref={ref} aria-labelledby={titleId} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="flex min-h-full items-end justify-center sm:items-center sm:p-6" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      {open && <div className="modal-panel flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">{children}</div>}
    </div>
  </dialog>;
}

function CloseButton({ onClick }) {
  return <button type="button" onClick={onClick} aria-label="Close dialog" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-current/20 text-xl">×</button>;
}

function DetailSection({ title, children }) {
  return <section className="mt-5 first:mt-0"><h3 className="font-head text-sm font-semibold">{title}</h3><div className="mt-2 text-sm leading-relaxed text-slate-600">{children}</div></section>;
}

export function ProjectModal({ project: p, onClose }) {
  return <Modal open={!!p} onClose={onClose} titleId="pmTitle">{p && <>
    <div className="flex items-start justify-between gap-4 bg-navy p-5 text-white"><div><p className="text-xs text-cyan">{p.branch} · {p.tags.join(' · ')} · {p.level}</p><h2 id="pmTitle" className="mt-2 font-head text-xl font-bold">{p.title}</h2></div><CloseButton onClick={onClose} /></div>
    <div className="overflow-y-auto p-5">
      <DetailSection title="Overview"><p>{p.overview}</p></DetailSection>
      <DetailSection title="Problem statement"><p>{p.problem}</p></DetailSection>
      <DetailSection title="Proposed solution"><p>{p.solution}</p></DetailSection>
      {[['Main components', p.components], ['Technologies', p.tech], ['Expected functionality', p.functions], ['Development options', DEV_OPTIONS]].map(([title, items]) => <DetailSection key={title} title={title}><ul className="list-inside list-disc space-y-1">{items.map(item => <li key={item}>{item}</li>)}</ul></DetailSection>)}
      <DetailSection title="Availability"><p>This is a project idea, not a ready-made item. It will be developed after you approve the scope, price and delivery time.</p></DetailSection>
      <p className="mt-5 text-xs text-slate-400">Features and components are finalised before the order begins. Students should understand and present the work according to their institution's requirements.</p>
    </div>
    <div className="border-t border-line bg-mist p-4"><a href={waLink(MESSAGES.project(p.title))} target="_blank" rel="noopener noreferrer" className="block rounded-xl bg-[#1FAF5A] px-5 py-3 text-center text-sm font-semibold text-white">Order on WhatsApp</a></div>
  </>}</Modal>;
}

function ProjectOptions({ placeholder }) {
  return <><option value="">{placeholder}</option>{['CSE', 'EEE', 'Mechanical'].map(branch => <optgroup key={branch} label={branch}>{PROJECTS.filter(p => p.branch === branch).map(p => <option key={p.id} value={p.title}>{p.title}</option>)}</optgroup>)}</>;
}

const fieldClass = 'w-full min-w-0 rounded-xl border border-line bg-white px-3.5 py-3 text-base font-normal text-ink outline-none focus:border-blue focus:ring-4 focus:ring-blue/10 sm:px-4 sm:text-sm';
export function ContactForm() {
  const [errors, setErrors] = useState({});
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = values.get('name').trim();
    const branch = values.get('branch');
    const nextErrors = { name: name.length < 2, branch: !branch };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.branch) {
      form.elements.namedItem(nextErrors.name ? 'name' : 'branch').focus();
      return;
    }
    let message = `Hi, I am ${name}. I am a ${branch} student. I need ${values.get('type') || 'a custom project'}: ${values.get('project') || 'requirement not decided yet'}.`;
    if (values.get('message').trim()) message += ` My requirement is: ${values.get('message').trim()}.`;
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  }
  return <form id="contactForm" onSubmit={submit} noValidate aria-labelledby="formTitle" className="w-full rounded-2xl border border-line bg-mist p-4 sm:p-6">
    <div className="sm:flex sm:items-end sm:justify-between sm:gap-6"><div><h3 id="formTitle" className="font-head text-xl font-semibold">Request a quote</h3><p className="mt-1 text-sm text-slate-500">Your details are sent as a WhatsApp message. Nothing is stored on this website.</p></div></div>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <label className="grid min-w-0 gap-1.5 text-sm font-semibold">Name<input name="name" autoComplete="name" required className={fieldClass} placeholder="Your full name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <span id="name-error" className="text-xs text-red-600">Please enter your name.</span>}</label>
      <label className="grid min-w-0 gap-1.5 text-sm font-semibold">Branch<select name="branch" required className={fieldClass} aria-invalid={!!errors.branch} aria-describedby={errors.branch ? 'branch-error' : undefined}><option value="">Select your branch</option>{['EEE', 'CSE', 'Mechanical', 'ECE', 'Other'].map(branch => <option key={branch}>{branch}</option>)}</select>{errors.branch && <span id="branch-error" className="text-xs text-red-600">Please select your branch.</span>}</label>
      <label className="grid min-w-0 gap-1.5 text-sm font-semibold sm:col-span-2">Project Type<select name="type" className={fieldClass}><option value="">Select project type</option><option>Diploma project</option><option>Mini project</option><option>Final-year project</option></select></label>
      <label className="grid min-w-0 gap-1.5 text-sm font-semibold sm:col-span-2">Project Requirement<input name="project" className={fieldClass} placeholder="What project do you need?" /></label>
      <label className="grid min-w-0 gap-1.5 text-sm font-semibold sm:col-span-2">More Details<textarea name="message" rows="3" className={fieldClass} placeholder="Required features, submission date, team size, budget, or other details" /></label>
    </div>
    <button type="submit" className="mx-auto mt-5 block w-full rounded-xl bg-blue px-8 py-3 font-semibold text-white sm:w-72">Request Quote</button>
  </form>;
}
