'use client'
import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ScrollPanelProps {
  children: React.ReactNode;
}

const ScrollPanel: React.FC<ScrollPanelProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0); // Текущее смещение для анимации
  const controls = useAnimation();
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const updateDimensions = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      setContainerHeight(container.offsetHeight);
      setContentHeight(container.scrollHeight);
    }
  };

  useLayoutEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [children]);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    const deltaY = event.deltaY;
    setY((prevY) => {
      let newY = prevY - deltaY; // Изменяем направление прокрутки
      newY = Math.min(0, Math.max(newY, containerHeight - contentHeight));
      return newY;
    });
  };

  useLayoutEffect(() => {
    controls.start({
      y,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 20,
        mass: 1,
      },
    });
  }, [y, controls]);
  

  // Прикрепляем обработчик к контейнеру
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [contentHeight, containerHeight]);

  return (
    <div ref={containerRef} style={{ overflow: 'hidden', maxHeight: '100%' }}>
      <motion.div
        animate={controls}
        initial={{ y: 0 }}
        style={{ minHeight: 'min-content' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollPanel;
