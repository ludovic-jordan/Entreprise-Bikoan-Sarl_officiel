import React from 'react'
import './Entreprise.css'
import img1 from './img/image.png'
import img2 from './img/im2.jpeg'
import { useLanguage } from '../../context/LanguageContext'

// Remplacez ces constantes par les images que vous souhaitez afficher dans la section Entreprise.
const IMAGE_1_URL = img1
const IMAGE_2_URL = img2

const Entreprise: React.FC = () => {
  const { t } = useLanguage()

  const features = [
    { title: t.entreprise.feature1Title, description: t.entreprise.feature1Desc },
    { title: t.entreprise.feature2Title, description: t.entreprise.feature2Desc },
    { title: t.entreprise.feature3Title, description: t.entreprise.feature3Desc },
  ]

  const imageCards = [
    { url: IMAGE_1_URL, label: 'Image de notre production' },
    { url: IMAGE_2_URL, label: 'Image de nos produits' },
  ]

  return (
    <section className="entre-section">
      <div className="entre-header">
        <h2>{t.home.entrepriseTitle}</h2>
      </div>
      <p className="entre-intro">{t.entreprise.introText}</p>

      <div className="entre-highlights">
        {features.map((feature, index) => (
          <div className="entre-feature" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="entre-images">
        {imageCards.map((card, index) => (
          <div className="entre-image-card" key={index}>
            {card.url ? (
              <img src={card.url} alt={card.label} />
            ) : (
              <div className="entre-placeholder">
                <p>{card.label}</p>
                <small>Changez IMAGE_{index + 1}_URL dans `src/pages/Entreprise/Entreprise.tsx`.</small>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Entreprise
