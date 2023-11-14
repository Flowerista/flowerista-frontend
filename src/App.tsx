import React from 'react';
import {HomePage} from './pages/HomePage';
import {Route, Routes, useLocation} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import {NotFoundPage} from './pages/NotFoundPage';
import {CatalogPage} from './pages/CatalogPage';
import PageTransition from './components/PageTransition';
import {DataRoute} from './data/routes';
import {DeliveryAndPaymentPage} from './pages/DeliveryAndPaymentPage';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { RestoringAccess } from './pages/RestoringAccess/RestoringAccess';
import { RestoringAccessSuccess } from './pages/RestoringAccess/RestoringAccessSuccess/RestoringAccessSuccess';
import { PersonalInformation } from './pages/Profile/PersonalInformation/PersonalInformation';

function App() {
  const location = useLocation();
  return (
     <MainLayout>
       <PageTransition location={location.pathname}>
       <Routes>
         <Route path="*" element={<NotFoundPage />} />
         <Route path={DataRoute.Home} element={<HomePage/>}/>
         <Route path={DataRoute.Catalog} element={<CatalogPage/>}/>
         <Route path={DataRoute.DeliveryAndPayment} element={<DeliveryAndPaymentPage/>}/>
         <Route path={DataRoute.AboutUs} element={<AboutUs/>}/>
         <Route path={DataRoute.Login} element={<Login/>}/>
         <Route path={DataRoute.Registration} element={<Registration/>}/>
         <Route path={DataRoute.RestoringAccess} element={<RestoringAccess/>}/>
         <Route path={DataRoute.RestoringAccessSuccess} element={<RestoringAccessSuccess/>}/>
         <Route path={DataRoute.PersonalInformation} element={<PersonalInformation/>}/>
       </Routes>
       </PageTransition>
     </MainLayout>
  );
}

export default App;
