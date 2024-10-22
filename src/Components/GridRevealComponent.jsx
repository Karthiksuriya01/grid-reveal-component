// GridRevealComponent.js
import React, { useState, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const GridRevealComponent = ({ 
  imageUrl,
  imageWidth = '100%',
  imageHeight = 'auto',
  imageFit = 'cover',
  gridSize = 10, 
  delay = 100, 
  gridColor = '#fff', 
  trigger = 'LayerOnView',
  aspectRatio = '16/9',
  animation = 'layered' // New prop for animation type
}) => {
  const [reveal, setReveal] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (trigger === 'OnAppear') {
      setReveal(true);
    } else if (trigger === 'LayerOnView' && inView) {
      setReveal(true);
    }
  }, [inView, trigger]);

  const gridCells = useMemo(() => {
    const cellsPerRow = Math.ceil(100 / gridSize);
    const cellsPerColumn = Math.ceil(100 / gridSize);
    const totalCells = cellsPerRow * cellsPerColumn;

    const getCellDelay = (index) => {
      switch (animation) {
        case 'center':
          const centerX = cellsPerRow / 2;
          const centerY = cellsPerColumn / 2;
          const cellX = index % cellsPerRow;
          const cellY = Math.floor(index / cellsPerRow);
          const distanceFromCenter = Math.sqrt(Math.pow(cellX - centerX, 2) + Math.pow(cellY - centerY, 2));
          return distanceFromCenter * 50;
        case 'random':
          return Math.random() * 1000;
        default: // 'layered'
          return index * 20;
      }
    };

    return Array.from({ length: totalCells }, (_, index) => (
      <div
        key={index}
        style={{
          backgroundColor: gridColor,
          opacity: reveal ? 0 : 1,
          transition: `opacity ${delay}ms ease-in-out ${getCellDelay(index)}ms`
        }}
      />
    ));
  }, [gridSize, gridColor, reveal, delay, animation]);

  return (
    <div 
      ref={ref} 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        width: imageWidth, 
        paddingBottom: imageHeight === 'auto' ? aspectRatio : undefined,
        height: imageHeight !== 'auto' ? imageHeight : undefined,
        maxWidth: '100%'
      }}
    >
      <img 
        src={imageUrl} 
        alt="Reveal Demo" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%', 
          objectFit: imageFit,
        }} 
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.ceil(100 / gridSize)}, 1fr)`,
        gridTemplateRows: `repeat(${Math.ceil(100 / gridSize)}, 1fr)`,
      }}>
        {gridCells}
      </div>
    </div>
  );
};

export default GridRevealComponent;
