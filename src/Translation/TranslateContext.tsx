import I18n from 'i18n-js';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

// Importing translation JSON files
const en = require('./English.json');
const ta = require('./Tamil.json');

// Define the context type
interface TranslateContextProps {
  language: string;
  updateLanguage: (language: string) => void;
  translate: (text?: string) => string;
}

// Create the context with default placeholder values
const TranslateContext = createContext<TranslateContextProps>({
  language: 'en',
  updateLanguage: () => {},
  translate: () => '',
});

// Props type for the provider
interface TranslateProviderProps {
  children: ReactNode;
}

// Provider component
export const TranslateProvider: React.FC<TranslateProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    I18n.locale = language;
    I18n.translations = {en, ta};
    I18n.fallbacks = true;

    console.log('Language set to:', language);
    console.log('Available translations:', Object.keys(I18n.translations));
  }, [language]);

  const updateLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const translate = (text?: string): string => {
    if (!text) return '';
    try {
      return I18n.t(text) || text;
    } catch (error) {
      console.warn(`Missing translation for: ${text}`);
      return text;
    }
  };

  return (
    <TranslateContext.Provider value={{language, updateLanguage, translate}}>
      {children}
    </TranslateContext.Provider>
  );
};

// Custom hook to use the translate context
export const useTranslate = () => useContext(TranslateContext);

export default TranslateContext;
