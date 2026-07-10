import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const connexion:React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useLanguage()

  return (
    <div className='bg-white flex flex-col items-center '>
        <h2 className='text-3xl font-bold text-green-600 italic shadow-lg w-full h-full text-center p-6'>
            {t.connexion.title}
        </h2>  <br />
        <form action="post">
            <div className='flex flex-col shadow-lg rounded-3xl p-5'>
                <label htmlFor="email" className='font-bold italic'>{t.connexion.email}</label>  <br />
                <input type="email" id="email" required placeholder={t.connexion.emailPlaceholder} className='border border-gray-300 rounded-2xl h-10 w-100 p-4'/> <br />
                <label htmlFor="password" className='font-bold italic'>{t.connexion.password}</label> <br />
                <input type="password" id="password" required placeholder={t.connexion.passwordPlaceholder} className='border border-gray-300 rounded-2xl h-10 w-100 p-4'/> <br />
                <button type="button" className='bg-green-600 text-white font-bold shadow-lg rounded-3xl h-10 w-100 hover:cursor-pointer hover:bg-green-800'>{t.connexion.login}</button> <br />
           
            <h4 className='justify-between'>
                {t.connexion.noAccount} <Link to={`/inscription`}> <span className='font-bold  italic hover:underline hover:text-green-600'>{t.connexion.signup}</span></Link> <br />
                {t.connexion.forgotPassword} <Link to={`/inscription`}> <span className='font-bold  italic hover:underline hover:text-green-600'>{t.connexion.clickHere}</span></Link>
            </h4>
             </div>
             <h5 className='items-center text-center'>{t.connexion.thanks}</h5>
        </form>
    </div>
  )
}

export default connexion