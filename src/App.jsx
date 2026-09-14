import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'
import ListPage from './pages/ListPage'
import NotFoundPage from './pages/NotFoundPage'
import { useMediaLibrary } from './hooks/useMediaLibrary'

export default function App() {
  const library = useMediaLibrary()
  return <Layout savedCount={library.items.length}><Routes><Route path="/" element={<HomePage library={library} />} /><Route path="/buscar" element={<SearchPage library={library} />} /><Route path="/:mediaType/:id" element={<DetailPage library={library} />} /><Route path="/minha-lista" element={<ListPage library={library} />} /><Route path="*" element={<NotFoundPage />} /></Routes></Layout>
}
