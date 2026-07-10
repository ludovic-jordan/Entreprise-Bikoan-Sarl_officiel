import React from 'react'
import { AnnonceMock } from '../../lib/Mock'
import ProduitCard from '../../components/ProduitCards'
import { useLanguage } from '../../context/LanguageContext'

const NosProduitReview: React.FC = () => {
  const { t } = useLanguage()
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">{t.home.products}</h2>

{/* Grille responsive : 1 colonne sur mobile, 2 sur petits écrans, 3 sur grands */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {AnnonceMock.slice(0, 6).map((a) => (
          <ProduitCard
                key={a.id} // toujours ajouter une key ici
                id={a.id}
                titre={a.titre}
                titreEn={a.titreEn}
                ville={a.ville}
                villeEn={a.villeEn}
                prix={a.prix}
                images={a.images}
                text={a.text}
                textEn={a.textEn}
          />
        ))}
      </div>
    </section>
  )
}

export default NosProduitReview