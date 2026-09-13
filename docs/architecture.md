# Arquitetura

## Rotas

`/` descoberta; `/buscar?q=` busca; `/:mediaType/:id` detalhe dinâmico; `/minha-lista` coleção local. `Layout` mantém cabeçalho e navegação em todas as rotas.

## Componentes e contratos

- `MediaCard({ media, library, compact })`: card normalizado para movie/tv e ações pessoais.
- `MediaGrid({ title, items, library, loading })`: grade e skeletons.
- `Layout({ children, savedCount })`: shell e busca global.
- `DetailPage({ library })`: ações, nota, provedores e episódios.
- `library` expõe `items`, `episodes`, `find(media)`, `toggle(media, field)`, `setRating(media, rating)` e `toggleEpisode(showId, season, episode)`.

## Dados e efeitos

`src/api/tmdb.js` centraliza `fetch`, token Bearer e normalização. As páginas usam `useEffect` para carregar catálogo, busca, detalhe/provedores e temporada. `useMediaLibrary` armazena `watchlist:v1` e `watchlist:episodes:v1` no `localStorage`; cada item contém `id`, `mediaType`, metadados mínimos, `saved`, `favorite`, `watched`, `rating` e `updatedAt`.
