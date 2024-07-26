'use client'
import React, { useState, useEffect, useRef } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);
  
  // Smoothly move the cursor
  const updatePosition = () => {
    const speed = 0.1; // Adjust the speed of cursor movement
    setPosition((prevPosition) => {
      const x = prevPosition.x + (targetPosition.x - prevPosition.x) * speed;
      const y = prevPosition.y + (targetPosition.y - prevPosition.y) * speed;
      return { x, y };
    });
    requestRef.current = requestAnimationFrame(updatePosition);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setTargetPosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Start the animation frame
    requestRef.current = requestAnimationFrame(updatePosition);

    // Clean up the event listener and animation frame
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  });

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x, 
        top: position.y, 
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out',
      }}
      className='size-10 border-2 border-red-500 rounded-full z-[100] justify-center items-center pointer-events-none hidden lg:flex'
    >
      <div className='size-2 rounded-full bg-red-500'></div>
    </div>
  );
};

export default Cursor;
