
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type PageProps = {
    children: React.ReactNode;
}

const Layout:React.FC<PageProps>= ({children}:PageProps) => {
  return (
    <>
    {/* the skelton of the project structure that is the navbar the main and the footer */}
        <Navbar />
        <main className='flex-grow flex-1 pt-20'>
            {/* Content will be rendered here */}
            {children}
        </main>
        <Footer />
  
    </>
  
  )
}


export default Layout