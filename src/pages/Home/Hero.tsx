import React from 'react'
import { motion } from 'framer-motion'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import hero from '../../assets/Entreprise_image/m2.jpeg'
import { AnnonceMock } from '../../lib/Mock'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const Hero: React.FC = () => {
  const { t, language } = useLanguage()

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="absolute inset-0 w-full h-full z-0"
      >
        {/* Slide principal */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={hero} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                {t.home.heroTitle}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              >
                {t.home.heroSubtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  to="/nosproduit"
                  className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200 inline-block"
                >
                  {t.home.viewMore}
                </Link>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slides produits */}
        {AnnonceMock.slice(2, 5).map((nosproduit) => (
          <SwiperSlide key={nosproduit.id}>
            <div className="relative w-full h-full">
              <img
                src={nosproduit.images[0]}
                alt={nosproduit.titre}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {language === 'fr' ? nosproduit.titre : nosproduit.titreEn}
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  {language === 'fr' ? nosproduit.ville : nosproduit.villeEn} — {nosproduit.prix.toLocaleString()} FCFA
                </p>
                <Link
                  to={`/nosproduit/${nosproduit.id}`}
                  className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  {t.home.viewMore}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
