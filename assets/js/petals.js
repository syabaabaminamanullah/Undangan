/**
 * ====================================================================
 * ORGANIC BOTANICAL FALLING PETALS & GOLDEN PARTICLES (CANVAS PHYSICS)
 * ====================================================================
 */

class BotanicalPetals {
  constructor(canvasId = "petals-canvas") {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    const isMobile = window.innerWidth < 768;
    this.numParticles = isMobile ? 12 : 24; // responsive particle density for butter-smooth mobile 60fps
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.animId = null;
    this.isActive = true;
    this.wind = 0.5;
    this.windTarget = 0.5;
    this.windTimer = 0;

    // Palette of natural botanical leaves & gold dust
    this.colors = [
      { fill: "rgba(107, 133, 109, 0.45)", stroke: "rgba(78, 103, 80, 0.6)" },  // Forest Sage
      { fill: "rgba(120, 134, 107, 0.40)", stroke: "rgba(90, 105, 80, 0.5)" },  // Olive
      { fill: "rgba(214, 199, 161, 0.50)", stroke: "rgba(180, 160, 120, 0.6)" }, // Champagne
      { fill: "rgba(224, 195, 120, 0.55)", stroke: "rgba(212, 175, 55, 0.7)" },  // Gold leaf
      { fill: "rgba(245, 242, 235, 0.40)", stroke: "rgba(220, 215, 200, 0.5)" }  // Jasmine petal
    ];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Populate initial particles spread naturally across the screen
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(this.createParticle(true));
    }

    // Handle visibility to save battery
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.pause();
      } else if (this.isActive) {
        this.start();
      }
    });

    this.start();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticle(initialSpread = false) {
    const isGoldDust = Math.random() < 0.25;
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];

    return {
      x: Math.random() * this.width,
      y: initialSpread ? Math.random() * this.height : -30,
      size: isGoldDust ? (Math.random() * 2.5 + 1.5) : (Math.random() * 12 + 10),
      speedY: Math.random() * 0.8 + 0.6,
      speedX: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.025,
      oscillation: Math.random() * Math.PI * 2,
      oscillationSpeed: Math.random() * 0.03 + 0.01,
      swayRadius: Math.random() * 1.5 + 0.5,
      tilt: Math.random() * Math.PI,
      tiltSpeed: Math.random() * 0.02 + 0.01,
      isDust: isGoldDust,
      color: color,
      opacity: Math.random() * 0.4 + 0.5
    };
  }

  update() {
    // Subtle dynamic wind shifts
    this.windTimer++;
    if (this.windTimer % 180 === 0) {
      this.windTarget = (Math.random() - 0.3) * 1.2;
    }
    this.wind += (this.windTarget - this.wind) * 0.01;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.oscillation += p.oscillationSpeed;
      p.rotation += p.rotationSpeed;
      p.tilt += p.tiltSpeed;

      // Natural falling motion with gentle swaying
      p.x += Math.sin(p.oscillation) * p.swayRadius + this.wind + p.speedX;
      p.y += p.speedY;

      // Wrap around or re-spawn from top
      if (p.y > this.height + 40 || p.x < -40 || p.x > this.width + 40) {
        this.particles[i] = this.createParticle(false);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);

      if (p.isDust) {
        // Shimmering Golden Dust Particle (GPU-friendly without shadowBlur lag)
        const shimmer = (Math.sin(p.oscillation * 2) + 1) * 0.5;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(214, 175, 55, ${p.opacity * (0.6 + shimmer * 0.4)})`;
        this.ctx.fill();
        
        // Soft aura glow rendered via lightweight radial arc
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 1.8, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(240, 210, 120, ${p.opacity * 0.22})`;
        this.ctx.fill();
      } else {
        // Organic Olive / Eucalyptus Leaf with 3D Tilt
        const scaleX = Math.cos(p.tilt);
        this.ctx.scale(scaleX, 1);

        this.ctx.beginPath();
        // Leaf curve geometry
        this.ctx.moveTo(0, -p.size);
        this.ctx.bezierCurveTo(p.size * 0.65, -p.size * 0.5, p.size * 0.75, p.size * 0.5, 0, p.size);
        this.ctx.bezierCurveTo(-p.size * 0.75, p.size * 0.5, -p.size * 0.65, -p.size * 0.5, 0, -p.size);
        this.ctx.closePath();

        this.ctx.fillStyle = p.color.fill;
        this.ctx.fill();

        // Subtle Leaf Spine Vein
        this.ctx.beginPath();
        this.ctx.moveTo(0, -p.size * 0.85);
        this.ctx.lineTo(0, p.size * 0.85);
        this.ctx.strokeStyle = p.color.stroke;
        this.ctx.lineWidth = 0.75;
        this.ctx.stroke();
      }

      this.ctx.restore();
    }
  }

  loop() {
    if (!this.isActive) return;
    this.update();
    this.draw();
    this.animId = requestAnimationFrame(() => this.loop());
  }

  start() {
    if (!this.animId) {
      this.isActive = true;
      this.loop();
    }
  }

  pause() {
    this.isActive = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  toggle() {
    if (this.isActive) {
      this.pause();
      this.ctx.clearRect(0, 0, this.width, this.height);
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

window.BotanicalPetals = BotanicalPetals;
