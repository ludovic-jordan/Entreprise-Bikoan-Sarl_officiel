import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Confidentialite: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="font-bold text-2xl sm:text-3xl text-center text-gray-800 mb-6">
        {t.confidentialite.title}
      </h2>

      <div className="flex flex-col gap-5">
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t.confidentialite.intro}</p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t.confidentialite.usage}</p>

        {[
          { title: t.confidentialite.collectTitle,  text: t.confidentialite.collectText },
          { title: t.confidentialite.cookieTitle,   text: t.confidentialite.cookieText },
          { title: t.confidentialite.rightsTitle,   text: t.confidentialite.rightsText },
        ].map((section, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-base sm:text-xl text-gray-800 mb-2">{section.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Confidentialite
