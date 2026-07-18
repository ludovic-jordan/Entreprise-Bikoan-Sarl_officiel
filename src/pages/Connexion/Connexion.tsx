import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

// ─── Remplace par ton Form ID Formspree ───────────────────────
// 1. Va sur https://formspree.io → New Form → "Connexion Bikoan"
// 2. Copie l'ID et remplace ci-dessous
const FORMSPREE_ID = 'mwvgoowj'
// ──────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error'

const Connexion: React.FC = () => {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('success')
      }
      e.currentTarget.reset()
    } catch {
      setStatus('success')
    }

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
        {t.connexion.title}
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col shadow-xl rounded-3xl p-8 bg-white border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {/* Email */}
        <label htmlFor="email" className="font-bold italic mb-1 text-sm">{t.connexion.email}</label>
        <input
          type="email" id="email" name="Email" required
          placeholder={t.connexion.emailPlaceholder}
          className="border border-gray-300 rounded-xl h-11 px-4 mb-5 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        {/* Mot de passe */}
        <label htmlFor="password" className="font-bold italic mb-1 text-sm">{t.connexion.password}</label>
        <input
          type="password" id="password" name="Mot de passe" required
          placeholder={t.connexion.passwordPlaceholder}
          className="border border-gray-300 rounded-xl h-11 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        {/* Bouton */}
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
          whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
          className="bg-green-600 text-white font-bold rounded-xl py-3 w-full hover:bg-green-800 transition duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Envoi en cours...' : t.connexion.login}
        </motion.button>

        {status === 'success' && (
          <motion.p className="text-center text-green-600 font-semibold mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Connexion reçue !
          </motion.p>
        )}

        <p className="mt-5 text-center text-sm">
          {t.connexion.noAccount}{' '}
          <Link to="/inscription">
            <span className="font-bold italic hover:underline hover:text-green-600 transition">
              {t.connexion.signup}
            </span>
          </Link>
        </p>
      </motion.form>

      <p className="text-center text-sm text-gray-500 mt-4 italic">{t.connexion.thanks}</p>
    </div>
  )
}

export default Connexion
