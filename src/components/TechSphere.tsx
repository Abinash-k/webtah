import React, { useEffect, useRef, useState } from 'react';

const TechSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
    const points: { x: number; y: number; z: number; size: number; color: string; vx: number; vy: number; vz: number; }[] = [];
    const numPoints = 180;
    const radius = canvas.width * 0.4;
    
    for (let i = 0; i < numPoints; i++) {
      // Generate random spherical coordinates
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      const size = Math.random() * 3 + 1;
      
      // Enhanced color selection with cybersecurity theme
      const colors = [
        'rgba(59, 130, 246, 0.8)', // Blue
        'rgba(255, 255, 255, 0.8)', // White
        'rgba(99, 102, 241, 0.8)', // Indigo
        'rgba(139, 92, 246, 0.8)', // Violet
        'rgba(16, 185, 129, 0.8)', // Emerald (for "secure" connotation)
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Add velocity for dynamic movement
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      const vz = (Math.random() - 0.5) * 0.5;
      
      points.push({ x, y, z, size, color, vx, vy, vz });
    }
    
    // Animation variables
    let rotationSpeed = 0.002;
    let rotationX = 0;
    let rotationY = 0;
    let pulseDirection = 1;
    let pulseAmount = 0;
    
    // Handle mouse movement for interactive rotation
    const handleMouseMove = (e: MouseEvent) => {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / canvas.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / canvas.height - 0.5) * 2
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update pulse effect
      pulseAmount += 0.02 * pulseDirection;
      if (pulseAmount > 1 || pulseAmount < 0) {
        pulseDirection *= -1;
      }
      
      // Apply interactive rotation based on mouse position
      rotationX = mousePosition.y * 0.05;
      rotationY = mousePosition.x * 0.05;
      
      // Additional auto-rotation
      rotationX += rotationSpeed;
      rotationY += rotationSpeed * 0.7;
      
      // Update point positions with velocity
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        point.z += point.vz;
        
        // Keep points within sphere radius
        const distance = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z);
        if (distance > radius) {
          point.x = (point.x / distance) * radius;
          point.y = (point.y / distance) * radius;
          point.z = (point.z / distance) * radius;
          
          // Reverse velocity direction when hitting boundary
          point.vx *= -1;
          point.vy *= -1;
          point.vz *= -1;
        }
      });
      
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
        
        // Add pulse effect
        const sizeModifier = 1 + pulseAmount * 0.2;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, point.size * scale * sizeModifier, 0, Math.PI * 2);
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
            ctx.lineWidth = 1 * scale * sizeModifier;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="w-full aspect-square max-w-lg mx-auto relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-indigo-500/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-blue-500 text-opacity-20 text-xs md:text-sm">
          INTERACTIVE
        </div>
      </div>
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default TechSphere;
