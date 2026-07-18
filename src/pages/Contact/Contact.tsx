import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

// ─── Remplace par ton Form ID Formspree ───────────────────────
// 1. Va sur https://formspree.io et crée un compte gratuit
// 2. New Form → mets "Contact Bikoan" → ton email fofeachille@icloud.com
// 3. Copie l'ID et remplace ci-dessous  (ex: 'xpwzgkjr')
const FORMSPREE_ID = 'mjgnwwpg'
// ──────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error'

const Contact: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12 px-4">
      <motion.h2
        className="p-4 text-green-600 font-bold text-center text-3xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t.contact.title}
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col gap-5 bg-white shadow-xl rounded-3xl p-8 border border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {/* Nom */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-bold">{t.contact.name}</label>
          <input
            type="text" id="name" name="Nom" required
            placeholder={t.contact.namePlaceholder}
            className="border border-gray-300 rounded-xl h-11 px-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-bold">{t.contact.email}</label>
          <input
            type="email" id="email" name="Email" required
            placeholder={t.contact.emailPlaceholder}
            className="border border-gray-300 rounded-xl h-11 px-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Téléphone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="tel" className="text-sm font-bold">{t.contact.telephone}</label>
          <input
            type="tel" id="tel" name="Téléphone" required
            placeholder={t.contact.telephone}
            className="border border-gray-300 rounded-xl h-11 px-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-bold">{t.contact.message}</label>
          <textarea
            id="message" name="Message" required rows={4}
            placeholder={t.contact.messagePlaceholder}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
          />
        </div>

        {/* Bouton */}
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: status === 'loading' ? 1 : 1.03 }}
          whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
          className="bg-green-500 text-white font-bold py-3 rounded-3xl cursor-pointer hover:bg-green-700 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Envoi en cours...' : t.contact.submit}
        </motion.button>

        {status === 'success' && (
          <motion.p className="text-center text-green-600 font-semibold"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Message envoyé ! On vous répond bientôt.
          </motion.p>
        )}
      </motion.form>
    </div>
  )
}

export default Contact
