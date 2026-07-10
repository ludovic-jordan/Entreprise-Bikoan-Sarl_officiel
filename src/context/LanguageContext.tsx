import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type SupportedLanguage = 'fr' | 'en'

// eslint-disable-next-line react-refresh/only-export-components
export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      nosProduits: 'Nos Produits',
      apropos: 'À propos',
      contact: 'Contact',
      connexion: 'Connexion',
      inscription: 'Inscription',
      menuHome: 'Accueil',
      menuNosProduits: 'Nos Produits',
      menuApropos: 'À Propos',
      menuContact: 'Contact',
      menuConnexion: 'Connexion',
    },
    home: {
      languageLabel: 'Choisissez la langue',
      languageFr: 'Français',
      languageEn: 'Anglais',
      heroTitle: 'Trouvez vos chips idéals chez nous',
      heroSubtitle: 'Avec BIKOAN ENTREPRISE, explorez des milliers de nos produits en un clic.',
      products: 'Nos Produits',
      viewMore: 'Voir plus',
      addressHeadline: 'Notre adresse. utilisez cette localisation pour nous trouver',
    },
    productCard: {
      view: 'Voir',
      priceLabel: 'FCFA',
    },
    productDetail: {
      description: 'Description',
      notFound: 'Produit non trouvé',
      additionalInfo: 'Informations supplémentaires',
      tel: 'Tel',
      contactPhone: 'Tél :',
      contactEmailLabel: 'Contactez-nous par email :',
      infoTitle: 'Informations supplémentaires',
    },
    localisation: {
      title: 'Entreprise Bikoan Sarl - Localisation',
    },
    prepare: {
      chips: {
        saltyLabel: 'Chips salées',
        sweetLabel: 'Chips sucrées',
        headingSalty: 'Comment faire des chips salées',
        headingSweet: 'Comment faire des chips sucrées',
        subheading: 'Croustillantes, faciles à préparer à la maison.',
        saltySteps: [
          { title: 'Éplucher', description: "Épluchez les plantains ou pommes de terre et rincez-les à l'eau claire." },
          { title: 'Trancher', description: "Coupez en fines rondelles régulières à l'aide d'un couteau ou d'une mandoline." },
          { title: 'Assaisonner', description: 'Saupoudrez de sel fin et mélangez délicatement pour bien répartir.' },
          { title: 'Chauffer l\'huile', description: "Faites chauffer l'huile dans une poêle profonde à feu moyen-vif." },
          { title: 'Frire', description: "Plongez les tranches dans l'huile chaude et faites frire jusqu'à ce qu'elles soient dorées et croustillantes." },
          { title: 'Égoutter', description: "Retirez et posez sur du papier absorbant pour enlever l'excès d'huile." },
        ],
        sweetSteps: [
          { title: 'Éplucher', description: 'Épluchez des plantains bien mûrs et rincez-les.' },
          { title: 'Trancher', description: 'Coupez en fines rondelles ou en lamelles allongées.' },
          { title: 'Chauffer l\'huile', description: "Faites chauffer l'huile à feu moyen dans une poêle profonde." },
          { title: 'Frire', description: "Faites frire les tranches jusqu'à obtenir une belle couleur dorée." },
          { title: 'Égoutter', description: "Posez sur du papier absorbant pour retirer l'excès d'huile." },
          { title: 'Saupoudrer', description: "Ajoutez un peu de sucre en poudre ou du miel pendant que c'est encore chaud." },
        ],
      },
      sesame: {
        heading: 'Comment faire des croquettes de sésame',
        subheading: 'Une recette simple, croustillante et pleine de saveur.',
        steps: [
          { title: 'Préparer les graines', description: 'Triez les graines de sésame pour enlever les impuretés, puis rincez-les rapidement et laissez-les égoutter.' },
          { title: 'Torréfier', description: 'Faites griller les graines à feu doux dans une poêle sèche, en remuant constamment jusqu\'à ce qu\'elles deviennent dorées et parfumées.' },
          { title: 'Préparer le sirop', description: 'Dans une casserole, faites fondre du sucre avec un peu d\'eau à feu moyen jusqu\'à obtenir un caramel léger.' },
          { title: 'Mélanger', description: 'Ajoutez les graines de sésame torréfiées au caramel chaud et mélangez rapidement pour bien enrober.' },
          { title: 'Étaler', description: 'Versez le mélange sur une surface huilée ou du papier sulfurisé, puis aplatissez avec un rouleau ou une spatule huilée.' },
          { title: 'Découper', description: 'Avant que ça refroidisse complètement, découpez en morceaux ou en barres de la taille souhaitée.' },
          { title: 'Laisser refroidir', description: 'Laissez durcir complètement à température ambiante avant de démouler et servir.' },
        ],
      },
      stepPrefix: 'Étape',
    },
    app: {
      pageNotFound: 'Page non trouvée',
    },
    footer: {
      description: "Bikoan's entreprise est une entreprise sérieuse et efficace pour la vente des chips professionnels et du shezam.",
      pages: 'NOS PAGES',
      legal: 'LÉGAL',
      followUs: 'SUIVEZ-NOUS',
      rights: "© 2026 Bikoan's Enterprise. Tous droits réservés.",
      condition: 'Conditions générales',
      mention: 'Mentions légales',
      confidentialite: 'Confidentialité',
    },
    contact: {
      title: 'CONTACTEZ-NOUS',
      name: 'Nom :',
      email: 'Email :',
      message: 'Message :',
      namePlaceholder: 'Votre nom complet',
      emailPlaceholder: 'Votre E-mail',
      messagePlaceholder: 'Expliquez-nous comment nous pouvons vous aider...',
      submit: 'Envoyer le message',
      answer: 'Nous vous répondrons dans les plus brefs délais.',
    },
    connexion: {
      title: 'CONNEXION',
      email: 'E-mail',
      password: 'Mot de passe',
      emailPlaceholder: 'Votre Email',
      passwordPlaceholder: 'Votre mot de passe',
      login: 'Se connecter',
      noAccount: "Vous n'avez pas de compte ?",
      signup: 'Inscrivez-vous ici',
      forgotPassword: 'Mot de passe oublié ?',
      clickHere: 'Cliquez ici',
      thanks: 'Merci pour votre compréhension',
    },
    inscription: {
      title: 'Créer un compte',
      name: 'Votre nom',
      email: 'Email',
      password: 'Mot de passe',
      role: 'Je suis',
      roleOption1: 'Agent de marketing (Acheteur/Vendeur)',
      roleOption2: 'Entrepreneur (Professionnel)',
      namePlaceholder: 'Entrez votre nom',
      emailPlaceholder: 'Entrez votre e-mail',
      passwordPlaceholder: 'Entrez un mot de passe',
      signup: "S'inscrire",
      selectRole: 'Choisissez votre rôle',
    },
    apropos: {
      title: "À propos de BIKOAN'S Enterprise",
      paragraph1: "BIKOAN'S Enterprise est une plateforme moderne de mise en vente de nos différents produits comme du shezam et la vente des chips. Nous vous donnons une saveur unique, de bonne qualité et de bonne santé pour votre bien-être.",
      paragraph2: 'Que vous soyez vendeur ou acheteur, nous proposons une expérience simple et rapide avec des produits de première qualité.',
    },
    confidentialite: {
      title: 'Politique de confidentialité',
      intro: "BIKOAN'S respecte votre vie privée. Aucune donnée personnelle ne sera vendue à des tiers.",
      usage: 'Vos informations sont utilisées uniquement pour améliorer votre expérience sur notre plateforme.',
      collectTitle: 'Collecte de données',
      collectText: 'Les informations collectées sont utilisées uniquement pour la gestion de votre compte et de nos produit. Nous collectons des données telles que votre nom, adresse e-mail et informations de contact pour vous fournir un service personnalisé.',
      cookieTitle: 'Cookie',
      cookieText: 'Le site utilise des cookies pour améliorer l’expérience utilisateur.',
      rightsTitle: 'Droits des utilisateurs',
      rightsText: 'Vous pouvez demander à consulter, modifier ou supprimer vos données à tout moment.',
    },
    condition: {
      title: 'Conditions Générales d’Utilisation',
      intro: 'Bienvenue sur BIKOAN’S. En utilisant ce site, vous acceptez les présentes conditions générales d’utilisation.',
      item1Title: '1. Objet du site',
      item1Text: 'BIKOAN’S est une plateforme de mise en vente de nos différents produits. tels que ',
      item2Title: '2. Utilisation du Service',
      item2Text: 'Toute utilisation abusive ou frauduleuse du site pourra entraîner une suspension de compte.',
      item3Title: '3. Propriété intellectuelle',
      item3Text: 'Tous les contenus présents sur le site sont la propriété de LAMAISON et ne peuvent être reproduits sans autorisation.',
    },
    mention: {
      title: 'Mentions légales',
      text: 'Les informations présentées sur ce site sont fournies à titre informatif. Toute reproduction ou diffusion est interdite sans autorisation.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      nosProduits: 'Our Products',
      apropos: 'About',
      contact: 'Contact',
      connexion: 'Login',
      inscription: 'Sign Up',
      menuHome: 'Home',
      menuNosProduits: 'Our Products',
      menuApropos: 'About',
      menuContact: 'Contact',
      menuConnexion: 'Login',
    },
    home: {
      languageLabel: 'Choose language',
      languageFr: 'French',
      languageEn: 'English',
      heroTitle: 'Find your ideal chips with us',
      heroSubtitle: 'With BIKOAN ENTREPRISE, explore thousands of products in one click.',
      products: 'Our Products',
      viewMore: 'See more',
      addressHeadline: 'Our address. Use this location to find us',
    },
    productCard: {
      view: 'View',
      priceLabel: 'FCFA',
    },
    productDetail: {
      description: 'Description',
      notFound: 'Product not found',
      additionalInfo: 'Additional information',
      tel: 'Phone',
      contactPhone: 'Phone:',
      contactEmailLabel: 'Contact us via email:',
      infoTitle: 'Additional information',
    },
    localisation: {
      title: 'Bikoan Company Location',
    },
    prepare: {
      chips: {
        saltyLabel: 'Salty chips',
        sweetLabel: 'Sweet chips',
        headingSalty: 'How to make salty chips',
        headingSweet: 'How to make sweet chips',
        subheading: 'Crispy, easy to prepare at home.',
        saltySteps: [
          { title: 'Peel', description: 'Peel the plantains or potatoes and rinse them in clean water.' },
          { title: 'Slice', description: 'Slice into thin, regular rounds using a knife or mandoline.' },
          { title: 'Season', description: 'Sprinkle with fine salt and mix gently to distribute evenly.' },
          { title: 'Heat oil', description: 'Heat the oil in a deep pan over medium-high heat.' },
          { title: 'Fry', description: 'Drop the slices into the hot oil and fry until golden and crispy.' },
          { title: 'Drain', description: 'Remove and place on paper towels to absorb excess oil.' },
        ],
        sweetSteps: [
          { title: 'Peel', description: 'Peel ripe plantains and rinse them.' },
          { title: 'Slice', description: 'Cut into thin rounds or long slices.' },
          { title: 'Heat oil', description: 'Heat the oil over medium heat in a deep pan.' },
          { title: 'Fry', description: 'Fry the slices until they turn a beautiful golden color.' },
          { title: 'Drain', description: 'Place on paper towels to remove excess oil.' },
          { title: 'Sprinkle', description: 'Add a bit of powdered sugar or honey while still warm.' },
        ],
      },
      sesame: {
        heading: 'How to make sesame croquettes',
        subheading: 'A simple, crispy, and flavorful recipe.',
        steps: [
          { title: 'Prepare the seeds', description: 'Sort the sesame seeds to remove impurities, then rinse quickly and let drain.' },
          { title: 'Toast', description: 'Toast the seeds over low heat in a dry pan, stirring constantly until golden and fragrant.' },
          { title: 'Prepare the syrup', description: 'In a saucepan, melt sugar with a little water over medium heat until you get a light caramel.' },
          { title: 'Mix', description: 'Add the toasted sesame seeds to the hot caramel and mix quickly to coat well.' },
          { title: 'Spread', description: 'Pour the mixture onto an oiled surface or baking paper, then flatten with an oiled roller or spatula.' },
          { title: 'Cut', description: 'Before it cools completely, cut into pieces or bars of the desired size.' },
          { title: 'Let cool', description: 'Let harden completely at room temperature before unmolding and serving.' },
        ],
      },
      stepPrefix: 'Step',
    },
    app: {
      pageNotFound: 'Page not found',
    },
    footer: {
      description: "Bikoan's enterprise is a serious and effective company for selling professional chips and shezam.",
      pages: 'OUR PAGES',
      legal: 'LEGAL',
      followUs: 'FOLLOW US',
      rights: 'All rights reserved',
      condition: 'Terms and Conditions',
      mention: 'Legal notice',
      confidentialite: 'Privacy',
    },
    contact: {
      title: 'CONTACT US',
      name: 'Name :',
      email: 'Email :',
      message: 'Message :',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Tell us how we can help you...',
      submit: 'Send message',
      answer: 'We will reply as soon as possible.',
    },
    connexion: {
      title: 'LOGIN',
      email: 'E-mail',
      password: 'Password',
      emailPlaceholder: 'Your email',
      passwordPlaceholder: 'Your password',
      login: 'Log in',
      noAccount: "Don't have an account?",
      signup: 'Sign up here',
      forgotPassword: 'Forgot password?',
      clickHere: 'Click here',
      thanks: 'Thank you for your understanding',
    },
    inscription: {
      title: 'Create an account',
      name: 'Your name',
      email: 'Email',
      password: 'Password',
      role: 'I am',
      roleOption1: 'Marketing agent (Buyer/Seller)',
      roleOption2: 'Entrepreneur (Professional)',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      passwordPlaceholder: 'Enter a password',
      signup: 'Sign up',
      selectRole: 'Choose your role',
    },
    apropos: {
      title: 'About BIKOANS Enterprise sarl',
      paragraph1: "BIKOAN'S Enterprise is a modern sales platform for our products like shezam and chips. We offer a unique flavor, quality products, and good health for your wellbeing.",
      paragraph2: 'Whether you are a seller or buyer, we offer a simple and fast experience with top quality products.',
    },
    confidentialite: {
      title: 'Privacy Policy',
      intro: "BIKOAN'S respects your privacy. No personal data will be sold to third parties.",
      usage: 'Your information is used only to improve your experience on our platform.',
      collectTitle: 'Data collection',
      collectText: 'Collected information is used only to manage your account and listings. We collect data like your name, email address and contact information to provide a personalized service.',
      cookieTitle: 'Cookies',
      cookieText: 'The site uses cookies to improve the user experience.',
      rightsTitle: 'User rights',
      rightsText: 'You can request to view, modify or delete your data at any time.',
    },
    condition: {
      title: 'Terms of Use',
      intro: 'Welcome to LAMAISON. By using this site, you agree to these terms of use.',
      item1Title: '1. Purpose of the site',
      item1Text: 'LAMAISON is a platform connecting individuals and professionals in the real estate sector.',
      item2Title: '2. Service use',
      item2Text: 'Any abusive or fraudulent use of the site may result in account suspension.',
      item3Title: '3. Intellectual property',
      item3Text: 'All content on the site is owned by LAMAISON and may not be reproduced without authorization.',
    },
    mention: {
      title: 'Legal notice',
      text: 'The information on this site is provided for informational purposes only. Reproduction or distribution is prohibited without authorization.',
    },
  },
}

type LanguageContextValue = {
  language: SupportedLanguage
  setLanguage: (language: SupportedLanguage) => void
  t: typeof translations['fr']
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>('fr')
  const t = useMemo(() => translations[language], [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
