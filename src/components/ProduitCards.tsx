import React from 'react'
import { IoIosPricetag } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { useLanguage } from '../context/LanguageContext'
import { useCart } from '../context/CartContext'
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import { useFavorites } from '../context/FavoritesContext'


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
    const { addItem } = useCart()
    const { toggleFavorite, isFavorite } = useFavorites()
    const productTitle = language === 'fr' ? titre : titreEn
    const productDescription = language === 'fr' ? ville : villeEn
    return (
        <div className='flex flex-col w-full bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.015] h-full'>
            {/* Carrousel Swiper pour les images */}
            <div className="relative w-full h-[220px] sm:h-[250px] md:h-[230px] xl:h-[230px] overflow-hidden">
                <button onClick={() => toggleFavorite(id)} aria-label={isFavorite(id) ? 'Retirer des favoris' : 'Ajouter aux favoris'} className={`absolute right-3 top-3 z-10 rounded-full p-3 shadow-md backdrop-blur transition ${isFavorite(id) ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-500 hover:text-red-500'}`}>
                    {isFavorite(id) ? <FaHeart /> : <FaRegHeart />}
                </button>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    pagination={{ clickable: true }}
                    loop={images.length > 1}
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
                <p className="flex items-center gap-1 text-lg font-bold text-green-600 mt-2"><IoIosPricetag className="flex-shrink-0" /> {prix.toLocaleString()} FCFA</p>
               
                <div className="mt-3 flex gap-2"><Link to={`/nosproduit/${id}`} className="flex-1 bg-gray-100 text-gray-700 text-center px-3 py-2 rounded-lg hover:bg-gray-200 transition">{t.productCard.view}</Link><button onClick={() => addItem({ id, name: productTitle, price: prix, image: images[0] })} aria-label="Add to cart" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"><FaShoppingCart /></button></div>
            </div>
        </div>
    )
}

export default ProduitCard






