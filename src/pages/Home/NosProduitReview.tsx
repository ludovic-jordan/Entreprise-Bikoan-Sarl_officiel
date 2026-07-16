import React from 'react'
import { motion } from 'framer-motion'
import { AnnonceMock } from '../../lib/Mock'
import ProduitCard from '../../components/ProduitCards'
import { useLanguage } from '../../context/LanguageContext'

const NosProduitReview: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="py-8 px-4">
      <motion.h2
        className="text-2xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.home.products}
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {AnnonceMock.slice(0, 6).map((a, index) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
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
    </section>
  )
}

export default NosProduitReview
