import { useState, useEffect, useRef } from 'react'
import { statisticsData } from './statisticsData'
import { useLanguage } from '../../context/LanguageContext'

export default function Statistics() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, language } = useLanguage()
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.3 }); if (sectionRef.current) observer.observe(sectionRef.current); return () => observer.disconnect() }, [])
  useEffect(() => { if (!isVisible) return; const targets = statisticsData.map(item => item.number); const start = Date.now(); const animate = () => { const progress = Math.min((Date.now() - start) / 2500, 1); setCounts(targets.map(target => Math.floor(target * progress))); if (progress < 1) requestAnimationFrame(animate) }; requestAnimationFrame(animate) }, [isVisible])
  return <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 py-20"><div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" /><div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" /><div className="relative mx-auto max-w-7xl px-6"><div className="mb-14 text-center"><span className="font-semibold uppercase tracking-widest text-green-100">{t.statistics.eyebrow}</span><h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">{t.statistics.title}</h2><p className="mx-auto mt-5 max-w-3xl text-green-100">{t.statistics.description}</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{statisticsData.map((item, index) => { const Icon = item.icon; return <div key={index} className="rounded-3xl border border-white/20 bg-white/10 p-7 text-center shadow-lg backdrop-blur-lg transition hover:-translate-y-1 hover:bg-white/15"><div className="mb-5 flex justify-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md"><Icon size={30} className="text-green-600" /></div></div><h3 className="text-5xl font-black text-white">{counts[index].toLocaleString(language === 'fr' ? 'fr-FR' : 'en-US')}{item.suffix}</h3><p className="mt-3 text-lg text-green-100">{t.statistics.labels[index]}</p></div> })}</div></div></section>
}
