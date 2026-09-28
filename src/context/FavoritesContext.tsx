import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
type FavoritesContextValue = { favoriteIds: number[]; toggleFavorite: (id: number) => void; isFavorite: (id: number) => boolean }
const FavoritesContext = createContext<FavoritesContextValue | null>(null)
const KEY = 'bikoan_favorites'
export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] } })
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(favoriteIds)), [favoriteIds])
  const value = useMemo(() => ({ favoriteIds, toggleFavorite: (id: number) => setFavoriteIds(ids => ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id]), isFavorite: (id: number) => favoriteIds.includes(id) }), [favoriteIds])
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
export const useFavorites = () => { const value = useContext(FavoritesContext); if (!value) throw new Error('useFavorites must be used inside FavoritesProvider'); return value }
