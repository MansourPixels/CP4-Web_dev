import { act, renderHook } from '@testing-library/react'
import { beforeEach, expect, test } from 'vitest'
import { useMediaLibrary } from './useMediaLibrary'

const media = { id: 42, mediaType: 'tv', title: 'Série de teste' }
beforeEach(() => localStorage.clear())

test('salva status e avaliação no armazenamento local', () => {
  const { result } = renderHook(() => useMediaLibrary())
  act(() => { result.current.toggle(media, 'saved'); result.current.setRating(media, 4) })
  expect(result.current.find(media)).toMatchObject({ saved: true, rating: 4 })
  expect(JSON.parse(localStorage.getItem('watchlist:v1'))).toHaveLength(1)
})

test('alterna um episódio assistido', () => {
  const { result } = renderHook(() => useMediaLibrary())
  act(() => result.current.toggleEpisode(42, 1, 3))
  expect(result.current.episodes['42:1:3']).toBe(true)
})
