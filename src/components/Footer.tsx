// import logo, images to the page
import React from 'react'
// import instagram from '../assets/social media/instagram.png'
// import facebook from '../assets/social media/logo facebokok.avif'
// import whatsapp from '../assets/social media/whatsaap2.jpeg'
// import linkedin from '../assets/social media/link.png'
// import github from '../assets/social media/logo github.png'
import mail from '../assets/social media/logo email2.png'
import logo from '../assets/Entreprise_image/logo.jpeg'
import localisation from '../assets/social media/localiser2.png'
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'
// creating a footer of type React.FC and then write the function 
const Footer: React.FC = () => {
    const { t } = useLanguage()

    return (

        // faebd7-antiquewhite
        // 00ffff-aqua
        // f0fff0-honeydew
        // f5f5dc-beige
        // fffafa-ghostwhite



       
     // naming a footer and giving the general style to wish to have

     
        <footer className='w-full bg-black text-white py-6 px-4'>
            <div className=' flex flex-wrap justify-between gap-6 p-4 md:gap-10 md:p-10'>
                {/* the logo and the description of the page */}

                <div className=' flex flex-col items-start text-sm'>
                    <img src={logo} alt="logo de la amsion" className='h-10 w-auto mb-2' />
                    <p>{t.footer.description}</p>
                </div>

                {/* footer of our different pages through which the user can navigate */}
                <div className='text-sm'>
                    <h3 className='font-bold mb-2'><b>{t.footer.pages}</b></h3>
                    <ol className='list-none space-y-1'> <br />
                        <li><Link to={`/home`} className='cursor-pointer italic hover:underline hover:text-green-600 '>{t.nav.home}</Link></li>
                        <li><Link to={`/nosproduit`} className='cursor-pointer italic hover:underline hover:text-green-600'>{t.nav.nosProduits}</Link></li>
                        <li> <Link to={`/apropos`} className='cursor-pointer italic hover:underline hover:text-green-600'>{t.nav.apropos}</Link></li>
                        <li><Link to={`/contact`} className='cursor-pointer italic hover:underline hover:text-green-600'>{t.nav.contact}</Link></li>
                        <li>  <Link to={`/connexion`} className='cursor-pointer italic hover:underline hover:text-green-600'>{t.nav.connexion}</Link></li>
                        <li> <Link to={`/inscription`} className='cursor-pointer italic hover:underline hover:text-green-600'>{t.nav.inscription}</Link></li>

                    </ol>


                    {/* footer of the legacy of the company */}
                </div>
                <div className='text-sm'>
                    <h3 className='font-bold mb-2'> <b>{t.footer.legal}</b></h3>
                    <ol className='list-none space-y-1'> <br />
                        <li><Link to={`/condition`} className='cursor-pointer italic hover:underline hover:text-green-600'>{t.footer.condition}</Link></li>
                        <li><Link to={`/mention`} className='cursor-pointer italic hover:underline hover:text-green-600'>{t.footer.mention}</Link></li>
                        <li><Link to={`/confidentialite`} className='cursor-pointer italic hover:underline hover:text-green-600'>{t.footer.confidentialite}</Link></li>

                    </ol>


                    {/* footer on the differemt ways the user can joint and contact us */}
                </div>
                <div className=' text-sm'>
                    <h3 className='font-bold mb-2'> <b>{t.footer.followUs}</b></h3> <br />
                    <div className='flex gap-2 items-center'>
                        <a
                          href={
                            `mailto:fofeachille@icloud.com?subject=${encodeURIComponent('Demande de contact')}&body=${encodeURIComponent("Bonjour BIKOAN Team,\n\nJe souhaite vous contacter au sujet d'une commande de chips ou de sésame. Merci de me répondre rapidement.\n\nNom :\nTéléphone :\nMessage :\n")}`
                          }
                          className='inline-flex items-center gap-2 hover:text-green-300 transition duration-200'
                        >
                          <img className='fixed-2 h-6 w-8 px-1 cursor-pointer hover:scale-150 transition duration-300' src={mail} alt='Contactez-nous par mail' />
                          <span>{t.footer.sendMail}</span>
                        </a>
                        <Link to={`https://www.google.com/maps/place/Entreprise+Bikoan+Sarl/@3.8967845,11.5429006,19.42z/data=!4m6!3m5!1s0x108bc50044b493df:0x4aa82d934e683fb8!8m2!3d3.8966165!4d11.5429234!16s%2Fg%2F11zcslc91y?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D`}>
                            <img className='fixed-2 h-6 w-8 px-1 cursor-pointer hover:scale-150 transition duration-300' src={localisation} alt='suivez-nous par localisation' />
                        </Link>
                    </div>
                </div>
                <div className='text-center text-sm md:mt-0 mt-4'>
                    {t.footer.rights}
                </div>


            </div>
        </footer>

    )
}

export default Footer;

