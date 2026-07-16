import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Inscription: React.FC = () => {
  const { t } = useLanguage()

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
        action=""
        className="w-full max-w-md flex flex-col shadow-xl rounded-3xl p-8 bg-white border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <label htmlFor="name" className="font-bold italic mb-1 text-sm">{t.inscription.name}</label>
        <input
          type="text"
          id="name"
          required
          placeholder={t.inscription.namePlaceholder}
          className="border border-gray-300 rounded-xl h-11 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        <label htmlFor="email" className="font-bold italic mb-1 text-sm">{t.inscription.email}</label>
        <input
          type="email"
          id="email"
          required
          placeholder={t.inscription.emailPlaceholder}
          className="border border-gray-300 rounded-xl h-11 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        <label htmlFor="password" className="font-bold italic mb-1 text-sm">{t.inscription.password}</label>
        <input
          type="password"
          id="password"
          required
          placeholder={t.inscription.passwordPlaceholder}
          className="border border-gray-300 hover:border-green-400 rounded-xl h-11 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        <label htmlFor="role" className="font-bold italic mb-1 text-sm">{t.inscription.role}</label>
        <select
          name="role"
          id="role"
          className="border border-gray-300 rounded-xl h-11 px-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        >
          <option value="">{t.inscription.selectRole}</option>
          <option value="agent">{t.inscription.roleOption1}</option>
          <option value="entrepreneur">{t.inscription.roleOption2}</option>
        </select>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="bg-green-600 text-white font-bold rounded-xl py-3 w-full hover:bg-green-800 transition duration-200 cursor-pointer"
        >
          {t.inscription.signup}
        </motion.button>
      </motion.form>
    </div>
  )
}

export default Inscription
