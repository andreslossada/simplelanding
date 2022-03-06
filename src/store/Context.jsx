import { createContext, useContext, useState } from 'react';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const systemVariables = {
    currentUser,
    setCurrentUser,
  };

  return (
    <AppContext.Provider value={systemVariables}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useUser must be used withing UserProvider');
  }
  return context;
};

export default useApp;
