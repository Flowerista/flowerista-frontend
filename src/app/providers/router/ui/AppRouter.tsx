import { memo, Suspense, useCallback, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../../../../shared/config/i18n/i18n.ts';
import i18next from 'i18next';
import { RequireAuth } from './RequireAuth.tsx';
import { AppRoutesProps } from '../../../../shared/types/router.ts';
import { routeConfig } from '../config/routerConfig.tsx';
import { PageTransition } from '../../../../shared/ui/PageTransition';
import { Loader } from '../../../../shared/ui/loading';

const AppRouter = () => {
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

export default memo(AppRouter);
