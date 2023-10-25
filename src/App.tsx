import React from 'react';
import {HomePage} from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import {CatalogPage} from './pages/CatalogPage';

function App() {
  return (
     <MainLayout>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/catalog" element={<CatalogPage/>}/>
       </Routes>
     </MainLayout>
  );
}

export default App;
