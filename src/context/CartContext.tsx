import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type CartItem = { id: number; name: string; price: number; image?: string; quantity: number }
type CartContextValue = { items: CartItem[]; addItem: (item: Omit<CartItem, 'quantity'>) => void; increase: (id: number) => void; decrease: (id: number) => void; remove: (id: number) => void; total: number; count: number }
const CartContext = createContext<CartContextValue | null>(null)
const KEY = 'bikoan_cart'

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] } })
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(items)), [items])
  const addItem = (item: Omit<CartItem, 'quantity'>) => setItems(current => { const found = current.find(x => x.id === item.id); return found ? current.map(x => x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x) : [...current, { ...item, quantity: 1 }] })
  const increase = (id: number) => setItems(xs => xs.map(x => x.id === id ? { ...x, quantity: x.quantity + 1 } : x))
  const decrease = (id: number) => setItems(xs => xs.flatMap(x => x.id === id ? (x.quantity > 1 ? [{ ...x, quantity: x.quantity - 1 }] : []) : [x]))
  const remove = (id: number) => setItems(xs => xs.filter(x => x.id !== id))
  const value = useMemo(() => ({ items, addItem, increase, decrease, remove, total: items.reduce((sum, x) => sum + x.price * x.quantity, 0), count: items.reduce((sum, x) => sum + x.quantity, 0) }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export const useCart = () => { const value = useContext(CartContext); if (!value) throw new Error('useCart must be used inside CartProvider'); return value }
