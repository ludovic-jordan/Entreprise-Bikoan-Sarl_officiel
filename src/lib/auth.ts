export type AuthUser = { id: number; name: string; email: string; role: string }
// The PHP server's document root is the backend/public directory.
export const API_URL = 'http://localhost:8000/index.php'
export const getAuthUser = (): AuthUser | null => { try { return JSON.parse(localStorage.getItem('bikoan_user') || 'null') } catch { return null } }
export const saveAuthUser = (user: AuthUser) => {
  localStorage.setItem('bikoan_user', JSON.stringify(user))
  window.dispatchEvent(new Event('bikoan-auth-changed'))
}
export const clearAuthUser = () => {
  localStorage.removeItem('bikoan_user')
  window.dispatchEvent(new Event('bikoan-auth-changed'))
}
