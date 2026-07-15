import React from 'react'
import './Prepare.css'
import chipsVideo from './videos/WhatsApp Video 2026-07-15 at 09.54.42.mp4'
import sesameVideo from './videos/sésame.mp4'
import { useLanguage } from '../../context/LanguageContext'

const VIDEO_CHIPS_URL = chipsVideo
const VIDEO_SESAME_URL = sesameVideo

const Prepare: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="prep-section">
      <div className="prep-header">
        <h2 className="text-3xl font-semibold text-center align-center">{t.home.preparationTitle}</h2>
        <p className="text-xl text-center text-gray-700">{t.home.preparationText} Les vidéos sont chargées depuis le code pour rester sous votre contrôle.</p>
      </div>
      <div className="prep-row">
        <div className="prep-card">
          <h3 className="text-2xl font-semibold text-center">Sésame</h3>
          <p className="prep-desc">Une démonstration claire des étapes de fabrication, du mélange à la cuisson, pour un produit bien doré.</p>
          <div className="prep-media">
            {VIDEO_CHIPS_URL ? (
              <video controls playsInline preload="metadata" src={VIDEO_CHIPS_URL} />
            ) : (
              <div className="prep-placeholder">Aucune vidéo configurée. Remplacez VIDEO_CHIPS_URL dans `src/pages/Prepare/Prepare.tsx`.</div>
            )}
          </div>
        </div>

        <div className="prep-card">
          <h3 className='text-2xl font-semibold text-center'>Sésame</h3>
          <p className="prep-desc">Une vidéo explicative du traitement et de la torréfaction du sésame pour un profil de saveur premium.</p>
          <div className="prep-media">
            {VIDEO_SESAME_URL ? (
              <video controls playsInline preload="metadata" src={VIDEO_SESAME_URL} />
            ) : (
              <div className="prep-placeholder">Aucune vidéo configurée. Remplacez VIDEO_SESAME_URL dans `src/pages/Prepare/Prepare.tsx`.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prepare
