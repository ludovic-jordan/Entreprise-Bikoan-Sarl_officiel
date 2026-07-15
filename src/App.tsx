import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./index.css"
import "./App.css"
import { LanguageProvider, useLanguage } from './context/LanguageContext'
// import Confidentialite from './pages/Confidentialite/confidentialite'
import Layout from './Layout/layout'
import Apropos from './pages/Apropos/Apropos'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import NosProduitDetail from './pages/NosProduits/NosProduitDetail'
import NosProduit from './pages/NosProduits/NosProduit'
import ListDesDescributeur from './pages/ListDesDescributeur/ListDesDescributeur'
import Entreprise from './pages/Entreprise/Entreprise'
import Prepare from './pages/Prepare/Prepare'
import Condition from './pages/Condition/Condition'
import Confidentialite from './pages/Confidentialite/confidentialite'
import Mention from './pages/Mention/Mention'
import Inscription from './Inscription/Inscription'
import Connexion from './pages/Connexion/Connexion'

const PageNotFound = () => {
  const { t } = useLanguage()
  return <div>{t.app.pageNotFound}</div>
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
        {/* <Route path="/" element={<Confidentialite />} />
        <Route path="/confidentialite" element={<Confidentialite />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/nosproduit" element={<NosProduit />} />
        <Route path="/nosproduit/:id" element={<NosProduitDetail />} />
        <Route path="/distributeurs" element={<ListDesDescributeur />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/preparation" element={<Prepare />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
     </Layout>
    </BrowserRouter>
    </LanguageProvider>
  )
}

export default App