const TMDB_URL = 'https://api.themoviedb.org/3'

export default async function handler(request, response) {
  const token = process.env.TMDB_ACCESS_TOKEN
  if (!token) return response.status(500).json({ message: 'TMDB_ACCESS_TOKEN não foi configurado no servidor.' })

  const segments = Array.isArray(request.query.path) ? request.query.path : [request.query.path]
  if (!segments.every(Boolean)) return response.status(400).json({ message: 'Caminho TMDB inválido.' })

  const query = new URLSearchParams()
  Object.entries(request.query).forEach(([key, value]) => {
    if (key !== 'path' && value !== undefined) query.set(key, Array.isArray(value) ? value[0] : value)
  })
  const url = `${TMDB_URL}/${segments.map(encodeURIComponent).join('/')}?${query}`

  try {
    const tmdbResponse = await fetch(url, { headers: { Authorization: `Bearer ${token}`, accept: 'application/json' } })
    const body = await tmdbResponse.json()
    response.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=86400')
    return response.status(tmdbResponse.status).json(body)
  } catch {
    return response.status(502).json({ message: 'Não foi possível consultar o TMDB.' })
  }
}
