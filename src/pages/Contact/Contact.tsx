import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Contact:React.FC = () => {
  const { t } = useLanguage()

  return (





    <div>
        <h2 className='p-4 text-green-600 font-bold italic h-full w-full text-center shadow-lg rounded-2xl text-3xl '>
            {t.contact.title}
        </h2>
            <p className='font-blod text-md '> </p>
            <form className='text-center items-center flex flex-col shadow-lg rounded-3xl p-10 border border-gray-300 '>
                <div className='space-y-5 gap-5'>
                    <label htmlFor="name" className='text-md font-bold italic'>{t.contact.name}</label> <br />
                    <input  type="text" id="name" name="name" required placeholder={t.contact.namePlaceholder} className='border border-gray-300 rounded-2xl h-10 w-100 p-4 '/> <br />
                </div>
                <div className='space-y-5 gap-5'>
                    <label htmlFor="email" className='text-md font-bold italic'>{t.contact.email}</label> <br />
                    <input type="email" id="email" name="email" required placeholder={t.contact.emailPlaceholder} className='border border-gray-300 rounded-2xl h-10 w-100 p-4'/> <br />
                </div>
                <div className='space-y-5 gap-5'>
                    <label htmlFor="message" className='text-md font-bold italic'>{t.contact.message}</label> <br />
                    <textarea id="message" name="message" required placeholder={t.contact.messagePlaceholder} className='border border-gray-300 h-30 w-100 rounded-lg p-4'></textarea> <br />
                </div>
                <button type="submit" className='bg-green-500 text-white font-bold h-10 w-50 rounded-3xl cursor-pointer hover:bg-green-700'>{t.contact.submit}</button>
            </form>
            <p className='text-md font-bold italic text-center items-center'>{t.contact.answer}</p>
    </div>
  )
}

export default Contact