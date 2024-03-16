import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitchButton from './language-switch-button';
import HoverButton from './hover-button';
import { useTranslation } from 'react-i18next';


interface NavbarProps {
  setBackgroundColor: (color: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setBackgroundColor }) => {
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const activationHeight = 100; // Высота в пикселях от верха экрана, где Navbar будет активироваться


  const timeoutDuration = 3000; // 3000 мс = 3 секунды
  let timeoutId: NodeJS.Timeout;

  const { t } = useTranslation();

  const buttonData = [
    {
      text: t('nav.greetings'),
      hoverColor: "#8294C4",
      url: "/"
    },
    {
      text: t('nav.projects'),
      hoverColor: "#3B3486",
      url: "/projects"
    },
    {
      text: t('nav.contacts'),
      hoverColor: "#864AF9",
      url: "/contacts"
    }
  ];

  const navigate = (url: string) => {
    window.location.href = url;
  };

  const resetTimer = () => {
    clearTimeout(timeoutId);
    setIsVisible(true);
    timeoutId = setTimeout(() => setIsVisible(false), timeoutDuration);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (event.clientY <= activationHeight) {
      resetTimer();
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    const initialBackgroundColor = buttonData.find(button => button.url === path)?.hoverColor || '#FFFFFF';
    setBackgroundColor(initialBackgroundColor);
    setCurrentBackgroundColor(initialBackgroundColor); // Обновляем начальное состояние

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setBackgroundColor]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="fixed inset-x-0 top-0 z-50 mt-2"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
        >
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-75 backdrop-filter backdrop-blur-md py-2 px-4 rounded-full shadow-md">
              <div className="flex space-x-10">

                {buttonData.map((button) => (
                  <HoverButton
                    key={button.text}
                    text={button.text}
                    hoverColor={button.hoverColor}
                    onHoverChange={setBackgroundColor}
                    currentBackgroundColor={currentBackgroundColor}
                    onClick={() => navigate(button.url)}
                  />
                ))}

                <LanguageSwitchButton />

              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
