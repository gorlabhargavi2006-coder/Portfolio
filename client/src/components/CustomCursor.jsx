import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Add mousemove listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Track hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('btn') || 
        target.classList.contains('hover-target') ||
        target.closest('.hover-target') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isClickable) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Use requestAnimationFrame for smoother ring transition
  const ringStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hidden ? 0 : 1,
    transform: `translate(-50%, -50%) scale(${hovered ? 1.4 : 1})`,
  };

  const dotStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hidden ? 0 : 1,
    transform: `translate(-50%, -50%) scale(${hovered ? 1.8 : 1})`,
  };

  return (
    <>
      <div 
        ref={dotRef}
        className={`custom-cursor ${hovered ? 'hovered' : ''}`}
        style={dotStyle}
      />
      <div 
        ref={ringRef}
        className={`custom-cursor-ring ${hovered ? 'hovered' : ''}`}
        style={ringStyle}
      />
    </>
  );
};

export default CustomCursor;
