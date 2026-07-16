import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Condition: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="font-bold text-2xl sm:text-3xl text-center text-gray-800 mb-6">
        {t.condition.title}
      </h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed text-center">
        {t.condition.intro}
      </p>
      <ol className="flex flex-col gap-6">
        {[
          { title: t.condition.item1Title, text: t.condition.item1Text },
          { title: t.condition.item2Title, text: t.condition.item2Text },
          { title: t.condition.item3Title, text: t.condition.item3Text },
        ].map((item, i) => (
          <li key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Condition
