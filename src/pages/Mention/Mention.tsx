import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Mention: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h2 className="font-bold text-2xl sm:text-3xl text-gray-800 mb-6">
        {t.mention.title}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {t.mention.text}
      </p>
    </div>
  )
}

export default Mention
