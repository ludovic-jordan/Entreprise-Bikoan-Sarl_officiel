import React from 'react'
import { motion } from 'framer-motion'
import { AnnonceMock } from '../../lib/Mock'
import ProduitCard from '../../components/ProduitCards'
import { useLanguage } from '../../context/LanguageContext'

const NosProduit: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        {t.nav.nosProduits}
      </motion.h1>

      <motion.p
        className="text-center text-gray-500 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.15 }}
      >
        {t.nosproduit.description}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {AnnonceMock.map((a, index) => (
          <motion.div
            key={a.id}
            className="flex h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <ProduitCard
              id={a.id}
              titre={a.titre}
              titreEn={a.titreEn}
              ville={a.ville}
              villeEn={a.villeEn}
              prix={a.prix}
              images={a.images}
              text={a.text}
              textEn={a.textEn}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default NosProduit
