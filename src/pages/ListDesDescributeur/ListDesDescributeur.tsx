import React from 'react'
import './ListDesDescributeur.css'
import { useLanguage } from '../../context/LanguageContext'

const distributors: string[] = [
  'Home solution',
  'Kumayas Warda',
  'Mahima coron',
  'Mahima elig essono',
  'Sino smart',
  'Ma SARL ydé',
  'Ma SARL DLA',
  'Houriya agribusiness Tchad',
  'Soneco olembé',
  'Boulangerie du peuple',
  'Les stations Neptune',
  'Mear Bastos',
  'O terroir',
  'Lagon bastos',
  'Lagon kribi',
  'Franco hôtel',
  'Hostellerie la Sanaga',
  'Cafe Massa mimboman',
  'Cafe massa nkolfoulou',
  'Cafe massa ebolowa',
  'Yahoot hôtel',
  'Jouvence hotel International',
  'vitrine du Cameroun',
  'vitrine du Gabon',
]

const displayItems = [...distributors, ...distributors]

const ListDesDescributeur: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="ldd-section">
      <div className="ldd-header">
        <h2 className="ldd-title">{t.home.distributorsTitle}</h2>
        <p className="ldd-subtitle">{t.home.distributorsText}</p>
      </div>
      <div className="ldd-scroll" role="list" aria-label="Liste des distributeurs">
        <div className="ldd-track">
          {displayItems.map((name, idx) => (
            <div className="ldd-card" key={`${name}-${idx}`} role="listitem">
              <div className="ldd-avatar">{name.charAt(0).toUpperCase()}</div>
              <div className="ldd-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListDesDescributeur
