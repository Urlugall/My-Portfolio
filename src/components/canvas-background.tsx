'use client'
import React, { useEffect, useRef } from 'react';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Пресеты для фона
  const backgroundPreset = {
    spriteSrc: '/sprites/line.png', // Путь к спрайту
    objectCount: 30, // Общее количество объектов
    averageSpeed: 1.5, // Средняя скорость
    size: 20, // Размер спрайта
    fadeInSpeed: 0.01, // Скорость появления
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const sprite = new Image();
    sprite.src = backgroundPreset.spriteSrc;

    let animationFrameId: number;
    let mouseX = width / 2;
    let mouseY = height / 2;

    // Инициализация объектов с начальной позицией по всему экрану и начальным углом
    const objects = Array.from({ length: backgroundPreset.objectCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * backgroundPreset.averageSpeed + 0.5,
      toMouse: false,
      alpha: 0,
      angle: 0, // Начальный угол поворота
    }));

    // Функция для отрисовки объекта с анимацией появления и поворотом
    const drawObject = (object: { x: number; y: number; speed: number; toMouse: boolean; alpha: number; angle: number }) => {
      const dx = mouseX - object.x;
      const dy = mouseY - object.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 50 || object.toMouse) {
        object.toMouse = true;
        // Обновление угла поворота объекта
        object.angle = Math.atan2(dy, dx) + Math.PI / 2;
        object.x += Math.cos(object.angle - Math.PI / 2) * 5;
        object.y += Math.sin(object.angle - Math.PI / 2) * 5;
      } else {
        object.y += object.speed;
      }

      if (object.y > height + 10 || (object.toMouse && distance < 5)) {
        object.x = Math.random() * width;
        object.y = -backgroundPreset.size; // Спавн вверху экрана
        object.toMouse = false;
        object.alpha = 0;
        object.angle = 0; // Может потребоваться скорректировать, если ваш спрайт ориентирован иначе
      }      

      // Увеличение прозрачности для анимации появления
      if (object.alpha < 1) object.alpha += backgroundPreset.fadeInSpeed;

      ctx.globalAlpha = object.alpha;
      ctx.save();
      ctx.translate(object.x, object.y);
      ctx.rotate(object.angle);
      ctx.drawImage(sprite, -backgroundPreset.size / 2, -backgroundPreset.size / 2, backgroundPreset.size, backgroundPreset.size);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    // Главная функция отрисовки
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      objects.forEach(drawObject);
      animationFrameId = requestAnimationFrame(draw);
    };

    // Обновление позиции курсора
    const updateMousePosition = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    document.addEventListener('mousemove', updateMousePosition);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[0]"></canvas>;
};

export default CanvasBackground;
