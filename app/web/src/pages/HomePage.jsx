import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, Youtube, Instagram, Linkedin, X, Scissors, Film, Wand2, Music4, Palette, Layers, Clapperboard, Volume2, Send, Menu, Github, Code2, Languages, Terminal, Award } from 'lucide-react';
import profilePic from '@/profile.jpg';
const ACCENT = 'hsl(var(--accent-editor))';
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'about',
  label: 'About'
}, {
  id: 'projects',
  label: 'Projects'
}, {
  id: 'certificates',
  label: 'Certificates'
}, {
  id: 'contact',
  label: 'Contact'
}];
const PROJECTS = [];
const CLIPS = PROJECTS.slice(0, 5).map(p => p.img);
const ABOUT_CLIPS = [{
  label: 'BIO.mp4',
  dur: '2013-23',
  title: 'School',
  body: "Completed my primary and secondary education at St. Ann's English Medium High School, Nidadavolu. Studying there from 1st class to 10th class, I built a strong academic foundation and graduated in 2023."
}, {
  label: 'EXP_01.mov',
  dur: '2023-25',
  title: 'Intermediate',
  body: "Completed my Intermediate education in the MPC (Mathematics, Physics, Chemistry) stream at Sri Chaitanya Junior College, Eluru. Studying during my 1st and 2nd years, I built a strong analytical foundation and graduated in 2025."
}, {
  label: 'EXP_02.mov',
  dur: '2025-29',
  title: 'Engineering',
  body: "Currently pursuing my degree in Computer Science and Engineering (CSE) specializing in Artificial Intelligence and Machine Learning (AI & ML) at AMET University, Chennai in collaboration with NIAT. Studying from 1st to 4th year, I will graduate in the year 2029."
}];
const SKILLS = [{
  name: 'Web Development',
  icon: Code2
}, {
  name: 'DaVinci Resolve',
  icon: Palette
}, {
  name: 'English Fluency',
  icon: Languages
}, {
  name: 'Color Grading',
  icon: Layers
}, {
  name: 'Sound Design',
  icon: Volume2
}, {
  name: 'Motion Graphics',
  icon: Clapperboard
}, {
  name: 'Audio Mixing',
  icon: Music4
}, {
  name: 'Python Programming',
  icon: Terminal
}];
const CERTIFICATES = [];

/* ---------- Reveal helper ---------- */
const Reveal = ({
  children,
  delay = 0,
  y = 40,
  className = ''
}) => <motion.div className={className} initial={{
  opacity: 0,
  y,
  filter: 'blur(6px)'
}} whileInView={{
  opacity: 1,
  y: 0,
  filter: 'blur(0px)'
}} viewport={{
  once: true,
  margin: '-80px'
}} transition={{
  duration: 0.5,
  delay,
  ease: [0.16, 1, 0.3, 1]
}}>
        {children}
    </motion.div>;

/* ---------- Header ---------- */
const Header = ({
  onCut
}) => {
  const [open, setOpen] = useState(false);
  const go = id => {
    setOpen(false);
    onCut(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  };
  return <header className="fixed top-0 inset-x-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto max-w-[90rem] px-5 h-16 flex items-center justify-between">
                <button onClick={() => go('home')} className="flex items-center gap-2 group"><span className="grid place-items-center w-8 h-8 rounded-sm bg-primary text-primary-foreground"><Scissors size={16} /></span><span className="font-display font-bold tracking-tight text-lg">PORT<span className="text-primary">FOLIO</span></span></button>
                <nav className="hidden md:flex items-center gap-1 font-mono-ui text-xs uppercase tracking-widest">
                    {NAV.map(n => <button key={n.id} onClick={() => go(n.id)} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors relative group">
                            {n.label}
                            <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </button>)}
                </nav>
                <button onClick={() => go('contact')} className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono-ui text-xs uppercase tracking-widest px-4 py-2 rounded-sm hover:brightness-110 active:scale-95 transition">
                    Hire Me
                </button>
                <button className="md:hidden text-foreground" onClick={() => setOpen(o => !o)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>
            <AnimatePresence>
                {open && <motion.nav initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="md:hidden overflow-hidden border-t border-border bg-background">
                        {NAV.map(n => <button key={n.id} onClick={() => go(n.id)} className="block w-full text-left px-5 py-4 font-mono-ui text-sm uppercase tracking-widest border-b border-border/60 hover:bg-secondary">
                                {n.label}
                            </button>)}
                    </motion.nav>}
            </AnimatePresence>
        </header>;
};

/* ---------- Hero ---------- */
const Hero = () => {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return <section id="home" ref={ref} className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-16 timeline-track">
            {/* playhead sweep */}
            <div className="pointer-events-none absolute inset-y-0 w-px bg-primary/70 shadow-[0_0_12px_hsl(var(--accent-editor))]" style={{
      animation: 'playhead-sweep 6s ease-in-out infinite alternate'
    }} />

            <motion.div style={{
      y
    }} className="mx-auto max-w-[90rem] w-full px-5 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <motion.p initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }} className="font-mono-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">
                        // Timeline 01 — Sequence 4K/24fps
                    </motion.p>
                    <h1 className="font-display font-bold leading-[0.9] tracking-tight text-6xl sm:text-7xl lg:text-8xl">
                        {['DHANUSH', 'KAYALA'].map((word, i) => <motion.span key={word} className="block overflow-hidden">
                                <motion.span className="block" initial={{
              y: '110%'
            }} animate={{
              y: 0
            }} transition={{
              delay: 0.3 + i * 0.12,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1]
            }}>
                                    {i === 1 ? <span className="text-primary">{word}</span> : word}
                                </motion.span>
                            </motion.span>)}
                    </h1>
                    <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.7
        }} className="mt-6 flex items-center gap-3 font-mono-ui text-sm uppercase tracking-widest text-muted-foreground">
                        <span className="h-px w-10 bg-primary" />
                        Video Editor & Student
                    </motion.div>
                    <motion.p initial={{
          opacity: 0,
          y: 16
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.85
        }} className="mt-6 max-w-md text-muted-foreground text-lg leading-relaxed">
                        I am Kayala Dhanush, a Computer Science & Engineering student specializing in AI & ML at AMET University, Chennai. I completed my schooling at St. Ann's High School and intermediate at Sri Chaitanya Junior College.
                    </motion.p>
                    <motion.div initial={{
          opacity: 0,
          y: 16
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1
        }} className="mt-8 flex flex-wrap gap-3">
                        <button onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono-ui text-xs uppercase tracking-widest px-5 py-3 rounded-sm hover:brightness-110 active:scale-95 transition">
                            <Play size={15} fill="currentColor" /> View Project
                        </button>
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="inline-flex items-center gap-2 border border-border text-foreground font-mono-ui text-xs uppercase tracking-widest px-5 py-3 rounded-sm hover:border-primary hover:text-primary transition">
                            Contact Me
                        </button>
                    </motion.div>
                </div>

                {/* profile picture card styled in a premium frame */}
                <div className="relative flex justify-center lg:justify-end items-center">
                    <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="relative max-w-sm w-full aspect-square rounded-sm overflow-hidden border border-border group shadow-2xl">
                        {/* sprocket holes for film strip theme */}
                        <div className="absolute inset-y-0 left-0 w-4 bg-black/70 flex flex-col justify-around items-center z-10">
                            {Array.from({
                length: 8
              }).map((_, k) => <span key={k} className="w-2 h-2 rounded-[1px] bg-white/20" />)}
                        </div>
                        <img src={profilePic} alt="Dhanush Kayala" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                        <span className="absolute bottom-3 right-3 font-mono-ui text-xs bg-black/80 px-2 py-1 text-primary border border-border/40 rounded-sm">PROFILE.JPG</span>
                    </motion.div>
                </div>
            </motion.div>

            <div className="absolute bottom-4 inset-x-0 mx-auto max-w-[90rem] px-5 flex items-center gap-3 font-mono-ui text-[10px] text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">00:00:00:00</span>
                <div className="flex-1 h-px bg-border relative">
                    <span className="absolute -top-1 left-0 w-2 h-2 rotate-45 bg-primary" />
                </div>
                <span>Scroll</span>
            </div>
        </section>;
};

/* ---------- About ---------- */
const About = () => <section id="about" className="relative py-28 border-t border-border">
        <div className="mx-auto max-w-[72rem] px-5">
            <Reveal>
                <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-primary mb-3">// About — Track 02</p>
                <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">The Timeline So Far</h2>
            </Reveal>

            <div className="mt-14 space-y-5">
                {ABOUT_CLIPS.map((c, i) => <Reveal key={c.label} delay={i * 0.08}>
                        <motion.div whileHover={{
          x: 6
        }} className="group relative flex flex-col sm:flex-row gap-4 sm:items-center rounded-sm border border-border bg-card p-5 overflow-hidden">
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                            <div className="sm:w-52 shrink-0">
                                <span className="inline-flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-sm">
                                    <Film size={11} /> {c.label}
                                </span>
                                <p className="font-mono-ui text-[10px] text-muted-foreground mt-2">DUR {c.dur}</p>
                            </div>
                            <div>
                                <h3 className="font-display font-semibold text-xl">{c.title}</h3>
                                <p className="text-muted-foreground mt-1 leading-relaxed">{c.body}</p>
                            </div>
                        </motion.div>
                    </Reveal>)}
            </div>

            <Reveal className="mt-16">
                <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-primary mb-5">// Effects Rack — Tools</p>
                <div className="flex flex-wrap gap-3">
                    {SKILLS.map((s, i) => <motion.span key={s.name} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.05
        }} className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary px-3 py-2 font-mono-ui text-xs uppercase tracking-wide hover:border-primary hover:text-primary transition">
                            <s.icon size={14} className="text-primary" /> {s.name}
                        </motion.span>)}
                </div>
            </Reveal>
        </div>
    </section>;

/* ---------- Work ---------- */
const Work = ({
  onOpen
}) => {
  const [items, setItems] = useState(PROJECTS);
  const [locked, setLocked] = useState(false);
  const [form, setForm] = useState({ title: '', cat: '', dur: '', img: '' });
  useEffect(() => {
    try {
      const raw = localStorage.getItem('dk_work');
      if (raw) {
        const parsed = JSON.parse(raw);
        setItems(parsed.items !== undefined ? parsed.items : PROJECTS);
        setLocked(!!parsed.locked);
      } else {
        setItems(PROJECTS);
      }
    } catch {
      setItems(PROJECTS);
    }
  }, []);
  const persist = (nextItems, nextLocked) => {
    setItems(nextItems);
    setLocked(nextLocked);
    try {
      localStorage.setItem('dk_work', JSON.stringify({ items: nextItems, locked: nextLocked }));
    } catch { /* ignore */ }
  };
  const addItem = e => {
    e.preventDefault();
    if (!form.title.trim() || !form.img.trim()) return;
    persist([...items, {
      title: form.title.trim(),
      cat: form.cat.trim() || 'Project',
      dur: form.dur.trim() || '00:00',
      img: form.img.trim()
    }], locked);
    setForm({ title: '', cat: '', dur: '', img: '' });
  };
  const removeItem = idx => persist(items.filter((_, i) => i !== idx), locked);
  return <section id="projects" className="relative py-28 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[90rem] px-5">
            <Reveal>
                <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-primary mb-3">// Media Bin — Track 03</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">Projects</h2>
                    <button onClick={() => persist(items, !locked)} className="font-mono-ui text-xs uppercase tracking-widest border border-border rounded-sm px-4 py-2 hover:border-primary transition text-muted-foreground hover:text-primary">
                        {locked ? 'Unlock to edit' : 'Lock timeline'}
                    </button>
                </div>
            </Reveal>

            {!locked && <Reveal>
                <form onSubmit={addItem} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3 rounded-sm border border-border bg-card p-4">
                    <input className="editor-input" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                    <input className="editor-input" placeholder="Category" value={form.cat} onChange={e => setForm({ ...form, cat: e.target.value })} />
                    <input className="editor-input" placeholder="Duration (00:00)" value={form.dur} onChange={e => setForm({ ...form, dur: e.target.value })} />
                    <input className="editor-input" placeholder="Image / thumbnail URL" value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} />
                    <button type="submit" className="font-mono-ui text-xs uppercase tracking-widest rounded-sm bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition">Add clip</button>
                </form>
            </Reveal>}

            {items.length === 0 ? <Reveal>
                <div className="mt-14 rounded-sm border border-dashed border-border bg-card/40 py-20 text-center">
                    <p className="font-mono-ui text-xs uppercase tracking-widest text-muted-foreground">Media bin empty</p>
                    <p className="mt-2 text-sm text-muted-foreground">{locked ? 'Unlock to add work.' : 'Add your first clip above.'}</p>
                </div>
            </Reveal> : <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((p, i) => <Reveal key={p.title + i} delay={i % 3 * 0.08}>
                        <div className="group relative w-full rounded-sm overflow-hidden border border-border bg-card">
                            {!locked && <button onClick={() => removeItem(i)} aria-label="Remove clip" className="absolute top-2 left-2 z-10 grid place-items-center w-7 h-7 rounded-full bg-black/70 text-foreground hover:text-primary transition">
                                <X size={14} />
                            </button>}
                            <button onClick={() => onOpen(p)} className="block w-full text-left">
                            <div className="relative aspect-video overflow-hidden">
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                                <span className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 group-hover:opacity-100" style={{
              animation: 'scan 1.1s linear infinite'
            }} />
                                <span className="absolute top-2 right-2 font-mono-ui text-[10px] bg-black/70 text-primary px-2 py-0.5 rounded-sm">{p.dur}</span>
                                <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                                    <span className="grid place-items-center w-14 h-14 rounded-full bg-primary/90 text-primary-foreground">
                                        <Play size={22} fill="currentColor" />
                                    </span>
                                </span>
                            </div>
                            <div className="p-4 flex items-center justify-between">
                                <div>
                                    <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                                    <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{p.cat}</p>
                                </div>
                                <Scissors size={16} className="text-muted-foreground group-hover:text-primary transition" />
                            </div>
                            </button>
                        </div>
                    </Reveal>)}
            </div>}
        </div>
    </section>;
};

/* ---------- Reviews ---------- */
const Certificates = () => {
  const [items, setItems] = useState(CERTIFICATES);
  const [locked, setLocked] = useState(false);
  const [form, setForm] = useState({ name: '', role: '', quote: '' });
  useEffect(() => {
    try {
      const raw = localStorage.getItem('dk_certificates');
      if (raw) {
        const parsed = JSON.parse(raw);
        setItems(parsed.items !== undefined ? parsed.items : CERTIFICATES);
        setLocked(!!parsed.locked);
      } else {
        setItems(CERTIFICATES);
      }
    } catch {
      setItems(CERTIFICATES);
    }
  }, []);
  const persist = (nextItems, nextLocked) => {
    setItems(nextItems);
    setLocked(nextLocked);
    try {
      localStorage.setItem('dk_certificates', JSON.stringify({ items: nextItems, locked: nextLocked }));
    } catch { /* ignore */ }
  };
  const addCertificate = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.quote.trim()) return;
    persist([...items, {
      name: form.name.trim(),
      role: form.role.trim() || 'Verification Link',
      quote: form.quote.trim()
    }], locked);
    setForm({ name: '', role: '', quote: '' });
  };
  const removeCertificate = idx => persist(items.filter((_, i) => i !== idx), locked);
  return <section id="certificates" className="relative py-28 border-t border-border">
        <div className="mx-auto max-w-[72rem] px-5">
            <Reveal>
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-primary mb-3">// Credentials — Track 04</p>
                        <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">Certificates</h2>
                    </div>
                    <button onClick={() => persist(items, !locked)} className="font-mono-ui text-xs uppercase tracking-widest border border-border rounded-sm px-4 py-2 hover:border-primary transition text-muted-foreground hover:text-primary">
                        {locked ? 'Unlock to edit' : 'Lock certificates'}
                    </button>
                </div>
            </Reveal>

            {!locked && <Reveal>
                <form onSubmit={addCertificate} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-sm border border-border bg-card p-4">
                    <input className="editor-input" placeholder="Certificate Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input className="editor-input" placeholder="Issuer / Organization" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
                    <input className="editor-input sm:col-span-2 lg:col-span-2" placeholder="Credential URL / Link" value={form.quote} onChange={e => setForm({ ...form, quote: e.target.value })} />
                    <button type="submit" className="font-mono-ui text-xs uppercase tracking-widest rounded-sm bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition">Add certificate</button>
                </form>
            </Reveal>}

            {items.length === 0 ? <Reveal>
                <div className="mt-14 rounded-sm border border-dashed border-border bg-card/40 py-20 text-center">
                    <p className="font-mono-ui text-xs uppercase tracking-widest text-muted-foreground">No certificates yet</p>
                    <p className="mt-2 text-sm text-muted-foreground">{locked ? 'Unlock to add certificates.' : 'Add your first certificate above.'}</p>
                </div>
            </Reveal> : <div className="mt-14 grid md:grid-cols-3 gap-5">
                {items.map((r, i) => <Reveal key={r.name + i} delay={i % 3 * 0.1}>
                        <div className="group relative h-full rounded-sm border border-border bg-card p-6 flex flex-col animate-fade-in">
                            {!locked && <button onClick={() => removeCertificate(i)} aria-label="Remove certificate" className="absolute top-2 right-2 grid place-items-center w-7 h-7 rounded-full bg-black/70 text-foreground hover:text-primary transition opacity-0 group-hover:opacity-100">
                                <X size={14} />
                            </button>}
                            <Award className="text-primary mb-4" size={24} />
                            <h3 className="font-display font-semibold text-lg leading-snug">{r.name}</h3>
                            <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground mt-1 mb-4">{r.role}</p>
                            <div className="mt-auto pt-4 border-t border-border/60">
                                {r.quote.startsWith('http') || r.quote.includes('.') ? (
                                    <a href={r.quote.startsWith('http') ? r.quote : `https://${r.quote}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-mono-ui uppercase tracking-wider">
                                        Verify Certificate →
                                    </a>
                                ) : (
                                    <p className="text-muted-foreground text-xs font-mono-ui">{r.quote}</p>
                                )}
                            </div>
                        </div>
                    </Reveal>)}
            </div>}
        </div>
    </section>;
};

/* ---------- Contact (Export panel) ---------- */
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: 'Music Video',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('rendering');
    
    const subject = encodeURIComponent(`Portfolio Inquiry: ${form.project} from ${form.name}`);
    const body = encodeURIComponent(`Hello Dhanush,\n\nYou have received a new project inquiry from your portfolio:\n\nName: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.project}\n\nMessage:\n${form.message}\n\nBest regards`);
    
    setTimeout(() => {
      setStatus('done');
      window.location.href = `mailto:dhanushkayala114@gmail.com?subject=${subject}&body=${body}`;
      setForm({
        name: '',
        email: '',
        project: 'Music Video',
        message: ''
      });
    }, 1800);
  };
  return <section id="contact" className="relative py-28 border-t border-border bg-card/30">
            <div className="mx-auto max-w-[42rem] px-5">
                <Reveal>
                    <div className="rounded-md border border-border bg-card overflow-hidden">
                        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary">
                            <span className="font-mono-ui text-xs uppercase tracking-widest flex items-center gap-2">
                                <Clapperboard size={14} className="text-primary" /> Export Settings
                            </span>
                            <span className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                            </span>
                        </div>
                        <form onSubmit={submit} className="p-6 space-y-5">
                            <p className="font-mono-ui text-[11px] text-muted-foreground uppercase tracking-widest">
                                Format: Direct Message // Codec: Human
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field label="Name">
                                    <input value={form.name} onChange={e => setForm({
                  ...form,
                  name: e.target.value
                })} className="editor-input" placeholder="Your name" />
                                </Field>
                                <Field label="Email">
                                    <input type="email" value={form.email} onChange={e => setForm({
                  ...form,
                  email: e.target.value
                })} className="editor-input" placeholder="you@studio.com" />
                                </Field>
                            </div>
                            <Field label="Project Type">
                                <select value={form.project} onChange={e => setForm({
                ...form,
                project: e.target.value
              })} className="editor-input">
                                    {['Music Video', 'Documentary', 'Commercial', 'Wedding Film', 'Other'].map(o => <option key={o}>{o}</option>)}
                                </select>
                            </Field>
                            <Field label="Message">
                                <textarea rows={4} value={form.message} onChange={e => setForm({
                ...form,
                message: e.target.value
              })} className="editor-input resize-none" placeholder="Tell me about your footage..." />
                            </Field>
                            <button type="submit" disabled={status === 'rendering'} className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-mono-ui text-xs uppercase tracking-widest px-5 py-3.5 rounded-sm hover:brightness-110 active:scale-[0.98] transition disabled:opacity-60">
                                {status === 'rendering' ? 'Rendering…' : status === 'done' ? 'Exported ✓' : <><Send size={14} /> Send / Export Message</>}
                            </button>
                            {status === 'rendering' && <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                                    <motion.div className="h-full bg-primary" initial={{
                width: 0
              }} animate={{
                width: '100%'
              }} transition={{
                duration: 1.8
              }} />
                                </div>}
                            {status === 'done' && <p className="font-mono-ui text-xs text-primary text-center">Message exported successfully — I'll reply within 24h.</p>}
                        </form>
                    </div>
                </Reveal>
            </div>
        </section>;
};
const Field = ({
  label,
  children
}) => <label className="flex flex-col gap-2">
        <span className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
        {children}
    </label>;

/* ---------- Footer ---------- */
const SOCIALS = [{
  icon: Youtube,
  label: 'YouTube',
  url: 'https://www.youtube.com/@frostfuel-w8g'
}, {
  icon: Instagram,
  label: 'Instagram',
  url: 'https://www.instagram.com/frostfuel_official/'
}, {
  icon: Github,
  label: 'GitHub',
  url: 'https://github.com/Dhanushkayala'
}, {
  icon: Linkedin,
  label: 'LinkedIn',
  url: 'https://www.linkedin.com/in/dhanush-kayala-6973a135b'
}];
const Footer = () => <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-[90rem] px-5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="font-display font-bold tracking-tight">PORT<span className="text-primary">FOLIO</span></span>
            <div className="flex gap-2">
                {SOCIALS.map(s => <a key={s.label} href={s.url} target={s.url !== '#' ? '_blank' : undefined} rel={s.url !== '#' ? 'noopener noreferrer' : undefined} aria-label={s.label} className="grid place-items-center w-10 h-10 rounded-sm border border-border text-muted-foreground hover:text-primary hover:border-primary transition">
                        <s.icon size={17} />
                    </a>)}
            </div>
            <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">© {new Date().getFullYear()} Dhanush Kayala — All rights reserved</p>
        </div>
    </footer>;

/* ---------- Lightbox ---------- */
const Lightbox = ({
  project,
  onClose
}) => <AnimatePresence>
        {project && <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm grid place-items-center p-4" onClick={onClose}>
                <motion.div initial={{
      scale: 0.94,
      y: 20
    }} animate={{
      scale: 1,
      y: 0
    }} exit={{
      scale: 0.94,
      y: 20
    }} transition={{
      ease: [0.16, 1, 0.3, 1]
    }} className="w-full max-w-4xl rounded-md border border-border bg-card overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary">
                        <span className="font-mono-ui text-xs uppercase tracking-widest">{project.title} — {project.cat}</span>
                        <button onClick={onClose} className="text-muted-foreground hover:text-primary"><X size={18} /></button>
                    </div>
                    <div className="relative aspect-video bg-black">
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 grid place-items-center">
                            <span className="grid place-items-center w-20 h-20 rounded-full bg-primary/90 text-primary-foreground">
                                <Play size={30} fill="currentColor" />
                            </span>
                        </div>
                    </div>
                    <div className="px-4 py-3 flex items-center gap-3 font-mono-ui text-[10px] text-muted-foreground uppercase tracking-widest">
                        <span className="text-primary">00:00</span>
                        <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full w-1/3 bg-primary" />
                        </div>
                        <span>{project.dur}</span>
                    </div>
                </motion.div>
            </motion.div>}
    </AnimatePresence>;

/* ---------- Cut transition overlay ---------- */
const CutOverlay = ({
  active
}) => <AnimatePresence>
        {active && <motion.div initial={{
    scaleX: 0,
    originX: 0
  }} animate={{
    scaleX: 1
  }} exit={{
    scaleX: 0,
    originX: 1
  }} transition={{
    duration: 0.28,
    ease: [0.7, 0, 0.3, 1]
  }} className="fixed inset-0 z-[70] bg-primary pointer-events-none">
                <div className="absolute inset-0 grid place-items-center">
                    <Scissors className="text-primary-foreground" size={40} />
                </div>
            </motion.div>}
    </AnimatePresence>;

/* ---------- Page ---------- */
const HomePage = () => {
  const [selected, setSelected] = useState(null);
  const [cutting, setCutting] = useState(false);
  const cut = action => {
    setCutting(true);
    setTimeout(() => {
      action?.();
    }, 200);
    setTimeout(() => setCutting(false), 480);
  };
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return <div className="grain min-h-screen bg-background text-foreground">
            <CutOverlay active={cutting} />
            <Header onCut={cut} />
            <main>
                <Hero />
                <About />
                <Work onOpen={setSelected} />
                <Certificates />
                <Contact />
            </main>
            <Footer />
            <Lightbox project={selected} onClose={() => setSelected(null)} />
        </div>;
};
export default HomePage;