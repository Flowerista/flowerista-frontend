import { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import '../i18n/i18n';
import i18next from 'i18next';
import { routeConfig } from './routerConfig';
import { Loader } from '../components/shared/Loading';

function App() {
  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      i18next.changeLanguage(selectedLanguage);
    }
  }, [i18next.language]);

  const location = useLocation();
  return (
    <PageTransition location={location.pathname}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                <div>{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </PageTransition>
  );
}

export default App;
