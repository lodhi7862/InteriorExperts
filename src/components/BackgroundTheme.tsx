import { useEffect, useRef } from "react";

export default function BackgroundTheme() {
  const rootRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRef.current = { x, y };
    };

    const resetPointer = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

      root.style.setProperty("--bg-rot-x", `${currentRef.current.y * 6}deg`);
      root.style.setProperty("--bg-rot-y", `${currentRef.current.x * 6}deg`);
      root.style.setProperty("--bg-shift-x", `${currentRef.current.x * 16}px`);
      root.style.setProperty("--bg-shift-y", `${currentRef.current.y * 12}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", resetPointer);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", resetPointer);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div ref={rootRef} className="background-3d" aria-hidden="true">
      <div className="background-grid" />
      <div className="background-line background-line-1" />
      <div className="background-line background-line-2" />
      <div className="background-ring background-ring-1" />
      <div className="background-ring background-ring-2" />
      <div className="background-shape background-shape-1" />
      <div className="background-shape background-shape-2" />
      <div className="background-shape background-shape-3" />
      <div className="background-shape background-shape-4" />
    </div>
  );
}
