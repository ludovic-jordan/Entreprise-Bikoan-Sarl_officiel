
import {  useParams } from "react-router-dom";
import { AnnonceMock } from "../../lib/Mock"
import { Pagination, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
// import mail from "../../assets/social media/logo email2.png";

const NosProduitDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage()
  const a = AnnonceMock.find((nosproduit) => nosproduit.id === Number(id));

  if (!a) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        {t.productDetail.notFound}
      </div>
    );
  }

  return (
    <div className="mt-24 px-4 max-w-4xl mx-auto">
      <div className="border rounded-lg shadow-sm p-4 md:p-6 flex flex-col gap-4 bg-white">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className="w-full h-60 sm:h-72 md:h-80 rounded overflow-hidden"
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

        {/* Titre & Infos principales */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
          {language === 'fr' ? a.titre : a.titreEn}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">{language === 'fr' ? a.ville : a.villeEn}</p>
        <p className="text-green-600 font-bold text-base sm:text-lg">
          {a.prix.toLocaleString()} FCFA
        </p>

        {/* Caractéristiques */}
        <div className="flex flex-wrap gap-4 text-gray-700 justify-between">
          <div className="w-full">
            <h4 className="text-lg font-semibold text-gray-800">{t.productDetail.description}</h4>
            <p className="text-gray-600 mt-2">{language === 'fr' ? a.text : a.textEn}</p>
          </div>
        </div>
        <div>
          <span>
            <p className="font-semibold">
              {t.productDetail.contactPhone} <span className="bg-green-600 w-900 rounded-2xl cursor-pointer hover:scale-150 transition duration-300">691 185 815</span>
            </p>
            <p className="font-semibold">
              {t.productDetail.contactEmailLabel} fofeachille@icloud.com
            </p>
          </span>
        </div>
      </div>

      {/* Aperçu */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Informations supplémentaires
            </h3>
            <span className="block mt-2 font-medium text-green-700">
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosProduitDetail;
