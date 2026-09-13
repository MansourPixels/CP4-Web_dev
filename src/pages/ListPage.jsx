import { useEffect, useMemo, useState } from 'react'
import { MediaCard } from '../components/MediaCard'
import { tmdb, dateOf, titleOf } from '../api/tmdb'

const filters = [['all', 'Todos'], ['saved', 'Quero assistir'], ['watched', 'Assistidos'], ['favorite', 'Favoritos']]
export default function ListPage({ library }) {
  const [filter, setFilter] = useState('all')
  const items = useMemo(() => library.items.filter((item) => filter === 'all' || item[filter]), [library.items, filter])
  const watching = useMemo(() => library.items.filter((item) => item.mediaType === 'tv' && !item.watched && Object.keys(library.episodes).some((key) => key.startsWith(`${item.id}:`) && library.episodes[key])), [library.items, library.episodes])
  useEffect(() => {
    library.items.filter((item) => !item.voteAverage).forEach((item) => {
      tmdb.details(item.mediaType, item.id).then((details) => library.ensure({ ...item, title: titleOf(details), date: dateOf(details), posterPath: details.poster_path || item.posterPath, voteAverage: details.vote_average || 0 })).catch(() => {})
    })
  }, [library.items])
  return <div className="page"><h1 className="font-display text-3xl font-extrabold">Minha Lista</h1><p className="mt-2 text-muted">Sua coleção fica salva neste navegador.</p>{watching.length > 0 && <section className="mt-8"><h2 className="font-display text-2xl font-bold">Séries em andamento</h2><p className="mt-1 text-sm text-muted">Continue de onde parou.</p><div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">{watching.map((item) => <MediaCard key={`watching-${item.id}`} media={{ ...item, media_type: item.mediaType }} library={library} />)}</div></section>}<div className="mt-8 flex flex-wrap gap-2">{filters.map(([value, label]) => <button key={value} onClick={() => setFilter(value)} className={`chip transition ${filter === value ? 'bg-amber text-canvas' : 'hover:text-ink'}`}>{label}</button>)}</div>
    {items.length ? <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">{items.map((item) => <MediaCard key={`${item.mediaType}-${item.id}`} media={{ ...item, media_type: item.mediaType }} library={library} />)}</div> : <div className="panel mt-8 p-8 text-center"><h2 className="font-display text-xl font-bold">Sua lista está vazia</h2><p className="mt-2 text-muted">Adicione títulos pelo catálogo para encontrá-los aqui.</p></div>}
  </div>
}
