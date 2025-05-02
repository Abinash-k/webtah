
import React, { useEffect, useRef } from 'react';

const TechSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientWidth; // Keeping it square
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create points for the sphere
    const points: { x: number; y: number; z: number; size: number; color: string }[] = [];
    const numPoints = 150;
    const radius = canvas.width * 0.4;
    
    for (let i = 0; i < numPoints; i++) {
      // Generate random spherical coordinates
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      const size = Math.random() * 3 + 1;
      
      // Random blue or white color
      const colors = ['rgba(59, 130, 246, 0.8)', 'rgba(255, 255, 255, 0.8)'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      points.push({ x, y, z, size, color });
    }
    
    // Animation variables
    let rotationSpeed = 0.002;
    let rotationX = 0;
    let rotationY = 0;
    
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Rotate the sphere
      rotationX += rotationSpeed;
      rotationY += rotationSpeed * 0.7;
      
      // Sort points by z-index for proper rendering
      const sortedPoints = [...points].sort((a, b) => b.z - a.z);
      
      // Draw each point
      sortedPoints.forEach(point => {
        // Apply rotation
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        
        const x = point.x;
        const y = cosX * point.y - sinX * point.z;
        const z = sinX * point.y + cosX * point.z;
        
        const finalX = cosY * x - sinY * z;
        const finalZ = sinY * x + cosY * z;
        
        // Project 3D to 2D
        const scale = 800 / (800 + finalZ);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const projectedX = centerX + finalX * scale;
        const projectedY = centerY + y * scale;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, point.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
        
        // Draw connections
        sortedPoints.forEach(otherPoint => {
          const otherX = otherPoint.x;
          const otherY = cosX * otherPoint.y - sinX * otherPoint.z;
          const otherZ = sinX * otherPoint.y + cosX * otherPoint.z;
          
          const otherFinalX = cosY * otherX - sinY * otherZ;
          const otherFinalZ = sinY * otherX + cosY * otherZ;
          
          const otherScale = 800 / (800 + otherFinalZ);
          const otherProjectedX = centerX + otherFinalX * otherScale;
          const otherProjectedY = centerY + otherY * otherScale;
          
          // Calculate distance between points
          const dx = finalX - otherFinalX;
          const dy = y - otherY;
          const dz = finalZ - otherFinalZ;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          // Only draw connections if points are close
          if (distance < radius * 0.35) {
            const alpha = 1 - distance / (radius * 0.35);
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            ctx.lineTo(otherProjectedX, otherProjectedY);
            ctx.strokeStyle = `rgba(100, 150, 255, ${alpha * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <div className="w-full aspect-square max-w-lg mx-auto relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 rounded-full animate-pulse"></div>
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default TechSphere;
