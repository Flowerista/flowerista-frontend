import { memo, Suspense, useCallback, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import '../i18n/i18n';
import i18next from 'i18next';
import { AppRoutesProps, routeConfig } from './routerConfig';
import { Loader } from '../components/shared/Loading';
import { RequireAuth } from './RequireAuth.tsx';

const App = () => {
  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      i18next.changeLanguage(selectedLanguage);
    }
  }, [i18next.language]);

  const location = useLocation();

  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<Loader />}>
        <div>{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    <PageTransition location={location.pathname}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </PageTransition>
  );
};

export default memo(App);
