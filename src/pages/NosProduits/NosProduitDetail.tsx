import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnnonceMock } from '../../lib/Mock'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import { useLanguage } from '../../context/LanguageContext'

const NosProduitDetail = () => {
  const { id } = useParams()
  const { t, language } = useLanguage()
  const a = AnnonceMock.find((nosproduit) => nosproduit.id === Number(id))

  if (!a) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        {t.productDetail.notFound}
      </div>
    )
  }

  return (
    <motion.div
      className="mt-24 px-4 max-w-4xl mx-auto pb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="border rounded-2xl shadow-md p-4 md:p-6 flex flex-col gap-5 bg-white">
        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
          loop
          className="w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden"
        >
          {a.images.map((img: string, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${a.titre} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Titre & prix */}
        <motion.h3
          className="text-2xl sm:text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {language === 'fr' ? a.titre : a.titreEn}
        </motion.h3>

        <p className="text-gray-500 text-sm sm:text-base">{language === 'fr' ? a.ville : a.villeEn}</p>

        <motion.p
          className="text-green-600 font-bold text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {a.prix.toLocaleString()} FCFA
        </motion.p>

        {/* Description */}
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="text-base font-semibold text-gray-800 mb-2">{t.productDetail.description}</h4>
          <p className="text-gray-600">{language === 'fr' ? a.text : a.textEn}</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 bg-green-50 rounded-xl p-4 border border-green-100">
          <p className="font-semibold text-gray-700">
            {t.productDetail.contactPhone}{' '}
            <a
              href={`tel:${t.productDetail.phone}`}
              className="bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition duration-200 inline-block ml-1"
            >
              {t.productDetail.phone}
            </a>
          </p>
          <p className="font-semibold text-gray-700">
            {t.productDetail.contactEmailLabel}{' '}
            <a
              href="mailto:fofeachille@icloud.com"
              className="text-green-600 hover:underline"
            >
              bikoansarl@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Infos supplémentaires */}
      <motion.div
        className="mt-8 bg-gray-50 p-6 rounded-2xl shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {t.productDetail.additionalInfo}
        </h3>
        <p className="text-gray-500 text-sm">
          {language === 'fr'
            ? 'Contactez-nous pour plus d\'informations sur ce produit.'
            : 'Contact us for more information about this product.'}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default NosProduitDetail
