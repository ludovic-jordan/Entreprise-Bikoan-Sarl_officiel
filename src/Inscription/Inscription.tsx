import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Inscription:React.FC = () => {
  const { t } = useLanguage()

  return (
      <div className='bg-white flex flex-col items-center py-8 px-4'>
          <h2 className='text-3xl font-bold text-green-600 italic shadow-lg rounded-3xl w-full max-w-2xl text-center p-6'>
              {t.inscription.title}
          </h2>
          <form action="" className='w-full flex justify-center'>
          <div className='w-full max-w-md flex flex-col shadow-lg rounded-3xl p-6 mx-2 bg-white'>
              <label htmlFor="text" className='font-bold italic mb-1'>{t.inscription.name}</label>
              <input type="text" id="text" required placeholder={t.inscription.namePlaceholder} className='border border-gray-300 rounded-lg h-10 w-full p-3 mb-4'/>

              <label htmlFor="email" className='font-bold italic mb-1'>{t.inscription.email}</label>
              <input type="email" id="email" required placeholder={t.inscription.emailPlaceholder} className='border border-gray-300 rounded-lg h-10 w-full p-3 mb-4'/>

              <label htmlFor="password" className='font-bold italic mb-1'>{t.inscription.password}</label>
              <input type="password" id="password" required placeholder={t.inscription.passwordPlaceholder} className='border border-gray-300 hover:border-green-600 rounded-lg h-10 w-full p-3 mb-4'/>

              <label htmlFor="role" className='font-bold italic mb-1'>{t.inscription.role}</label>
              <select name="role" id="role" className='border border-gray-300 rounded-lg h-10 w-full p-2 mb-4'>
                <option value="text">{t.inscription.roleOption1}</option>
                <option value="text">{t.inscription.roleOption2}</option>
              </select>

              <button type='submit' className='bg-green-600 text-white font-bold shadow-lg rounded-lg py-2 w-full hover:cursor-pointer hover:bg-green-800'>{t.inscription.signup}</button>
            </div>
      </form>

      </div>
  )
}

export default Inscription