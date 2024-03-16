'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ModalGreetingProps {
  show: boolean;
}

const ModalGreeting = ({ show }: ModalGreetingProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true); // Показываем модальное окно
      // Задержка перед началом исчезновения, чтобы улучшить восприятие
      const timer = setTimeout(() => {
        setIsVisible(false); // Скрываем модальное окно
      }, 2000); // Увеличенное время для чтения, например, 5 секунд

      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.3 }} // Более быстрое появление
          className="fixed inset-0 bg-custom-blue flex justify-center items-center z-50"
          style={{ width: '100vw', height: '100vh' }}
        >
          <div className="text-4xl font-bold pr-2">Illia Bodrov </div>
          <div className="text-4xl font-medium">Portfolio</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalGreeting;
