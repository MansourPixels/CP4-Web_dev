const API_URL = "/api/tmdb"
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
const BACKDROP_URL = "https://image.tmdb.org/t/p/original"

async function get(path, params = {}) {
  const url = new URL(`${API_URL}${path}`, window.location.origin)
  Object.entries({ language: "pt-BR", ...params }).forEach(([key, value]) => value && url.searchParams.set(key, value))
  const response = await fetch(url)
  if (!response.ok) throw new Error("Não foi possível carregar os dados do TMDB.")
  return response.json()
}

export const image = (path, backdrop = false) => path ? `${backdrop ? BACKDROP_URL : IMAGE_URL}${path}` : null
export const mediaType = (item) => {
  if (item.mediaType === "movie" || item.mediaType === "tv") return item.mediaType
  if (item.media_type === "movie" || item.media_type === "tv") return item.media_type
  return item.title ? "movie" : "tv"
}
export const titleOf = (item) => item.title || item.name || "Título sem nome"
export const dateOf = (item) => item.release_date || item.first_air_date || ""

export const tmdb = {
  trending: () => get("/trending/all/week"),
  popular: (type) => get(`/${type}/popular`),
  search: (query) => get("/search/multi", { query, include_adult: "false" }),
  details: (type, id) => get(`/${type}/${id}`, { append_to_response: "credits,recommendations,videos" }),
  providers: (type, id) => get(`/${type}/${id}/watch/providers`, { language: null }),
  season: (id, seasonNumber) => get(`/tv/${id}/season/${seasonNumber}`),
}
