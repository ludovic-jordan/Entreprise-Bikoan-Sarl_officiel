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
        <p className="text-xl text-center text-gray-700">{t.home.preparationText}</p>
      </div>
      <div className="prep-row">
        <div className="prep-card">
          <h3 className="text-2xl font-semibold text-center">{t.prepare.chipsTitle}</h3>
          <p className="prep-desc">{t.prepare.chipsDesc}</p>
          <div className="prep-media">
            {VIDEO_CHIPS_URL ? (
              <video controls playsInline preload="metadata" src={VIDEO_CHIPS_URL} />
            ) : (
              <div className="prep-placeholder">{t.prepare.noVideoConfigured}</div>
            )}
          </div>
        </div>

        <div className="prep-card">
          <h3 className='text-2xl font-semibold text-center'>{t.prepare.sesameTitle}</h3>
          <p className="prep-desc">{t.prepare.sesameDesc}</p>
          <div className="prep-media">
            {VIDEO_SESAME_URL ? (
              <video controls playsInline preload="metadata" src={VIDEO_SESAME_URL} />
            ) : (
              <div className="prep-placeholder">{t.prepare.noVideoConfigured}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prepare
