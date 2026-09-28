import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { API_URL, saveAuthUser } from '../lib/auth'
import { useNavigate } from 'react-router-dom'

type Status = 'idle' | 'loading' | 'success' | 'error'

const Inscription: React.FC = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // 1. Gestion des états des champs pour maîtriser l'envoi JSON
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    role: '' // Stockera "Agent" ou "Entrepreneur"
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // 2. Appel vers ton serveur PHP local (port 8000)
      const res = await fetch(`${API_URL}?action=register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(formData),
      })
      
      const data = await res.json()

      if (res.ok && data.status === 'success') {
        saveAuthUser(data.user)
        setStatus('success')
        // Réinitialisation du formulaire
        setFormData({ full_name: '', email: '', password: '', role: '' })
        setTimeout(() => navigate('/home'), 700)
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Une erreur est survenue lors de l\'inscription.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMessage('Impossible de contacter le serveur backend.')
    }

    // Repasser à l'état initial après 5 secondes pour effacer les messages
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col items-center py-12 px-4">
      <motion.h2
        className="text-3xl font-bold text-green-600 italic text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        {t.inscription.title}
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col shadow-xl rounded-3xl p-8 bg-white border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {/* Nom */}
        <label htmlFor="name" className="font-bold italic mb-1 text-sm">{t.inscription.name}</label>
        <input
          type="text" id="name" name="full_name" required
          value={formData.full_name} onChange={handleChange}
          placeholder={t.inscription.namePlaceholder}
          className="border border-gray-300 rounded-xl h-11 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        {/* Email */}
        <label htmlFor="email" className="font-bold italic mb-1 text-sm">{t.inscription.email}</label>
        <input
          type="email" id="email" name="email" required
          value={formData.email} onChange={handleChange}
          placeholder={t.inscription.emailPlaceholder}
          className="border border-gray-300 rounded-xl h-11 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        {/* Mot de passe */}
        <label htmlFor="password" className="font-bold italic mb-1 text-sm">{t.inscription.password}</label>
        <input
          type="password" id="password" name="password" required
          value={formData.password} onChange={handleChange}
          placeholder={t.inscription.passwordPlaceholder}
          className="border border-gray-300 hover:border-green-400 rounded-xl h-11 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        {/* Rôle */}
        <label htmlFor="role" className="font-bold italic mb-1 text-sm">{t.inscription.role}</label>
        <select
          id="role" name="role" required
          value={formData.role} onChange={handleChange}
          className="border border-gray-300 rounded-xl h-11 px-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        >
          <option value="">{t.inscription.selectRole}</option>
          <option value="Agent">{t.inscription.roleOption1}</option>
          <option value="Entrepreneur">{t.inscription.roleOption2}</option>
        </select>

        {/* Bouton */}
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
          whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
          className="bg-green-600 text-white font-bold rounded-xl py-3 w-full hover:bg-green-800 transition duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Envoi en cours...' : t.inscription.signup}
        </motion.button>

        {/* Messages de retour à l'utilisateur */}
        {status === 'success' && (
          <motion.p className="text-center text-green-600 font-semibold mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Inscription réussie en base de données !
          </motion.p>
        )}

        {status === 'error' && (
          <motion.p className="text-center text-red-600 font-semibold mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {errorMessage}
          </motion.p>
        )}
      </motion.form>
    </div>
  )
}

export default Inscription
