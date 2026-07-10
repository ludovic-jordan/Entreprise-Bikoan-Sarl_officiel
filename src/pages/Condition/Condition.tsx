import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Condition:React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className='items-start text-center shadow-lg rounded-lg h-full w-full'>
      <h2  className='font-bold text-3xl'>
        {t.condition.title}
      </h2>
      <p>
        {t.condition.intro}
      </p> <br />
      <ol>
        <li className='font-bold text-lg'>{t.condition.item1Title}</li>
        <p>
          {t.condition.item1Text}
        </p> <br />
        <li className='font-bold text-lg'>{t.condition.item2Title}</li>
        <p>
          {t.condition.item2Text}
        </p><br />
        <li className='font-bold text-lg'>{t.condition.item3Title}</li>
        <p>
          {t.condition.item3Text}
        </p>
      </ol>
    </div>
  )
}

export default Condition