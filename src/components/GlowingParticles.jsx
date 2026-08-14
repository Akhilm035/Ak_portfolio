import React, { useEffect, useRef } from 'react';

export default function GlowingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, targetX: null, targetY: null };
    
    // Smooth mouse position interpolation
    let interpolatedMouse = { x: null, y: null };

    // Detect media queries for performance scaling
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Responsive sizing and DPR setup
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Re-initialize particles based on new dimensions
      initParticles(rect.width, rect.height);
    };

    // Particle class definition
    class Particle {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        
        // Organic random distribution
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        
        this.x = this.baseX;
        this.y = this.baseY;

        // Size variability (creates depth)
        this.size = Math.random() * 1.8 + 0.4; // 0.4px to 2.2px
        
        // Speed proportional to size (parallax depth effect)
        this.speedFactor = this.size * 0.15;
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = (Math.random() - 0.5) * 0.01;

        // Color palette (white/cool-white with subtle secondary sky-blue/lavender tones)
        const rand = Math.random();
        if (rand < 0.7) {
          this.color = '255, 255, 255'; // Pure white
        } else if (rand < 0.88) {
          this.color = '224, 242, 254'; // Cool sky blue (slate-100 highlight)
        } else {
          this.color = '243, 232, 255'; // Soft lavender
        }

        // Alpha opacity configurations
        this.baseAlpha = Math.random() * 0.4 + 0.15; // 0.15 to 0.55
        this.alpha = this.baseAlpha;
        this.seed = Math.random() * 100;
      }

      update(time, mousePos, width, height) {
        // 1. Slow, ambient floating motion
        const speed = 0.0008 * this.speedFactor;
        
        // Drift home position slowly over time
        this.baseX += Math.sin(time * speed * 10 + this.seed) * 0.06;
        this.baseY += Math.cos(time * speed * 10 + this.seed) * 0.06;

        // Boundary wrap-around check for home positions
        if (this.baseX < -20) this.baseX = width + 20;
        if (this.baseX > width + 20) this.baseX = -20;
        if (this.baseY < -20) this.baseY = height + 20;
        if (this.baseY > height + 20) this.baseY = -20;

        let targetX = this.baseX;
        let targetY = this.baseY;

        // 2. Cursor Gravitational & Repulsion Field Interaction (skipped if reduced motion)
        if (!prefersReducedMotion && mousePos.x !== null) {
          const dx = mousePos.x - this.x;
          const dy = mousePos.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160; // Field of effect radius

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist; // 0 (far) to 1 (on top)
            const angle = Math.atan2(dy, dx);

            // Gravitational behavior: attract at outer ring, push away when very close
            const attractRadius = 90;
            if (dist > attractRadius) {
              // Gentle gravitational pull towards cursor
              const pull = force * 12;
              targetX = this.baseX + Math.cos(angle) * pull;
              targetY = this.baseY + Math.sin(angle) * pull;
            } else {
              // Dispersal push away from cursor
              const push = ((attractRadius - dist) / attractRadius) * 28;
              targetX = this.baseX - Math.cos(angle) * push;
              targetY = this.baseY - Math.sin(angle) * push;
            }

            // Increase glow alpha of nearby particles
            this.alpha = Math.min(1.0, this.baseAlpha + force * 0.45);
          } else {
            this.alpha = this.baseAlpha;
          }
        } else {
          this.alpha = this.baseAlpha;
        }

        // 3. Smooth Spring Easing transition (inertia)
        const springStrength = 0.04;
        this.x += (targetX - this.x) * springStrength;
        this.y += (targetY - this.y) * springStrength;

        // Apply a subtle alpha vignette based on distance to canvas center
        // Keeps the center reading zone clear and clean for hero text typography
        const centerX = width / 2;
        const centerY = height / 2;
        const distToCenter = Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2);
        const centerThreshold = Math.min(width, height) * 0.4;
        
        if (distToCenter < centerThreshold) {
          const vignetteFactor = distToCenter / centerThreshold;
          this.alpha *= Math.max(0.12, vignetteFactor); // scale down opacity significantly near center text
        }
      }

      draw(ctx) {
        // Create soft radial glow effect without using expensive canvas blur filters
        const glowRadius = this.size * 3.5;
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowRadius);
        
        grad.addColorStop(0, `rgba(${this.color}, ${this.alpha})`);
        grad.addColorStop(0.35, `rgba(${this.color}, ${this.alpha * 0.3})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles organically
    const initParticles = (width, height) => {
      // Adjust density based on screen size (prevents crowded starfield on mobile/desktop)
      const baseArea = 1000 * 800;
      const currentArea = width * height;
      const targetCount = Math.floor((currentArea / baseArea) * (isMobile ? 50 : 120));
      
      // Keep within comfortable performance margins
      const count = Math.min(200, Math.max(25, targetCount));

      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    // Core Animation loop
    const animate = (time) => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse coordinates for smooth inertia transitions
      if (mouse.targetX !== null) {
        if (interpolatedMouse.x === null) {
          interpolatedMouse.x = mouse.targetX;
          interpolatedMouse.y = mouse.targetY;
        } else {
          interpolatedMouse.x += (mouse.targetX - interpolatedMouse.x) * 0.08;
          interpolatedMouse.y += (mouse.targetY - interpolatedMouse.y) * 0.08;
        }
      } else {
        interpolatedMouse.x = null;
        interpolatedMouse.y = null;
      }

      // Draw connection lines between nearby particles when mouse is active (desktop only)
      if (!isMobile && !prefersReducedMotion && interpolatedMouse.x !== null) {
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          const distToMouse = Math.sqrt((interpolatedMouse.x - p1.x) ** 2 + (interpolatedMouse.y - p1.y) ** 2);
          if (distToMouse > 160) continue;

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distBetween = Math.sqrt(dx * dx + dy * dy);

            // Create soft, thin lines when cursor gets close to nearby particle clusters
            if (distBetween < 55) {
              const lineAlpha = (1 - distBetween / 55) * (1 - distToMouse / 160) * 0.12;
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
              ctx.lineWidth = 0.45;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update(time, interpolatedMouse, width, height);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Tracking pointer events (throttled to canvas local bounds)
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    // Event listener bindings
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Initial triggers
    handleResize();
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup listeners and animation frames
    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
      style={{ mixBlendMode: 'screen', opacity: 0.85 }}
    />
  );
}
