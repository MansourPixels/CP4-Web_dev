import { Check, Heart, Plus, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dateOf, image, mediaType, titleOf } from '../api/tmdb'

export function MediaCard({ media, library, compact = false }) {
  const normalized = { id: media.id, mediaType: mediaType(media), title: titleOf(media), posterPath: media.poster_path || media.posterPath, date: dateOf(media) || media.date, voteAverage: media.vote_average ?? media.voteAverage ?? 0 }
  const saved = library.find(normalized)
  return <article className="group min-w-0">
    <Link to={`/${normalized.mediaType}/${normalized.id}`} className="relative block aspect-[2/3] overflow-hidden rounded-xl bg-elevated shadow-lg transition duration-200 group-hover:-translate-y-1 group-hover:shadow-poster">
      {normalized.posterPath ? <img className="h-full w-full object-cover" src={image(normalized.posterPath)} alt={`Pôster de ${normalized.title}`} loading="lazy" /> : <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted">Imagem indisponível</div>}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
      {normalized.voteAverage > 0 && <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-bold text-amber"><Star size={12} fill="currentColor" />{normalized.voteAverage.toFixed(1)}</span>}
      {saved?.watched && <span className="absolute left-2 top-2 rounded-full bg-emerald p-1 text-canvas" aria-label="Marcado como assistido"><Check size={14} /></span>}
    </Link>
    <div className="pt-3">
      <Link to={`/${normalized.mediaType}/${normalized.id}`} className="line-clamp-1 font-display font-bold text-ink hover:text-amber">{normalized.title}</Link>
      <p className="mt-1 text-xs text-muted">{normalized.date?.slice(0, 4) || 'Data indisponível'} · {normalized.mediaType === 'tv' ? 'Série' : 'Filme'}</p>
      {saved?.rating > 0 && <p className="mt-2 flex items-center gap-1 text-xs font-bold text-amber"><Star size={14} fill="currentColor" />Sua nota: {saved.rating}/5</p>}
      {!compact && <div className="mt-3 flex gap-2">
        <button className="icon-button h-8 w-8" aria-label={`Adicionar ${normalized.title} à lista`} onClick={() => library.toggle(normalized, 'saved')}><Plus size={16} /></button>
        <button className={`icon-button h-8 w-8 ${saved?.favorite ? 'text-red-400' : ''}`} aria-label={`Favoritar ${normalized.title}`} onClick={() => library.toggle(normalized, 'favorite')}><Heart size={16} fill={saved?.favorite ? 'currentColor' : 'none'} /></button>
      </div>}
    </div>
  </article>
}

export function MediaGrid({ title, items, library, loading }) {
  return <section className="py-7">
    <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
    {loading ? <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{Array.from({ length: 5 }).map((_, i) => <div key={i} className="aspect-[2/3] animate-pulse rounded-xl bg-elevated" />)}</div> :
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">{items.map((item) => <MediaCard key={`${mediaType(item)}-${item.id}`} media={item} library={library} />)}</div>}
  </section>
}
