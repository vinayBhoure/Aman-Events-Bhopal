import React from 'react';

const ScrollContainer = ({ 
  children, 
  direction = 'left',
  speed = 'normal'
}) => {
  const speeds = {
    slow: '40s',
    normal: '30s',
    fast: '20s'
  };

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-block animate-scroll"
        style={{
          animationDuration: speeds[speed],
          animationDirection: direction === 'left' ? 'normal' : 'reverse'
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
};

export default ScrollContainer;