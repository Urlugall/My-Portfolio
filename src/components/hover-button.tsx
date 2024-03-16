import React, { useState } from 'react';

interface HoverButtonProps {
  text: string;
  hoverColor: string;
  currentBackgroundColor: string;
  onHoverChange: (color: string) => void;
  onClick: () => void;
}

const HoverButton: React.FC<HoverButtonProps> = ({ text, hoverColor, currentBackgroundColor, onHoverChange, onClick }) => {
  const [isClicked, setIsClicked] = useState(false); // Отслеживаем, была ли кнопка нажата

  // Обработка наведения мыши
  const handleMouseOver = () => {
    if (!isClicked) {
      onHoverChange(hoverColor); // Меняем фоновый цвет
    }
  };

  // Обработка убирания мыши
  const handleMouseOut = () => {
    if (!isClicked) {
      onHoverChange(currentBackgroundColor); // Возвращаем фон в исходное состояние
    }
  };

  // Обработка клика
  const handleClick = () => {
    setIsClicked(true); // Устанавливаем флаг нажатия
    onHoverChange(hoverColor); // Устанавливаем цвет фона после клика
    onClick(); // Вызываем дополнительные действия при клике
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      className="p-2 rounded-full hover:bg-gray-200"
    >
      {text}
    </button>
  );
};

export default HoverButton;
