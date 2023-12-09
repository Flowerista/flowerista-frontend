import React, { useEffect } from 'react';
import {HomePage} from './pages/HomePage';
import {Route, Routes, useLocation} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import {NotFoundPage} from './pages/NotFoundPage';
import {CatalogPage} from './pages/CatalogPage';
import PageTransition from './components/PageTransition';
import {DataRoute} from './data/routes';
import {DeliveryAndPaymentPage} from './pages/DeliveryAndPaymentPage';

import {AboutUs} from './pages/AboutUs/AboutUs';
import {Login} from './pages/Login/Login';
import {Registration} from './pages/Registration/Registration';
import {RestoringAccess} from './pages/RestoringAccess/RestoringAccess';
import {RestoringAccessSuccess} from './pages/RestoringAccess/RestoringAccessSuccess/RestoringAccessSuccess';
import {PersonalInformation} from './pages/Profile/PersonalInformation/PersonalInformation';
import {ProductPage} from './pages/ProductPage';
import {CheckOutPage} from './pages/CheckOutPage';
import { useAppDispatch } from './store/store';
import { checkAuth } from './store/auth/auth.slice';
import {PasswordRecovery} from './pages/PasswordRecovery';

function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
}, [])
  
  const location = useLocation();
  return (

     <PageTransition location={location.pathname}>
  <Routes>
    <Route path={DataRoute.Home} element={<MainLayout><HomePage /></MainLayout>} />
    <Route path={DataRoute.Catalog} element={<MainLayout><CatalogPage /></MainLayout>} />
    <Route path={DataRoute.DeliveryAndPayment} element={<MainLayout><DeliveryAndPaymentPage /></MainLayout>} />
    <Route path={DataRoute.AboutUs} element={<MainLayout><AboutUs /></MainLayout>} />
    <Route path={DataRoute.Login} element={<MainLayout><Login /></MainLayout>} />
    <Route path={DataRoute.Registration} element={<MainLayout><Registration /></MainLayout>} />
    <Route path={DataRoute.RestoringAccess} element={<MainLayout><RestoringAccess /></MainLayout>} />
    <Route path={DataRoute.RestoringAccessSuccess} element={<MainLayout><RestoringAccessSuccess /></MainLayout>} />
    <Route path={DataRoute.ProductId} element={<MainLayout><ProductPage /></MainLayout>} />
    <Route path={DataRoute.PersonalInformation} element={<MainLayout><PersonalInformation/></MainLayout>}/>
    <Route path={DataRoute.CheckOut} element={<CheckOutPage/>}/>
    <Route path={DataRoute.ChangePassword} element={<MainLayout><PasswordRecovery/></MainLayout>}/>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
     </PageTransition>

  );
}

export default App;
