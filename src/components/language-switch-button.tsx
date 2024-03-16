import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../i18n/config';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitchButton = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const switchLanguage = (newLang:string) => {
    i18next.changeLanguage(newLang, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      localStorage.setItem('i18nextLng', 'ru');
    });
    setIsLanguageMenuOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleLanguageMenu} className="p-2 rounded-full hover:bg-gray-200">
        🌐
      </button>
      <AnimatePresence>
        {isLanguageMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-4 rounded-lg shadow-lg"
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(244, 244, 244)',
                width: '100%',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <button className="px-4 py-2 rounded-full hover:bg-gray-300" onClick={() => switchLanguage('en')}>English</button>
              <button className="px-4 py-2 rounded-full hover:bg-gray-300" onClick={() => switchLanguage('ru')}>Русский</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitchButton;
