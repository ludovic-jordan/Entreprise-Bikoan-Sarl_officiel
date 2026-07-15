import React from 'react'
import { IoIosPricetag } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { useLanguage } from '../context/LanguageContext'


type Props = {
    id: number;
    titre: string;
    titreEn: string;
    ville: string;
    villeEn: string;
    prix: number;
    images: string[];
    text: string;
    textEn: string;

}

const ProduitCard: React.FC<Props> = ({
    id,
    titre,
    titreEn,
    ville,
    villeEn,
    prix,
    images,
}) => {
    const { t, language } = useLanguage()
    const productTitle = language === 'fr' ? titre : titreEn
    const productDescription = language === 'fr' ? ville : villeEn
    return (
        <div className='flex flex-col bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.015] h-full'>
            {/* Carrousel Swiper pour les images */}
            <div className="relative w-full h-[220px] sm:h-[250px] md:h-[230px] xl:h-[230px] overflow-hidden">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                     spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                   
                    className="w-full h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`${titre} - ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{productTitle}</h2>
                    <p className="text-sm text-gray-600 font-bold">{productDescription}</p>
                </div>
                <p className="text-lg font-bold text-green-600 mt-2"> <IoIosPricetag /> {prix.toLocaleString()} FCFA</p>
               
                <Link to={`/nosproduit/${id}`} className="mt-3 inline-block bg-green-600 text-white text-center px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200">
                    {t.productCard.view}
                </Link>
            </div>
        </div>
    )
}

export default ProduitCard






