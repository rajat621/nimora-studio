// "use client";

// import { useEffect, useRef } from "react";
// import styles from "./CursorReactiveBackground.module.css";

// // ─── EXACT PARAMETERS FROM dhero.studio SOURCE CODE ──────────────────────────
// // data-wave-speed-x="0.0125"   → how fast the wave phase advances horizontally
// // data-wave-speed-y="0.005"    → how fast the wave phase advances vertically
// // data-wave-amp-x="32"         → max horizontal displacement of each grid point (px)
// // data-wave-amp-y="16"         → max vertical displacement of each grid point (px)
// // data-x-gap="10"              → horizontal spacing between grid columns (px)
// // data-y-gap="32"              → vertical spacing between grid rows (px)
// // data-friction="0.925"        → spring damping (higher = less oscillation/bounce)
// // data-tension="0.005"         → spring stiffness (lower = softer, jellyier response)
// // data-max-cursor-move="0"     → cursor does NOT move; lines move TOWARD cursor
// // ─────────────────────────────────────────────────────────────────────────────

// const WAVE_SPEED_X   = 0.0125;
// const WAVE_SPEED_Y   = 0.005;
// const WAVE_AMP_X     = 32;
// const WAVE_AMP_Y     = 16;
// const X_GAP          = 10;    // px between line columns
// const Y_GAP          = 32;    // px between row anchor points
// const FRICTION       = 0.925; // velocity multiplier per frame (damping)
// const TENSION        = 0.005; // spring stiffness toward cursor attractor
// const LINE_COLOR     = "rgba(15, 15, 15, 0.15)";
// const BG_COLOR       = "#f5f4f1";

// // Each grid point has:
// //   ox, oy  — original resting position
// //   x,  y   — current actual position (displaced by wave + spring)
// //   vx, vy  — velocity (spring physics)
// interface GridPoint {
//   ox: number; oy: number;
//   x:  number; y:  number;
//   vx: number; vy: number;
// }

// interface Props {
//   className?: string;
// }

// export default function CursorReactiveBackground({ className = "" }: Props) {
//   const wrapRef   = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const pointsRef  = useRef<GridPoint[][]>([]); // [col][row]
//   const colsRef    = useRef(0);
//   const rowsRef    = useRef(0);

//   // Time accumulators for wave phase (matches wave-speed-x / wave-speed-y)
//   const timeXRef   = useRef(0);
//   const timeYRef   = useRef(0);

//   const pointerRef = useRef({ x: -9999, y: -9999, active: false });
//   const lastTsRef  = useRef(0);
//   const rafRef     = useRef(0);

//   useEffect(() => {
//     const wrap   = wrapRef.current;
//     const canvas = canvasRef.current;
//     if (!wrap || !canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;

//     // ── Build the grid ────────────────────────────────────────────────────
//     const buildGrid = () => {
//       const W = wrap.offsetWidth;
//       const H = wrap.offsetHeight;

//       canvas.width        = W * dpr;
//       canvas.height       = H * dpr;
//       canvas.style.width  = `${W}px`;
//       canvas.style.height = `${H}px`;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       // Number of columns and rows, extending slightly beyond edges
//       const cols = Math.ceil(W / X_GAP) + 2;
//       const rows = Math.ceil(H / Y_GAP) + 2;
//       colsRef.current = cols;
//       rowsRef.current = rows;

//       // Offset so grid is centered
//       const startX = -X_GAP;
//       const startY = -Y_GAP;

//       const grid: GridPoint[][] = [];
//       for (let c = 0; c < cols; c++) {
//         grid[c] = [];
//         for (let r = 0; r < rows; r++) {
//           const ox = startX + c * X_GAP;
//           const oy = startY + r * Y_GAP;
//           grid[c][r] = { ox, oy, x: ox, y: oy, vx: 0, vy: 0 };
//         }
//       }
//       pointsRef.current = grid;
//     };

//     // ── Physics update ────────────────────────────────────────────────────
//     const update = (dt: number) => {
//       // Advance wave phases (match data-wave-speed-x/y)
//       timeXRef.current += WAVE_SPEED_X * dt * 0.06; // scale dt (ms→frames at ~60fps)
//       timeYRef.current += WAVE_SPEED_Y * dt * 0.06;

//       const tx  = timeXRef.current;
//       const ty  = timeYRef.current;
//       const ptr = pointerRef.current;
//       const grid = pointsRef.current;
//       const cols = colsRef.current;
//       const rows = rowsRef.current;

//       for (let c = 0; c < cols; c++) {
//         for (let r = 0; r < rows; r++) {
//           const p = grid[c][r];

//           // ── Wave target: where this point "wants" to be from the idle wave ──
//           // Two-axis sine wave matching amp-x / amp-y
//           const waveX = WAVE_AMP_X * Math.sin(p.ox * 0.012 + ty + p.oy * 0.006);
//           const waveY = WAVE_AMP_Y * Math.sin(p.oy * 0.012 + tx + p.ox * 0.006);
//           const targetX = p.ox + waveX;
//           const targetY = p.oy + waveY;

//           // ── Cursor attractor: pull points toward cursor position ──────────
//           // max-cursor-move=0 means the cursor never nudges — only the lines
//           // move toward it, like a gravitational lens
//           let cursorDX = 0;
//           let cursorDY = 0;
//           if (ptr.active) {
//             const dx       = ptr.x - p.x;
//             const dy       = ptr.y - p.y;
//             const distSq   = dx * dx + dy * dy;
//             const radius   = 200; // influence radius in px
//             if (distSq < radius * radius) {
//               const dist     = Math.sqrt(distSq);
//               const falloff  = (1 - dist / radius) ** 2; // quadratic falloff
//               const strength = 60;                        // max pull in px
//               cursorDX = (dx / (dist + 1)) * strength * falloff;
//               cursorDY = (dy / (dist + 1)) * strength * falloff;
//             }
//           }

//           // ── Spring toward (targetX + cursorDX, targetY + cursorDY) ───────
//           // Uses data-tension and data-friction exactly as the original
//           const finalTargetX = targetX + cursorDX;
//           const finalTargetY = targetY + cursorDY;

//           // F = tension * (target - current)
//           // v = friction * v + F
//           // pos += v
//           p.vx = FRICTION * p.vx + TENSION * (finalTargetX - p.x);
//           p.vy = FRICTION * p.vy + TENSION * (finalTargetY - p.y);
//           p.x += p.vx;
//           p.y += p.vy;
//         }
//       }
//     };

//     // ── Draw: connect each column top-to-bottom as a smooth curve ─────────
//     const draw = () => {
//       const W = wrap.offsetWidth;
//       const H = wrap.offsetHeight;
//       const grid = pointsRef.current;
//       const cols = colsRef.current;
//       const rows = rowsRef.current;

//       ctx.clearRect(0, 0, W, H);
//       ctx.fillStyle = BG_COLOR;
//       ctx.fillRect(0, 0, W, H);

//       ctx.strokeStyle = LINE_COLOR;
//       ctx.lineWidth   = 0.8;
//       ctx.lineCap     = "round";
//       ctx.lineJoin    = "round";

//       // Draw each column as a smooth cubic spline through its row-points
//       for (let c = 0; c < cols; c++) {
//         const col = grid[c];
//         ctx.beginPath();
//         ctx.moveTo(col[0].x, col[0].y);

//         for (let r = 1; r < rows; r++) {
//           // Catmull-Rom → cubic bezier: use midpoints as control handles
//           const prev = col[r - 1];
//           const curr = col[r];
//           const cpx  = (prev.x + curr.x) / 2;
//           const cpy  = (prev.y + curr.y) / 2;
//           ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
//         }

//         // Final segment to last point
//         const last = col[rows - 1];
//         ctx.lineTo(last.x, last.y);
//         ctx.stroke();
//       }
//     };

//     // ── Render loop ───────────────────────────────────────────────────────
//     const loop = (ts: number) => {
//       const dt = Math.min(ts - lastTsRef.current, 32); // cap at 32ms
//       lastTsRef.current = ts;
//       update(dt);
//       draw();
//       rafRef.current = requestAnimationFrame(loop);
//     };

//     // ── Pointer ───────────────────────────────────────────────────────────
//     const onMove = (e: PointerEvent) => {
//       const r = wrap.getBoundingClientRect();
//       pointerRef.current = { x: e.clientX - r.left, y: e.clientY - r.top, active: true };
//     };
//     const onLeave = () => {
//       pointerRef.current.active = false;
//     };

//     buildGrid();
//     requestAnimationFrame(ts => { lastTsRef.current = ts; loop(ts); });

//     window.addEventListener("resize", buildGrid);
//     wrap.addEventListener("pointermove", onMove as EventListener);
//     wrap.addEventListener("pointerleave", onLeave);

//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", buildGrid);
//       wrap.removeEventListener("pointermove", onMove as EventListener);
//       wrap.removeEventListener("pointerleave", onLeave);
//     };
//   }, []);

//   return (
//     <div ref={wrapRef} className={`${styles.wrapper} ${className}`}>
//       <canvas ref={canvasRef} className={styles.canvas} />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, ReactNode } from "react";
// import styles from "./CursorReactiveBackground.module.css";

// const WAVE_SPEED_X = 0.0125;
// const WAVE_SPEED_Y = 0.005;

// const WAVE_AMP_X = 32;
// const WAVE_AMP_Y = 16;

// const X_GAP = 8;
// const Y_GAP = 32;

// const FRICTION = 0.925;
// const TENSION = 0.005;

// const CURSOR_RADIUS = 210;
// const CURSOR_STRENGTH = 72;

// const LINE_COLOR = "rgba(15, 15, 15, 0.15)";
// const BG_COLOR = "#f5f4f1";

// interface GridPoint {
//   ox: number;
//   oy: number;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
// }

// type Props = {
//   children: ReactNode;
// };

// export default function CursorReactiveBackground({ children }: Props) {
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const gridRef = useRef<GridPoint[][]>([]);
//   const colsRef = useRef(0);
//   const rowsRef = useRef(0);

//   const timeXRef = useRef(0);
//   const timeYRef = useRef(0);

//   const pointerRef = useRef({
//     x: -9999,
//     y: -9999,
//     active: false,
//   });

//   const rafRef = useRef<number>(0);
//   const lastTsRef = useRef(0);

//   useEffect(() => {
//     const wrap = wrapRef.current;
//     const canvas = canvasRef.current;
//     if (!wrap || !canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;

//     const buildGrid = () => {
//       const width = wrap.offsetWidth;
//       const height = wrap.offsetHeight;

//       canvas.width = width * dpr;
//       canvas.height = height * dpr;

//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       const cols = Math.ceil(width / X_GAP) + 3;
//       const rows = Math.ceil(height / Y_GAP) + 3;

//       colsRef.current = cols;
//       rowsRef.current = rows;

//       const startX = -X_GAP;
//       const startY = -Y_GAP;

//       const grid: GridPoint[][] = [];

//       for (let c = 0; c < cols; c++) {
//         grid[c] = [];

//         for (let r = 0; r < rows; r++) {
//           const ox = startX + c * X_GAP;
//           const oy = startY + r * Y_GAP;

//           grid[c][r] = {
//             ox,
//             oy,
//             x: ox,
//             y: oy,
//             vx: 0,
//             vy: 0,
//           };
//         }
//       }

//       gridRef.current = grid;
//     };

//     const update = (dt: number) => {
//       timeXRef.current += WAVE_SPEED_X * dt * 0.06;
//       timeYRef.current += WAVE_SPEED_Y * dt * 0.06;

//       const tx = timeXRef.current;
//       const ty = timeYRef.current;

//       const grid = gridRef.current;
//       const pointer = pointerRef.current;

//       for (let c = 0; c < colsRef.current; c++) {
//         for (let r = 0; r < rowsRef.current; r++) {
//           const p = grid[c][r];

//           const waveX =
//             WAVE_AMP_X *
//             Math.sin(
//               p.ox * 0.012 +
//                 ty +
//                 p.oy * 0.006
//             );

//           const waveY =
//             WAVE_AMP_Y *
//             Math.sin(
//               p.oy * 0.012 +
//                 tx +
//                 p.ox * 0.006
//             );

//           let cursorDX = 0;
//           let cursorDY = 0;

//           // UPDATED CURSOR BEHAVIOR
//           if (pointer.active) {
//             // use original grid points to preserve design
//             const dx = p.ox - pointer.x;
//             const dy = p.oy - pointer.y;

//             const distSq = dx * dx + dy * dy;

//             if (
//               distSq <
//               CURSOR_RADIUS * CURSOR_RADIUS
//             ) {
//               const dist =
//                 Math.sqrt(distSq) || 1;

//               const falloff = Math.pow(
//                 1 - dist / CURSOR_RADIUS,
//                 2
//               );

//               // smooth bulge away from cursor
//               cursorDX =
//                 (dx / dist) *
//                 CURSOR_STRENGTH *
//                 falloff;

//               // softer vertical pressure
//               cursorDY =
//                 (dy / dist) *
//                 (CURSOR_STRENGTH * 0.45) *
//                 falloff;
//             }
//           }

//           const targetX =
//             p.ox + waveX + cursorDX;

//           const targetY =
//             p.oy + waveY + cursorDY;

//           p.vx =
//             FRICTION * p.vx +
//             TENSION * (targetX - p.x);

//           p.vy =
//             FRICTION * p.vy +
//             TENSION * (targetY - p.y);

//           p.x += p.vx;
//           p.y += p.vy;
//         }
//       }
//     };

//     const draw = () => {
//       const width = wrap.offsetWidth;
//       const height = wrap.offsetHeight;

//       ctx.clearRect(0, 0, width, height);

//       ctx.fillStyle = BG_COLOR;
//       ctx.fillRect(0, 0, width, height);

//       ctx.strokeStyle = LINE_COLOR;
//       ctx.lineWidth = 0.8;
//       ctx.lineCap = "round";
//       ctx.lineJoin = "round";

//       const grid = gridRef.current;

//       for (let c = 0; c < colsRef.current; c++) {
//         const column = grid[c];

//         ctx.beginPath();
//         ctx.moveTo(
//           column[0].x,
//           column[0].y
//         );

//         for (let r = 1; r < rowsRef.current; r++) {
//           const prev = column[r - 1];
//           const curr = column[r];

//           const midX =
//             (prev.x + curr.x) / 2;
//           const midY =
//             (prev.y + curr.y) / 2;

//           ctx.quadraticCurveTo(
//             prev.x,
//             prev.y,
//             midX,
//             midY
//           );
//         }

//         const last =
//           column[rowsRef.current - 1];

//         ctx.lineTo(last.x, last.y);

//         ctx.stroke();
//       }
//     };

//     const loop = (ts: number) => {
//       const dt = Math.min(
//         ts - lastTsRef.current,
//         32
//       );

//       lastTsRef.current = ts;

//       update(dt);
//       draw();

//       rafRef.current =
//         requestAnimationFrame(loop);
//     };

//     const handlePointerMove = (
//       e: PointerEvent
//     ) => {
//       const rect =
//         wrap.getBoundingClientRect();

//       pointerRef.current = {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//         active: true,
//       };
//     };

//     const handlePointerLeave = () => {
//       pointerRef.current.active = false;
//     };

//     buildGrid();

//     requestAnimationFrame((ts) => {
//       lastTsRef.current = ts;
//       loop(ts);
//     });

//     window.addEventListener(
//       "resize",
//       buildGrid
//     );

//     wrap.addEventListener(
//       "pointermove",
//       handlePointerMove
//     );

//     wrap.addEventListener(
//       "pointerleave",
//       handlePointerLeave
//     );

//     return () => {
//       cancelAnimationFrame(rafRef.current);

//       window.removeEventListener(
//         "resize",
//         buildGrid
//       );

//       wrap.removeEventListener(
//         "pointermove",
//         handlePointerMove
//       );

//       wrap.removeEventListener(
//         "pointerleave",
//         handlePointerLeave
//       );
//     };
//   }, []);

//   return (
//     <div ref={wrapRef} className={styles.wrapper}>
//       <canvas ref={canvasRef} className={styles.canvas} />
//       <div className={styles.content}>{children}</div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, ReactNode } from "react";
import styles from "./CursorReactiveBackground.module.css";

// ── WAVE ──────────────────────────────────────────────────────
const WAVE_SPEED_X = 0.0125;
const WAVE_SPEED_Y = 0.005;

const WAVE_AMP_X = 32;
const WAVE_AMP_Y = 16;

// ── GRID (optimized for smoother FPS) ─────────────────────────
const X_GAP = 10;
const Y_GAP = 32;

// ── SPRING ────────────────────────────────────────────────────
const FRICTION = 0.92;
const TENSION = 0.008;

// ── CURSOR (stronger + more visible) ──────────────────────────
const CURSOR_RADIUS = 220;
const CURSOR_STRENGTH = 78;
const VEL_DECAY = 0.86;

// ── VISUAL (matches earlier softer code) ──────────────────────
const LINE_COLOR = "rgba(15, 15, 15, 0.15)";
const BG_COLOR = "#f5f4f1";

interface GridPoint {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

type Props = {
  children: ReactNode;
};

export default function CursorReactiveBackground({
  children,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const gridRef = useRef<GridPoint[][]>([]);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);

  const timeXRef = useRef(0);
  const timeYRef = useRef(0);

  const pointerRef = useRef({
    x: -9999,
    y: -9999,
    active: false,
    velX: 0,
    velY: 0,
  });

  const rafRef = useRef<number>(0);
  const lastTsRef = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;

    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const buildGrid = () => {
      const width = wrap.offsetWidth;
      const height = wrap.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / X_GAP) + 3;
      const rows = Math.ceil(height / Y_GAP) + 3;

      colsRef.current = cols;
      rowsRef.current = rows;

      const grid: GridPoint[][] = [];

      for (let c = 0; c < cols; c++) {
        grid[c] = [];

        for (let r = 0; r < rows; r++) {
          const ox = -X_GAP + c * X_GAP;
          const oy = -Y_GAP + r * Y_GAP;

          grid[c][r] = {
            ox,
            oy,
            x: ox,
            y: oy,
            vx: 0,
            vy: 0,
          };
        }
      }

      gridRef.current = grid;
    };

    const update = (dt: number) => {
      timeXRef.current += WAVE_SPEED_X * dt * 0.06;
      timeYRef.current += WAVE_SPEED_Y * dt * 0.06;

      const tx = timeXRef.current;
      const ty = timeYRef.current;

      const grid = gridRef.current;
      const pointer = pointerRef.current;

      pointer.velX *= VEL_DECAY;
      pointer.velY *= VEL_DECAY;

      const velMagSq =
        pointer.velX * pointer.velX +
        pointer.velY * pointer.velY;

      const velMag = Math.sqrt(velMagSq);

      const hasMotion =
        pointer.active && velMag > 0.3;

      let dirX = 0;
      let dirY = 0;
      let velScale = 0;

      if (hasMotion) {
        dirX = pointer.velX / velMag;
        dirY = pointer.velY / velMag;

        velScale = Math.min(
          velMag / 4,
          1
        );
      }

      for (let c = 0; c < colsRef.current; c++) {
        for (let r = 0; r < rowsRef.current; r++) {
          const p = grid[c][r];

          const waveX =
            WAVE_AMP_X *
            Math.sin(
              p.ox * 0.012 +
                ty +
                p.oy * 0.006
            );

          const waveY =
            WAVE_AMP_Y *
            Math.sin(
              p.oy * 0.012 +
                tx +
                p.ox * 0.006
            );

          let cursorDX = 0;
          let cursorDY = 0;

          if (hasMotion) {
            const dx = p.ox - pointer.x;
            const dy = p.oy - pointer.y;

            const distSq = dx * dx + dy * dy;
            const radiusSq =
              CURSOR_RADIUS *
              CURSOR_RADIUS;

            if (distSq < radiusSq) {
              const dist =
                Math.sqrt(distSq) || 1;

              // MUCH cheaper than cosine
              const falloff = Math.pow(
                1 -
                  dist /
                    CURSOR_RADIUS,
                2
              );

              const towardX =
                -dx / dist;

              const towardY =
                -dy / dist;

              const align =
                towardX * dirX +
                towardY * dirY;

              const directional =
                0.35 +
                0.65 *
                  Math.max(
                    0,
                    align
                  );

              const strength =
                CURSOR_STRENGTH *
                falloff *
                directional *
                velScale;

              cursorDX =
                dirX * strength;

              cursorDY =
                dirY * strength;
            }
          }

          const targetX =
            p.ox + waveX + cursorDX;

          const targetY =
            p.oy + waveY + cursorDY;

          p.vx =
            FRICTION * p.vx +
            TENSION *
              (targetX - p.x);

          p.vy =
            FRICTION * p.vy +
            TENSION *
              (targetY - p.y);

          p.x += p.vx;
          p.y += p.vy;
        }
      }
    };

    const draw = () => {
      const width = wrap.offsetWidth;
      const height = wrap.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = 0.8;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const grid = gridRef.current;

      for (let c = 0; c < colsRef.current; c++) {
        const column = grid[c];

        ctx.beginPath();
        ctx.moveTo(
          column[0].x,
          column[0].y
        );

        for (let r = 1; r < rowsRef.current; r++) {
          const prev = column[r - 1];
          const curr = column[r];

          const midX =
            (prev.x + curr.x) / 2;

          const midY =
            (prev.y + curr.y) / 2;

          ctx.quadraticCurveTo(
            prev.x,
            prev.y,
            midX,
            midY
          );
        }

        const last =
          column[rowsRef.current - 1];

        ctx.lineTo(last.x, last.y);
        ctx.stroke();
      }
    };

    const loop = (ts: number) => {
      const dt = Math.min(
        ts - lastTsRef.current,
        32
      );

      lastTsRef.current = ts;

      update(dt);
      draw();

      rafRef.current =
        requestAnimationFrame(loop);
    };

    let prevX = -9999;
    let prevY = -9999;

    const handlePointerMove = (
      e: PointerEvent
    ) => {
      const rect =
        wrap.getBoundingClientRect();

      const cx =
        e.clientX - rect.left;

      const cy =
        e.clientY - rect.top;

      const ptr =
        pointerRef.current;

      if (prevX !== -9999) {
        const rawVX = cx - prevX;
        const rawVY = cy - prevY;

        ptr.velX =
          ptr.velX * 0.6 +
          rawVX * 0.4;

        ptr.velY =
          ptr.velY * 0.6 +
          rawVY * 0.4;
      }

      prevX = cx;
      prevY = cy;

      ptr.x = cx;
      ptr.y = cy;
      ptr.active = true;
    };

    const handlePointerLeave = () => {
      pointerRef.current.active =
        false;

      prevX = -9999;
      prevY = -9999;
    };

    buildGrid();

    requestAnimationFrame((ts) => {
      lastTsRef.current = ts;
      loop(ts);
    });

    window.addEventListener(
      "resize",
      buildGrid
    );

    wrap.addEventListener(
      "pointermove",
      handlePointerMove
    );

    wrap.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      cancelAnimationFrame(
        rafRef.current
      );

      window.removeEventListener(
        "resize",
        buildGrid
      );

      wrap.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      wrap.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={styles.wrapper}
    >
      <canvas
        ref={canvasRef}
        className={styles.canvas}
      />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}