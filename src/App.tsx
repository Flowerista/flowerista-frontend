import React from 'react';
import './App.scss';
import {HomePage} from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';

function App() {
  return (
     <MainLayout>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
       </Routes>
     </MainLayout>
  );
}

export default App;
