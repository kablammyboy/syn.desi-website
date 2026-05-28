"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle "digital rain" of glowing code that drifts slowly down the hero.
 * The canvas is cleared every frame (transparent), so the page's black grid
 * shows through behind the rain. Streams are sparse, slow, and short-tailed
 * so they never overtake the content. Honors prefers-reduced-motion.
 */
export function CodeRain({
  color = "#4db8f5",
  className,
}: {
  color?: string;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const hex = color.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const rgb = `${r}, ${g}, ${b}`;

    const glyphs =
      "01<>/{}[]()=+-*;:.$#&|abcdef0123456789ABCDEF_λμπΣ".split("");
    const fontSize = 16;
    const colGap = 1.7; // space columns out so streams read as distinct lines
    const trailLen = 14;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const randGlyph = () => glyphs[(Math.random() * glyphs.length) | 0];
    const randSpeed = () => 0.04 + Math.random() * 0.07; // slow drift

    let width = 0;
    let height = 0;
    let columns = 0;
    let step = fontSize * colGap;
    let head: number[] = []; // fractional head row per column
    let lastRow: number[] = [];
    let speed: number[] = [];
    let active: boolean[] = []; // sparse: not every column rains
    let trails: string[][] = []; // recent glyphs, index 0 = head

    const setup = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textBaseline = "top";

      step = fontSize * colGap;
      columns = Math.ceil(width / step) + 1;
      const rows = height / fontSize;
      head = new Array(columns);
      lastRow = new Array(columns);
      speed = new Array(columns);
      active = new Array(columns);
      trails = new Array(columns);
      for (let i = 0; i < columns; i++) {
        active[i] = Math.random() < 0.62; // ~38% of columns stay empty
        head[i] = Math.random() * rows - rows; // staggered, starting above
        lastRow[i] = Math.floor(head[i]);
        speed[i] = randSpeed();
        trails[i] = Array.from({ length: trailLen }, randGlyph);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px ui-monospace, "Geist Mono", monospace`;
      for (let i = 0; i < columns; i++) {
        if (!active[i]) continue;
        const x = i * step;
        const row = Math.floor(head[i]);
        if (row !== lastRow[i]) {
          trails[i].unshift(randGlyph());
          trails[i].length = trailLen;
          lastRow[i] = row;
        }
        for (let k = 0; k < trailLen; k++) {
          const y = (row - k) * fontSize;
          if (y < -fontSize || y > height) continue;
          if (k === 0) {
            ctx.fillStyle = `rgb(${rgb})`;
            ctx.shadowColor = `rgb(${rgb})`;
            ctx.shadowBlur = 8;
            ctx.fillText(trails[i][k], x, y);
            ctx.shadowBlur = 0;
          } else {
            const a = (1 - k / trailLen) * 0.45;
            ctx.fillStyle = `rgba(${rgb}, ${a.toFixed(3)})`;
            ctx.fillText(trails[i][k], x, y);
          }
        }
      }
    };

    const advance = () => {
      for (let i = 0; i < columns; i++) {
        if (!active[i]) continue;
        head[i] += speed[i];
        if ((Math.floor(head[i]) - trailLen) * fontSize > height) {
          head[i] = -Math.random() * 8 - trailLen;
          lastRow[i] = Math.floor(head[i]);
          speed[i] = randSpeed();
        }
      }
    };

    let raf = 0;
    const tick = () => {
      advance();
      draw();
      raf = requestAnimationFrame(tick);
    };

    setup();
    if (reduce) {
      draw();
      return;
    }
    raf = requestAnimationFrame(tick);

    const onResize = () => setup();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [color]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
