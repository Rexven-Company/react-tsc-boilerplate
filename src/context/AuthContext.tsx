import React, { createContext, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import alertNotification from '../utils/alertNotification';
import AuthServices from '../services/authService';
import MemberService from '../services/memberService';

export interface LoginDataInterface {
  email: string;
  password: string;
}

export interface RegisterDataInterface {
  fistName: string;
  lastName: string;
  email: string;
  password: string;
  passwordAgain: string;
}

export interface IuserSession {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  id?: number;
  inComunity?: boolean;
  isSeller?: boolean;
  profileImage?: string | null;
}

export interface AuthContextInterface {
  children?: React.ReactNode;
  session?: IuserSession | undefined | null;
  setSession?: React.Dispatch<
    React.SetStateAction<IuserSession | undefined | null>
  >;
  error?: boolean;
  isLoading?: boolean;
  setUserContext?: (redirectPage: any) => void;
  login?: (userData: LoginDataInterface, redirectPage: any) => void;
  register?: (
    userRegisterData: RegisterDataInterface,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    resetForm: () => void
  ) => void;
  logout?: () => void;
  checkSessionStatus?: () => void;
  loginLoading?: boolean;
  updateUserInfo?: (values: { name: string; lastname: string }) => void;
  updateUserPassword?: (
    oldPassword: string,
    newPassword: string,
    newPasswordConfirm: string
  ) => void;
}

const contextDefaultValues: AuthContextInterface = {};

const AuthContext = createContext<AuthContextInterface>(contextDefaultValues);
const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider: React.FC<AuthContextInterface> = (props) => {
  const [session, setSession] = useState<IuserSession | null | undefined>(
    undefined
  );
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  // login user
  const login = (userLoginData: LoginDataInterface, redirectPage: string) => {
    setIsLoading(true);
    AuthServices.login(userLoginData)
      .then((res) => {
        setUserContext(redirectPage);
        // alertNotification('success', 'Başarıyla giriş yapıldı');
      })
      .catch((err) => {
        setError(true);
        // console.log(err?.response?.data?.message || 'Bir hata oluştu')
        // alertNotification(
        //   'error',
        //   err?.response?.data?.message || 'Bir hata oluştu'
        // );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //register user
  const register = (
    userRegisterData: RegisterDataInterface,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    resetForm: () => void
  ) => {
    setIsLoading(true);
    AuthServices.register(userRegisterData)
      .then((res) => {
        resetForm();
        setIsModalOpen(true);
      })
      .catch((err) => {
        setError(true);
        // alertNotification('error', err?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const setUserContext = (redirectPage: string) => {
    AuthServices.getSession()
      .then((res) => {
        setSession(res.data);
        navigate(redirectPage ? redirectPage : '/');
      })
      .catch((err) => {
        setError(true);
        // alertNotification('error', err.message);
        navigate('/login');
      });
  };

  const updateUserInfo = (values: { name: string; lastname: string }) => {
    MemberService.updateUserInfo(values)
      .then((res) => {
        checkSessionStatus();
        // alertNotification(
        //   'success',
        //   'Kullanıcı bilgileriniz başarıyla güncellendi'
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUserPassword = (
    oldPassword: string,
    newPassword: string,
    newPasswordConfirm: string
  ) => {
    MemberService.updateMemberPassword({
      oldPassword,
      newPassword,
      newPasswordConfirm,
    })
      .then((res) => {
        // alertNotification(
        //   'success',
        //   'Parolanız Değiştirildi,tekrar giriş yapınız'
        // );
        AuthServices.logoutUser()
          .then((res) => {
            setSession(null);
          })
          .catch((err) => {
            setError(true);
            // alertNotification('error', err.message);
          });
      })
      .catch((err) => {
        // alertNotification('error', err.response.data.message);
      });
  };

  //check if user has auth
  const checkSessionStatus = () => {
    setIsLoading(true);
    AuthServices.getSession()
      .then((res) => {
        setSession(res.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // logout user
  const logout = () => {
    AuthServices.logoutUser()
      .then((res) => {
        setSession(null);
        // navigate('/login');
        // alertNotification('success', 'Başarıyla çıkış yapıldı');
      })
      .catch((err) => {
        setError(true);
        // alertNotification('error', err.message);
      });
  };

  useEffect(() => {
    checkSessionStatus();
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
        error,
        isLoading,
        login,
        register,
        logout,
        checkSessionStatus,
        setUserContext,
        updateUserInfo,
        updateUserPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, useAuth };
