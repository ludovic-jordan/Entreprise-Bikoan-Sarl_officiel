import React from 'react'
import Hero from './Hero'
// import NosProduitDetail from '../../pages/NosProduits/NosProduitDetail'
import NosProduitReview from './NosProduitReview'
import Localisation from '../Localisation/Localise'
import StepsPage from '../Prepare/StepPages'
import Sesame from '../Prepare/Sesame'
import Chips from '../Prepare/Chips'
import { useLanguage } from '../../context/LanguageContext'



export const Home: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className='flex flex-col gap-6 px-4'>
      
      <Hero />
      <NosProduitReview />
      {/* You can add more components here as needed */}
      {/* <Footer /> */}
      <div>
        <h3 className='text-center font-semibold color-green'>{t.home.addressHeadline}</h3>
      </div>
      <Localisation />

      <StepsPage heading={''} steps={[]} />
      <Sesame />
      <Chips />
    </div>
  )
}



export default Home
