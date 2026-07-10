import m1 from '../assets/Entreprise_image/m1.jpeg'
import m2 from '../assets/Entreprise_image/m2.jpeg'
import m3 from '../assets/Entreprise_image/m3.jpeg'
import m4 from '../assets/Entreprise_image/m4.jpeg'
import m5 from '../assets/Entreprise_image/m5.jpeg'
// import m6 from '../assets/Entreprise_image/m6.jpeg'
import m7 from '../assets/Entreprise_image/m7.jpeg'
import m8 from '../assets/Entreprise_image/m8.jpeg'
import m9 from '../assets/Entreprise_image/m9.jpeg'
import m10 from '../assets/Entreprise_image/m10.jpeg'
import m11 from '../assets/Entreprise_image/m11.jpeg'
import m12 from '../assets/Entreprise_image/m12.jpeg'
import m13 from '../assets/Entreprise_image/m13.jpeg'
import m14 from '../assets/Entreprise_image/m14.jpeg'

type Annonce = {
    email: string;
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

export const AnnonceMock: Annonce[] = [
    {
        id: 1,
        titre: "sésame sucré",
        titreEn: "Sweet sesame",
        ville: "sésame bien grillé rich en vitamin A",
        villeEn: "Well roasted sesame rich in vitamin A",
        prix: 1500,
        images: [m9, m13, m14],
        text: "Très appétissant à déguster",
        textEn: "Very tasty to enjoy",
        email: "fofeachille@icloud.com"
    },
    {
        id: 2,
        titre: "chips de bonne qualité",
        titreEn: "High quality chips",
        ville: "chips de bonne qualité et riche en protéine",
        villeEn: "High quality chips rich in protein",
        prix: 2000,
        images: [m4, m5],
        text: "Bonne et riche en vitamine et en protéine",
        textEn: "Good and rich in vitamins and protein",
        email: "fofeachille@icloud.com"
    },
    {
        id: 3,
        titre: "sésame salé",
        titreEn: "Salted sesame",
        ville: "sésame salé et riche en vitamine B12",
        villeEn: "Salted sesame rich in vitamin B12",
        prix: 2000,
        images: [m7, m8, m1],
        text: "Riche en vitamine D",
        textEn: "Rich in vitamin D",
        email: "fofeachille@icloud.com"
    },
    {
        id: 4,
        titre: "chips sucrée",
        titreEn: "Sweet chips",
        ville: "chips sucrée et riche en protéine et en vitamine C",
        villeEn: "Sweet chips rich in protein and vitamin C",
        prix: 1500,
        images: [m2, m11, m12],
        text: "Bonne et riche en protéine",
        textEn: "Good and rich in protein",
        email: "fofeachille@icloud.com"
    },
    {
        id: 5,
        titre: "sésame sucré",
        titreEn: "Sweet sesame",
        ville: "sésame sucré et riche en vitamine A",
        villeEn: "Sweet sesame rich in vitamin A",
        prix: 1500,
        images: [m3, m13, m12],
        text: "Qualité en protéine et en vitamine A",
        textEn: "Quality in protein and vitamin A",
        email: "fofeachille@icloud.com"
    },
    {
        id: 6,
        titre: "chips de bonne qualité",
        titreEn: "High quality chips",
        ville: "chips de bonne qualité et riche en protéine",
        villeEn: "High quality chips rich in protein",
        prix: 2000,
        images: [m10, m11, m12],
        text: "Très bonne et riche en protéine pour une bonne santé",
        textEn: "Very good and rich in protein for good health",
        email: "fofeachille@icloud.com"
    },
]



