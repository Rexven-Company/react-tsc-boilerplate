import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './pages/auth/Login';
import { AuthProvider } from './context/AuthContext';
import AuthRouter from './routes/AuthRouter';
import UserRouter from './routes/UserRoutes';
import RoadMap from './pages/RoadMap';
import Error404 from './pages/errors/Error404';
import Logout from './pages/auth/Logout';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        {/* <Layout> */}
        <Routes>
          <Route element={<AuthRouter />}>
            <Route path={'/login'} element={<Login />} />
          </Route>
          <Route element={<UserRouter />}>
            <Route path={'/yol-haritasi'} index element={<RoadMap />} />
            <Route path={'/logout'} element={<Logout />} />
            <Route index element={<Navigate to="/yol-haritasi" />} />
          </Route>
          <Route path={'*'} element={<Error404 />} />
        </Routes>
        {/* </Layout> */}
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
