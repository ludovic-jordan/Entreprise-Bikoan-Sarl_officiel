import React from "react";
import { useLanguage } from '../../context/LanguageContext'

const Apropos: React.FC = () => {
    const { t } = useLanguage()
    return (
        <div className='text-italics'>
            <div>
            <h2 className='p-4 text-green-600 font-bold align-middle h-full w-full text-center shadow-lg rounded-2xl'>{t.apropos.title}</h2>
                <div className="align-middle h-full w-full text-center shadow-lg rounded-2xl ">
                    <p>{t.apropos.paragraph1}</p>
                    <br />
                    <p>{t.apropos.paragraph2}</p>
                </div>
            </div>

        </div>

    )
}




export default Apropos;



