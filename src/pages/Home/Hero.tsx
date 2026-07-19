import React from 'react'
import { motion } from 'framer-motion'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import hero from '../../assets/Entreprise_image/m2.jpeg'
import { AnnonceMock } from '../../lib/Mock'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const Hero: React.FC = () => {
  const { t, language } = useLanguage()

  return (
    /* Responsive height: shorter on mobile, taller on desktop */
    <div className="relative -mt-20 h-[320px] sm:h-[420px] md:h-[500px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {/* Main slide */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={hero} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
              <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {t.home.heroTitle}
              </motion.h1>
              <motion.p
                className="text-sm sm:text-lg md:text-xl mb-5 max-w-xl drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
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
                  className="bg-green-600 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-green-700 transition duration-200 inline-block shadow-lg"
                >
                  {t.home.viewMore}
                </Link>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Product slides */}
        {AnnonceMock.slice(1, 5).map((nosproduit) => (
          <SwiperSlide key={nosproduit.id}>
            <div className="relative w-full h-full">
              <img
                src={nosproduit.images[1]}
                alt={nosproduit.titre}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
                <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  {language === 'fr' ? nosproduit.titre : nosproduit.titreEn}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl mb-5 drop-shadow max-w-lg">
                  {language === 'fr' ? nosproduit.ville : nosproduit.villeEn} — {nosproduit.prix.toLocaleString()} FCFA
                </p>
                <Link
                  to={`/nosproduit/${nosproduit.id}`}
                  className="bg-green-600 px-5 py-2.5 rounded-xl text-sm sm:text-base hover:bg-green-700 transition duration-200 font-semibold shadow-lg"
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
