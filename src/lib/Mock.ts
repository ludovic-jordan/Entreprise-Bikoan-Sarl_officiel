// chips murs
import cm1 from '../assets/Entreprise_image/chips murs/WhatsApp Image 2026-07-15 at 11.12.58 (1).jpeg'
import cm2 from '../assets/Entreprise_image/chips murs/WhatsApp Image 2026-07-15 at 11.12.58.jpeg'
import cm3 from '../assets/Entreprise_image/chips murs/WhatsApp Image 2026-07-15 at 11.12.59.jpeg'
import cm4 from '../assets/Entreprise_image/chips murs/m10.jpeg'
import cm5 from '../assets/Entreprise_image/chips murs/m11.jpeg'
import cm6 from '../assets/Entreprise_image/chips murs/m8.jpeg'

//chips non murs
import nm1 from '../assets/Entreprise_image/chips non mur/WhatsApp Image 2026-07-15 at 11.16.03 (1).jpeg'
import nm2 from '../assets/Entreprise_image/chips non mur/WhatsApp Image 2026-07-15 at 11.16.03.jpeg'
import nm3 from '../assets/Entreprise_image/chips non mur/m12.jpeg'
import nm4 from '../assets/Entreprise_image/chips non mur/m3.jpeg'
import nm5 from '../assets/Entreprise_image/chips non mur/m5.jpeg'

// sésame caramel
import s1 from '../assets/Entreprise_image/sesame caramel/WhatsApp Image 2026-07-15 at 11.16.55.jpeg'
import s2 from '../assets/Entreprise_image/sesame caramel/WhatsApp Image 2026-07-15 at 11.16.56.jpeg'
import s3 from '../assets/Entreprise_image/sesame caramel/m4.jpeg'
import s4 from '../assets/Entreprise_image/sesame caramel/m7.jpeg'
import s5 from '../assets/Entreprise_image/sesame caramel/m9.jpeg'

//sésame complet
import sc1 from '../assets/Entreprise_image/sesame complet/miel et banane plaintaion.jpeg'
import sc2 from '../assets/Entreprise_image/sesame complet/sesame blanc.jpeg'
import sc3 from '../assets/Entreprise_image/sesame complet/sesame complet.jpeg'
import sc4 from '../assets/Entreprise_image/sesame complet/sesame sucre.jpeg'

//caramel
import c1 from '../assets/Entreprise_image/caramel/WhatsApp Image 2026-07-15 at 11.19.57.jpeg'
import c2 from '../assets/Entreprise_image/caramel/WhatsApp Image 2026-07-15 at 11.19.57 (1).jpeg'
import c3 from '../assets/Entreprise_image/caramel/WhatsApp Image 2026-07-15 at 11.19.58.jpeg'

//peanut
import p1 from '../assets/Entreprise_image/Peanut/m13.jpeg'
import p2 from '../assets/Entreprise_image/Peanut/m14.jpeg'

//gingembre

import g1 from '../assets/Entreprise_image/gingembre/WhatsApp Image 2026-07-15 at 11.18.20 (1).jpeg'
import g2 from '../assets/Entreprise_image/gingembre/WhatsApp Image 2026-07-15 at 11.18.20.jpeg'
import g3 from '../assets/Entreprise_image/gingembre/WhatsApp Image 2026-07-15 at 11.18.21 (2).jpeg'
import g4 from '../assets/Entreprise_image/gingembre/WhatsApp Image 2026-07-15 at 11.18.21.jpeg'

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
        titre: "Chips Murs 75g",
        titreEn: "Chips Murs",
        ville: "A la vanille et au lait",
        villeEn: "Well roasted chips rich in vitamin A",
        prix: 500,
        images: [cm1, cm2, cm3, cm4, cm5, cm6],
        text: "Très appétissant à déguster",
        textEn: "Very tasty to enjoy",
        email: "fofeachille@icloud.com"
    },
    {
        id: 2,
        titre: "Krok Sésame au Miel 100g",
        titreEn: "High quality chips",
        ville: "Sésame de bonne qualité et riche en protéine",
        villeEn: "High quality chips rich in protein",
        prix: 1500,
        images: [s1, s2, s3],
        text: "Bonne et riche en vitamine et en protéine",
        textEn: "Good and rich in vitamins and protein",
        email: "fofeachille@icloud.com"
    },
    {
        id: 3,
        titre: "Chips Non Murs 75g",
        titreEn: "Salted sesame",
        ville: "sésame au miel et riche en vitamine B12",
        villeEn: "Salted sesame rich in vitamin B12",
        prix: 1500,
        images: [ nm3],
        text: "Riche en vitamine D",
        textEn: "Rich in vitamin D",
        email: "fofeachille@icloud.com"
    },
    {
        id: 4,
        titre: "Peanuts",
        titreEn: "Sweet chips",
        ville: "Arachide enrobees de caramel et riche en protéine 70g",
        villeEn: "Sweet chips rich in protein and vitamin C",
        prix: 300,
        images: [p1, p2],
        text: "Bonne et riche en protéine",
        textEn: "Good and rich in protein",
        email: "fofeachille@icloud.com"
    },
    {
        id: 5,
        titre: "Caramel D'Arachide",
        titreEn: "Sweet Groundnut",
        ville: "Caramel sucré et riche en vitamine A ",
        villeEn: "Sweet groundnut rich in vitamin A",
        prix: 1000,
        images: [c1, c2, c3],
        text: "Qualité en protéine et en vitamine A 1000FCFA - demi-litre, 2000 - un litre",
        textEn: "Quality in protein and vitamin A",
        email: "fofeachille@icloud.com"
    },
    {
        id: 6,
        titre: "Gingembre",
        titreEn: "High quality chips",
        ville: "Pralines de gingembre sans sucre 3g",
        villeEn: "High quality chips rich in protein",
        prix: 200,
        images: [g1, g2, g3, g4],
        text: "pack de 10 steeks a 3000F",
        textEn: "Very good and rich in protein for good health",
        email: "fofeachille@icloud.com"
    },
    {
        id: 7,
        titre: "chips Non Murs",
        titreEn: "High quality chips",
        ville: "chips non murs de bonne qualité et riche en protéine",
        villeEn: "High quality chips rich in protein",
        prix: 500,
        images: [nm4, nm5],
        text: "pack de 10 steeks a 3000F",
        textEn: "Pack de 15 sachets de 75g a 7500F",
        email: "fofeachille@icloud.com"
    },
    {
        id: 8,
        titre: "Sésame Caramel",
        titreEn: "High quality chips",
        ville: "Krok Sesaho au sucre et Banane 100g",
        villeEn: "High quality chips rich in protein",
        prix: 1500,
        images: [s4, s5],
        text: "pack de 10 steeks a 3000F",
        textEn: "Sesame caramel rich in protein and vitamin A",
        email: "fofeachille@icloud.com"
    },
     {
        id: 9,
        titre: "Peanuts",
        titreEn: "Sweet chips",
        ville: "Arachide enrobees de caramel et riche en protéine 70g",
        villeEn: "Sweet chips rich in protein and vitamin C",
        prix: 300,
        images: [p1, p2],
        text: "Bonne et riche en protéine",
        textEn: "Good and rich in protein",
        email: "fofeachille@icloud.com"
    },
    {
        id: 10,
        titre: "Chips Epicée 75g",
        titreEn: "Chips Epicée",
        ville: "chips et les epice local",
        villeEn: "chips locally hots",
        prix: 500,
        images: [nm2, nm1],
        text: "Très appétissant à déguster",
        textEn: "Very tasty to enjoy",
        email: "fofeachille@icloud.com"
    },
    {
        id: 11,
        titre: "Caramel",
        titreEn: "Sweet caramel",
        ville: "Arachide enrobees de caramel et riche en protéine 70g",
        villeEn: "Sweet caramel rich in protein and vitamin C",
        prix: 300,
        images: [p1],
        text: "Bonne et riche en protéine",
        textEn: "Good and rich in protein",
        email: "fofeachille@icloud.com"
    },
    {
        id: 12,
        titre: "Krok Sésaho complet 100g",
        titreEn: "High quality Sésame",
        ville: "sésame tres bon en varieté",
        villeEn: "High quality chips rich in protein",
        prix: 1500,
        images: [sc3, sc2, sc1, sc4],
        text: "Krok Sésame banane plantain \n\n Krok Sésame sucre\n\n \n\nKrok Sésame Banane Plantain\n\n \n\n Sésame Gammes des saveurs\n\n",
        textEn: "Good and rich in vitamins and protein",
        email: "fofeachille@icloud.com"
    },
    
]





