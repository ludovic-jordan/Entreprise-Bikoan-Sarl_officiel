import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Inscription:React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className='bg-white flex flex-col items-center'>
        <h2 className='text-3xl font-bold text-green-600 italic shadow-lg rounded-3xl w-full h-full text-center p-6'>
            {t.inscription.title}
        </h2>
    <form action="">
        <div className=' flex flex-col shadow-lg rounded-3xl p-5 m-[3px] w-130'>
            <label htmlFor="text" className='font-bold italic'>{t.inscription.name}</label><br />
            <input type="text" id="text" required placeholder={t.inscription.namePlaceholder} className='border border-black-600 rounded-2xl h-10 w-110 p-4'/> <br />
            <label htmlFor="email" className='font-bold italic'>{t.inscription.email}</label><br />
            <input type="email" id="email" required placeholder={t.inscription.emailPlaceholder} className='border border-black-600 rounded-2xl h-10 w-110 p-4'/><br />
            <label htmlFor="password" className='font-bold italic'>{t.inscription.password}</label><br />
            <input type="password" id="password" required placeholder={t.inscription.passwordPlaceholder} className='border border-black-600 hover:border-green-600 rounded-2xl h-10 w-110 p-4'/><br />
            <label htmlFor="text" className='font-bold italic'>{t.inscription.role}</label><br />
            <select name="text" id="text" className='border border-black-600 rounded-2xl h-10 w-110'>
              <option value="text">{t.inscription.roleOption1}</option>
              <option value="text">{t.inscription.roleOption2}</option>
            </select><br />
            <button type='submit' className='bg-green-600 text-white font-bold shadow-lg rounded-3xl h-10 w-110 hover:cursor-pointer hover:bg-green-800'>{t.inscription.signup}</button>
        </div>
    </form>

    </div>
  )
}

export default Inscription