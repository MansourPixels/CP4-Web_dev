const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
const BACKDROP_URL = 'https://image.tmdb.org/t/p/original'

function headers() {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN
  if (!token) throw new Error('Configure VITE_TMDB_ACCESS_TOKEN no arquivo .env.local.')
  return { Authorization: `Bearer ${token}`, accept: 'application/json' }
}

async function get(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`)
  Object.entries({ language: 'pt-BR', ...params }).forEach(([key, value]) => value && url.searchParams.set(key, value))
  const response = await fetch(url, { headers: headers() })
  if (!response.ok) throw new Error('Não foi possível carregar os dados do TMDB.')
  return response.json()
}

export const image = (path, backdrop = false) => path ? `${backdrop ? BACKDROP_URL : IMAGE_URL}${path}` : null
export const mediaType = (item) => item.media_type === 'movie' || item.title ? 'movie' : 'tv'
export const titleOf = (item) => item.title || item.name || 'Título sem nome'
export const dateOf = (item) => item.release_date || item.first_air_date || ''

export const tmdb = {
  trending: () => get('/trending/all/week'),
  popular: (type) => get(`/${type}/popular`),
  search: (query) => get('/search/multi', { query, include_adult: 'false' }),
  details: (type, id) => get(`/${type}/${id}`, { append_to_response: 'credits,recommendations,videos' }),
  providers: (type, id) => get(`/${type}/${id}/watch/providers`, { language: null }),
  season: (id, seasonNumber) => get(`/tv/${id}/season/${seasonNumber}`),
}
