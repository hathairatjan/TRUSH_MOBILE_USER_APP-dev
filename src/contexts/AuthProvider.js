import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const signInWithEmailAndPassword = (email, password) => {
    setTimeout(() => {
      setUser({email: email, password: password});
    }, 2000);
  };

  return (
    <AuthContext.Provider value={{user, signInWithEmailAndPassword}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
