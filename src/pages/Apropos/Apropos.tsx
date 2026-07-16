import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import logo from '../../assets/Entreprise_image/logo-removebg-preview.png'

const Apropos: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Logo animé */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="Bikoan logo" className="h-24 w-auto" />
        </motion.div>

        {/* Titre */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.apropos.title}
        </motion.h2>

        {/* Paragraphes */}
        {[t.apropos.paragraph1, t.apropos.paragraph2].map((text, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 mb-6"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <p className="text-gray-700 leading-relaxed text-base">{text}</p>
          </motion.div>
        ))}

        {/* Valeurs */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            { emoji: '🌿', label: t.whyChooseUs.item1Title, desc: t.whyChooseUs.item1Desc },
            { emoji: '✅', label: t.whyChooseUs.item2Title, desc: t.whyChooseUs.item2Desc },
            { emoji: '🚚', label: t.whyChooseUs.item3Title, desc: t.whyChooseUs.item3Desc },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h3 className="font-semibold text-green-800 mb-1">{item.label}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Apropos
