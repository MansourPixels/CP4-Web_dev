import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { tmdb } from '../api/tmdb'
import { MediaGrid } from '../components/MediaCard'
import { ErrorMessage } from './HomePage'

export default function SearchPage({ library }) {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') || '')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    if (!query.trim()) { setResults([]); return }
    const timer = setTimeout(() => {
      setLoading(true); setError(''); setParams({ q: query })
      tmdb.search(query).then((data) => setResults(data.results.filter((item) => item.media_type === 'movie' || item.media_type === 'tv'))).catch((err) => setError(err.message)).finally(() => setLoading(false))
    }, 400)
    return () => clearTimeout(timer)
  }, [query, setParams])
  return <div className="page"><h1 className="font-display text-3xl font-extrabold">Buscar</h1><label className="relative mt-6 block max-w-2xl"><span className="sr-only">Termo de busca</span><Search className="absolute left-4 top-3.5 text-muted" size={20} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filmes, séries, atores..." className="h-12 w-full rounded-xl border border-white/10 bg-surface pl-12 pr-4" /></label>
    {error ? <ErrorMessage message={error} /> : query && <MediaGrid title={loading ? 'Buscando...' : `${results.length} resultados para “${query}”`} items={results} library={library} loading={loading} />}
    {!query && <p className="mt-10 text-muted">Digite um título para começar a explorar o catálogo.</p>}
    {query && !loading && !results.length && !error && <p className="mt-10 text-muted">Nenhum filme ou série encontrado.</p>}
  </div>
}
