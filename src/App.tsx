import React from 'react';
import {HomePage} from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import {NotFoundPage} from './pages/NotFoundPage';

function App() {
  return (
     <MainLayout>
       <Routes>
         <Route path={"/"} element={<HomePage/>}/>
         <Route path="*" element={<NotFoundPage />} />
       </Routes>
     </MainLayout>
  );
}

export default App;
