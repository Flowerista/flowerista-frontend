import React from 'react';
import {HomePage} from './pages/HomePage';
import {Route, Routes, useLocation} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import {CatalogPage} from './pages/CatalogPage';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();
  return (
     <MainLayout>
       <PageTransition location={location.pathname}>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/catalog" element={<CatalogPage/>}/>
       </Routes>
       </PageTransition>
     </MainLayout>
  );
}

export default App;
