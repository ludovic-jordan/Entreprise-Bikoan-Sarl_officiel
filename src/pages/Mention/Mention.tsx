import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Mention:React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className='text-center '>
        <h2 className='font-bold text-3xl'>
            {t.mention.title}
        </h2> <br />
        <p>
            {t.mention.text}
        </p>
    </div>
  )
}

export default Mention