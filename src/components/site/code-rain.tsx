"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle "digital rain" of glowing code that drifts slowly down a black
 * backdrop. Tuned to stay in the background (sparse columns, slow speed,
 * short trails) so it never overtakes the hero content. Honors
 * prefers-reduced-motion by rendering a single faint static frame.
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

    const glyphs =
      "01<>/{}[]()=+-*;:.$#&|abcdef0123456789ABCDEF_λμπΣ".split("");
    const fontSize = 16;
    const colGap = 1.7; // >1 spaces columns out so streams read as distinct lines
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let columns = 0;
    let pos: number[] = []; // fractional row of each stream's head
    let lastRow: number[] = [];
    let speed: number[] = []; // rows per 60fps frame (slow)
    let active: boolean[] = []; // sparse: not every column rains

    const setFont = () => {
      ctx.font = `${fontSize}px ui-monospace, "Geist Mono", monospace`;
      ctx.textBaseline = "top";
    };

    const reset = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const step = fontSize * colGap;
      columns = Math.ceil(width / step);
      pos = new Array(columns);
      lastRow = new Array(columns);
      speed = new Array(columns);
      active = new Array(columns);
      for (let i = 0; i < columns; i++) {
        active[i] = Math.random() < 0.62; // ~38% of columns stay empty
        pos[i] = (Math.random() * height) / fontSize - height / fontSize;
        lastRow[i] = Math.floor(pos[i]);
        speed[i] = 0.04 + Math.random() * 0.07; // slow drift
      }
      ctx.clearRect(0, 0, width, height);
      setFont();
    };

    const drawHead = (i: number) => {
      const step = fontSize * colGap;
      const x = i * step;
      const y = Math.floor(pos[i]) * fontSize;
      const ch = glyphs[(Math.random() * glyphs.length) | 0];
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 7;
      ctx.fillText(ch, x, y);
      ctx.shadowBlur = 0;
    };

    let raf = 0;

    if (reduce) {
      // Static faint frame — no animation.
      reset();
      ctx.globalAlpha = 0.5;
      for (let i = 0; i < columns; i++) {
        if (!active[i]) continue;
        for (let k = 0; k < 4; k++) {
          pos[i] = Math.random() * (height / fontSize);
          drawHead(i);
        }
      }
      ctx.globalAlpha = 1;
      return;
    }

    const frame = () => {
      // Dim the previous frame to create short fading trails.
      ctx.fillStyle = "rgba(4, 6, 10, 0.10)";
      ctx.fillRect(0, 0, width, height);
      setFont();

      for (let i = 0; i < columns; i++) {
        if (!active[i]) continue;
        const row = Math.floor(pos[i]);
        if (row !== lastRow[i]) {
          drawHead(i);
          lastRow[i] = row;
        }
        pos[i] += speed[i];
        if (row * fontSize > height + fontSize * 6) {
          pos[i] = -Math.random() * 24;
          lastRow[i] = Math.floor(pos[i]);
          speed[i] = 0.04 + Math.random() * 0.07;
        }
      }
      raf = requestAnimationFrame(frame);
    };

    reset();
    raf = requestAnimationFrame(frame);

    const onResize = () => reset();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [color]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
