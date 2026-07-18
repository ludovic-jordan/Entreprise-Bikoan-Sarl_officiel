import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/Entreprise_image/logo-removebg-preview.png'

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-green-600"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Logo animé */}
          <motion.img
            src={logo}
            alt="Bikoan"
            className="w-36 sm:w-44 object-contain drop-shadow-2xl"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Nom de l'entreprise */}
          <motion.h1
            className="text-white text-2xl sm:text-3xl font-bold mt-4 tracking-widest"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            BIKOAN
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-green-100 text-sm sm:text-base mt-1 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Le goût authentique du Cameroun
          </motion.p>

          {/* Barre de chargement */}
          <motion.div
            className="mt-8 h-1 w-32 sm:w-44 bg-white/30 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
