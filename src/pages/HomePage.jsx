import { useEffect, useState } from 'react'
import { ArrowRight, } from 'lucide-react'
import { Link } from 'react-router-dom'
import { tmdb } from '../api/tmdb'
import { MediaGrid } from '../components/MediaCard'

export default function HomePage({ library }) {
  const [data, setData] = useState({ trending: [], movies: [], shows: [] })
  const [error, setError] = useState('')
  useEffect(() => {
    Promise.all([tmdb.trending(), tmdb.popular('movie'), tmdb.popular('tv')])
      .then(([trending, movies, shows]) => setData({ trending: trending.results.filter((item) => item.media_type !== 'person').slice(0, 5), movies: movies.results.slice(0, 5), shows: shows.results.slice(0, 5) }))
      .catch((err) => setError(err.message))
  }, [])
  if (error) return <div className="page"><ErrorMessage message={error} /></div>
  return <>
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-elevated via-canvas to-canvas">
      <div className="page py-16 sm:py-24">
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">Descubra e acompanhe sua próxima <em className="text-amber">obsessão</em>.</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">Encontre filmes e séries, salve os favoritos e não perca mais o ponto em que parou.</p>
        <Link className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber px-5 py-3 font-bold text-canvas transition hover:bg-yellow-300" to="/buscar">Explorar catálogo <ArrowRight size={18} /></Link>
      </div>
    </section>
    <div className="page"><MediaGrid title="Em alta esta semana" items={data.trending} library={library} loading={!data.trending.length} /><MediaGrid title="Filmes populares" items={data.movies} library={library} loading={!data.movies.length} /><MediaGrid title="Séries para maratonar" items={data.shows} library={library} loading={!data.shows.length} /></div>
  </>
}

export function ErrorMessage({ message }) { return <div role="alert" className="panel mt-8 p-6 text-center"><h1 className="font-display text-xl font-bold">Algo saiu de cena</h1><p className="mt-2 text-muted">{message}</p></div> }
