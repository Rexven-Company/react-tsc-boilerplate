import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/loader/Loader';

const AuthRouter: React.FC = (props) => {
  const { session } = useAuth();

  if (session === undefined) {
    return <Loading />;
  }
  if (session) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default AuthRouter;
