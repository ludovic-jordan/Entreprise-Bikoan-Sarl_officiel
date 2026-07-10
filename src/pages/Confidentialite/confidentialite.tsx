import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Confidentialite:React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className='text-center'>
        <h2 className='font-bold text-3xl '>{t.confidentialite.title}</h2> <br />
        <p>
            {t.confidentialite.intro}
        </p> 
        <p>
            {t.confidentialite.usage}
        </p>
        <h3 className='font-bold text-2xl'>{t.confidentialite.collectTitle}</h3> <br /> 
        <p>{t.confidentialite.collectText}</p>
        <h3 className='font-bold text-2xl'>{t.confidentialite.cookieTitle}</h3>
        <p>
            {t.confidentialite.cookieText}
        </p> <br />
        <h3 className='font-bold text-2xl'>{t.confidentialite.rightsTitle}</h3> <br />
        <p>
            {t.confidentialite.rightsText}
        </p>
    </div>
  )
}

export default Confidentialite
