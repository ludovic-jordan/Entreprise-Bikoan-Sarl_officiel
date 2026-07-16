import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import NosProduitReview from './NosProduitReview'
import Localisation from '../Localisation/Localise'
import ListDesDescributeur from '../ListDesDescributeur/ListDesDescributeur'
import Entreprise from '../Entreprise/Entreprise'
import Prepare from '../Prepare/Prepare'
import { useLanguage } from '../../context/LanguageContext'
import WhyChooseUsData from '../WhyChooseUs/WhyChooseUs';
import Statistics from '../Statistics/Statistics'

export const Home: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className='flex flex-col gap-10'>
      <Hero />
      <WhyChooseUsData />

      <Statistics />

      <div className='flex flex-col gap-14 px-4 pb-10'>
        <section className='home-card home-card-glow'>
          <div className='home-card-header'>
            <h2 className='home-section-title'>{t.home.products}</h2>
            <Link to='/nosproduit' className='home-link'>{t.home.viewMore}</Link>
          </div>
          <p className='home-section-text'>Découvrez notre gamme de chips croustillantes et de graines de sésame soigneusement sélectionnées, prêtes à régaler vos clients.</p>
          <NosProduitReview />
        </section>

        <section className='home-card home-card-hover'>
          <div className='home-card-header'>
            <h2 className='home-section-title'>{t.home.distributorsTitle}</h2>
            <Link to='/distributeurs' className='home-link'>{t.home.distributorsTitle}</Link>
          </div>
          <p className='home-section-text'>{t.home.distributorsText}</p>
          <ListDesDescributeur />
        </section>

        <section className='home-card home-card-hover'>
          <div className='home-card-header'>
            <h2 className='home-section-title'>{t.home.entrepriseTitle}</h2>
            <Link to='/entreprise' className='home-link'>{t.home.viewMore}</Link>
          </div>
          <p className='home-section-text'>{t.home.entrepriseText}</p>
          <Entreprise />
        </section>

        <section className='home-card home-card-hover'>
          <div className='home-card-header'>
            <h2 className='home-section-title'>{t.home.preparationTitle}</h2>
            <Link to='/preparation' className='home-link'>{t.home.viewMore}</Link>
          </div>
          <p className='home-section-text'>{t.home.preparationText}</p>
          <Prepare />
        </section>

        <section className='home-card home-card-glow'>
          <div className='home-card-header'>
            <h2 className='home-section-title'>{t.home.whyChooseTitle}</h2>
          </div>
          <div className='why-choose-grid'>
            <div className='why-choose-item'>
              <h3>Saveur unique</h3>
              <p>Des recettes traditionnelles pour un goût irrésistible.</p>
            </div>
            <div className='why-choose-item'>
              <h3>Distribution fiable</h3>
              <p>Notre réseau de distributeurs assure une livraison rapide et régulière.</p>
            </div>
            <div className='why-choose-item'>
              <h3>Qualité constante</h3>
              <p>Chaque lot est préparé avec des ingrédients sélectionnés.</p>
            </div>
          </div>
        </section>

        <section className='home-card home-card-hover'>
          <h2 className='home-section-title'>{t.home.localisationTitle}</h2>
          <p className='home-section-text'>{t.home.distributorsText}</p>
          <Localisation />
        </section>
      </div>
    </div>
  )
}



export default Home
