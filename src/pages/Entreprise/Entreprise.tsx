import React from 'react'
import './Entreprise.css'
import img1 from './img/image.png'
import img2 from './img/im2.jpeg'
import { useLanguage } from '../../context/LanguageContext'

// Remplacez ces constantes par les images que vous souhaitez afficher dans la section Entreprise.
const IMAGE_1_URL = img1
const IMAGE_2_URL = img2
const introText = `Nous sommes une entreprise locale engagée à produire des chips et du sésame de première qualité. Notre équipe sélectionne des ingrédients premium et assure une distribution fiable.`
const features = [
  { title: 'Qualité locale', description: 'Ingrédients sélectionnés avec soin pour un goût authentique.' },
  { title: 'Expertise artisanale', description: 'Un savoir-faire traditionnel adapté à une production moderne.' },
  { title: 'Livraison fiable', description: 'Nos distributeurs assurent une arrivée rapide et sécurisée.' },
]

const Entreprise: React.FC = () => {
  const imageCards = [
    { url: IMAGE_1_URL, label: 'Image de notre production' },
    { url: IMAGE_2_URL, label: 'Image de nos produits' },
  ]

  const { t } = useLanguage()

  return (
    <section className="entre-section">
      <div className="entre-header">
        <h2>{t.home.entrepriseTitle}</h2>
      </div>
      <p className="entre-intro">{t.home.entrepriseText || introText}</p>

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
