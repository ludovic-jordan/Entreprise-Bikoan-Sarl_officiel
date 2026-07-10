import React from 'react'
import { AnnonceMock } from '../../lib/Mock'
import ProduitCard from '../../components/ProduitCards'
// import Localisation from '../Localisation/Localise'



const NosProduit:React.FC = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl font-semibold text-center align-center'>Nos Produit</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {AnnonceMock.map((a) => (
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
            textEn={a.textEn} />
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {AnnonceMock.map((a) => (
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
            textEn={a.textEn} />
        ))}
      </div>
      
      
      <div>
        
       {/* <Localisation /> */}
       
      </div>
      </>
      
  )      
}

export default NosProduit