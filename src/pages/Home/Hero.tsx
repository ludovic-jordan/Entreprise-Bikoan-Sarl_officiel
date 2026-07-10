import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import hero from '../../assets/Entreprise_image/m14.jpeg'
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
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: false }}
        navigation
        className="absolute inset-0 w-full h-full z-0 rounded-lg"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={hero} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.home.heroTitle}</h1>
              <p className="text-lg md:text-xl mb-6">{t.home.heroSubtitle}</p>
          </div>
          </div>
        </SwiperSlide>
 
        {AnnonceMock.slice(0, 3).map((nosproduit) => (
          <SwiperSlide key={nosproduit.id}>
            <div className="relative w-full h-full">
              <img
                src={nosproduit.images ? nosproduit.images[0] : ''}
                alt={nosproduit.titre}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{language === 'fr' ? nosproduit.titre : nosproduit.titreEn}</h1>
                <p className="text-lg md:text-xl mb-6">
                  {language === 'fr' ? nosproduit.ville : nosproduit.villeEn} - {nosproduit.prix} FCFA
                </p>
                <Link
                  to={`/nosproduit/${nosproduit.id}`}
                  className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >{t.home.viewMore}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
