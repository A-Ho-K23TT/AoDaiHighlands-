import React, { createContext, useEffect, useState } from 'react';
import { defaultAdminLanguage, translateAdmin } from './adminTranslations';

export const AdminLanguageContext = createContext();

const AdminLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('admin-language') || defaultAdminLanguage);

  useEffect(() => {
    localStorage.setItem('admin-language', language);
  }, [language]);

  const t = (key) => translateAdmin(language, key);

  return (
    <AdminLanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </AdminLanguageContext.Provider>
  );
};

export default AdminLanguageProvider;
