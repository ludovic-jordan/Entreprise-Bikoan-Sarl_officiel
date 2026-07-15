import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const connexion:React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useLanguage()

  return (
    <div className='bg-white flex flex-col items-center py-8 px-4'>
        <h2 className='text-3xl font-bold text-green-600 italic shadow-lg w-full max-w-2xl text-center p-6'>
            {t.connexion.title}
        </h2>
        <form action="post" className='w-full flex justify-center'>
            <div className='w-full max-w-md flex flex-col shadow-lg rounded-3xl p-6 bg-white'>
                <label htmlFor="email" className='font-bold italic mb-1'>{t.connexion.email}</label>
                <input type="email" id="email" required placeholder={t.connexion.emailPlaceholder} className='border border-gray-300 rounded-lg h-10 w-full p-3 mb-4'/>

                <label htmlFor="password" className='font-bold italic mb-1'>{t.connexion.password}</label>
                <input type="password" id="password" required placeholder={t.connexion.passwordPlaceholder} className='border border-gray-300 rounded-lg h-10 w-full p-3 mb-4'/>

                <button type="button" className='bg-green-600 text-white font-bold shadow-lg rounded-lg py-2 w-full hover:cursor-pointer hover:bg-green-800'>{t.connexion.login}</button>

            <h4 className='mt-4 text-center'>
                {t.connexion.noAccount} <Link to={`/inscription`}> <span className='font-bold  italic hover:underline hover:text-green-600'>{t.connexion.signup}</span></Link>
            </h4>
             </div>
        </form>
        <h5 className='items-center text-center mt-4'>{t.connexion.thanks}</h5>
    </div>
  )
}

export default connexion