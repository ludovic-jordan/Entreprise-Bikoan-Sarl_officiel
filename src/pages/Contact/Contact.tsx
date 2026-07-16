import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

const Contact: React.FC = () => {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
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
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-bold">{t.contact.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={t.contact.namePlaceholder}
            className="border border-gray-300 rounded-xl h-11 px-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-bold">{t.contact.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={t.contact.emailPlaceholder}
            className="border border-gray-300 rounded-xl h-11 px-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tel" className="text-sm font-bold">{t.contact.telephone}</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            required
            placeholder={t.contact.telephone}
            className="border border-gray-300 rounded-xl h-11 px-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-bold">{t.contact.message}</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder={t.contact.messagePlaceholder}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-green-500 text-white font-bold py-3 rounded-3xl cursor-pointer hover:bg-green-700 transition duration-200"
        >
          {t.contact.submit}
        </motion.button>

        {submitted && (
          <motion.p
            className="text-center text-green-600 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ {t.contact.answer}
          </motion.p>
        )}
      </motion.form>

      <motion.p
        className="text-sm text-center text-gray-500 mt-6 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t.contact.answer}
      </motion.p>
    </div>
  )
}

export default Contact
