"use client";

import Image from "next/image";
import { editorialPortrait } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
type ScratchCardProps = {
  revealSrc: string;
  cursorSrc: string;
  onReveal?: () => void;
};

/** Canvas resolution is fixed so the card can resize while travelling without losing scratches. */
const CANVAS_W = 784;
const CANVAS_H = 1072;
const BRUSH_RADIUS_CSS = 30;

/**
 * Fills its parent. Text and cursor sizes use container query units so they
 * scale with the card as it grows into the Memories slot.
 */
export function ScratchCard({ revealSrc, cursorSrc, onReveal }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const scratched = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Figma tints the scratch cover with #4e1829 (mix-blend-color), so it reads as a solid burgundy card.
    ctx.fillStyle = "#4e1829";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
  }, []);

  const toCanvas = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return {
      css: { x: e.clientX - rect.left, y: e.clientY - rect.top },
      canvas: {
        x: ((e.clientX - rect.left) / rect.width) * CANVAS_W,
        y: ((e.clientY - rect.top) / rect.height) * CANVAS_H,
      },
      scale: CANVAS_W / rect.width,
    };
  };

  const scratchTo = (p: { x: number; y: number }, scale: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    scratched.current = true;
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = BRUSH_RADIUS_CSS * 2 * scale;
    ctx.beginPath();
    const from = last.current ?? p;
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (revealed) return;
    drawing.current = true;
    canvasRef.current?.setPointerCapture(e.pointerId);
    last.current = null;
    const p = toCanvas(e);
    scratchTo(p.canvas, p.scale);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const p = toCanvas(e);
    setCursor(p.css);
    if (drawing.current) scratchTo(p.canvas, p.scale);
  };

  const onPointerUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    last.current = null;
    if (!revealed) onReveal?.();
    setRevealed(true);
  };

  return (
    <div className="@container relative flex size-full select-none flex-col bg-[#f8f3ec]">
      <div className="relative h-[67.5%] w-full shrink-0">
        <Image src={revealSrc} alt="Anwin and Bia" fill sizes="400px" className="object-cover" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-between px-[6.5%] pb-[3%] pt-[3%]">
        <div className="font-display leading-none text-[#4e1829]">
          <p className="text-[11.5cqw] leading-[1.15]">{editorialPortrait.month}</p>
          <p className="text-[12cqw] leading-[1.2]">{editorialPortrait.dayLine}</p>
        </div>
        <div>
          <div className="h-px bg-[#4e1829]" />
          <div className="mt-[2%] flex items-start justify-between text-[2cqw] uppercase text-[#4e1829]">
            <span className="font-medium">{editorialPortrait.lineLeft}</span>
            <span>{editorialPortrait.lineRight}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {!revealed && (
          <motion.canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            className="absolute inset-0 size-full cursor-none touch-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={() => {
              onPointerUp();
              setCursor(null);
            }}
          />
        )}
      </AnimatePresence>

      {!revealed && (
        <motion.img
          src={cursorSrc}
          alt=""
          aria-hidden
          className="pointer-events-none absolute size-[22cqw]"
          style={{ x: "-50%", y: "-50%" }}
          animate={
            cursor
              ? { left: cursor.x, top: cursor.y, scale: 1 }
              : { left: "50%", top: "50%", scale: [1, 1.12, 1] }
          }
          transition={
            cursor
              ? { type: "spring", stiffness: 600, damping: 40, mass: 0.4 }
              : { scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }, default: { duration: 0.4 } }
          }
        />
      )}
    </div>
  );
}
