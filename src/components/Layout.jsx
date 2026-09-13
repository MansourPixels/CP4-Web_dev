import { Clapperboard, ListVideo, Search } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const linkClass = ({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-elevated text-amber' : 'text-muted hover:bg-elevated hover:text-ink'}`

export function Layout({ children, savedCount }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const submit = (event) => { event.preventDefault(); if (query.trim()) navigate(`/buscar?q=${encodeURIComponent(query.trim())}`) }
  return <div className="min-h-screen bg-canvas">
    <header className="sticky top-0 z-30 border-b border-white/10 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex shrink-0 items-center gap-2 font-display font-extrabold"><span className="rounded-lg bg-amber p-1.5 text-canvas"><Clapperboard size={19} /></span><span>Watchlist</span></NavLink>
        <nav className="hidden items-center gap-1 md:flex"><NavLink className={linkClass} to="/">Descobrir</NavLink><NavLink className={linkClass} to="/buscar">Buscar</NavLink><NavLink className={linkClass} to="/minha-lista">Minha Lista {savedCount > 0 && <span className="ml-1 rounded-full bg-amber/15 px-1.5 py-0.5 text-xs text-amber">{savedCount}</span>}</NavLink></nav>
        <form onSubmit={submit} className="ml-auto hidden max-w-md flex-1 md:block"><label className="relative block"><span className="sr-only">Buscar filme ou série</span><Search className="absolute left-3 top-2.5 text-muted" size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar filmes e séries..." className="h-10 w-full rounded-xl border border-white/10 bg-surface pl-10 pr-3 text-sm placeholder:text-muted" /></label></form>
        <div className="ml-auto flex gap-2 md:hidden"><NavLink aria-label="Abrir busca" to="/buscar" className="icon-button"><Search size={18} /></NavLink><NavLink aria-label="Abrir minha lista" to="/minha-lista" className="icon-button"><ListVideo size={18} /></NavLink></div>
      </div>
    </header>
    <main>{children}</main>
  </div>
}
