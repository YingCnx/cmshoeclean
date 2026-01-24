"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfterSlider({ before, after, alt }: Props) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && e.type !== "mousemove") return;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const position = ((x - rect.left) / rect.width) * 100;
      setSliderPos(Math.max(0, Math.min(100, position)));
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border-[10px] border-slate-50 shadow-xl cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* ภาพ After (ภาพที่สะอาดแล้ว - อยู่ล่างสุด) */}
      <Image src={after} alt={`${alt} หลังทำ`} fill className="object-cover" />

      {/* ภาพ Before (ภาพก่อนทำ - ใช้ Clip-path เพื่อตัดแสดงผลตามตำแหน่ง Slider) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image src={before} alt={`${alt} ก่อนทำ`} fill className="object-cover" />
      </div>

      {/* แถบรูด (Slider Handle) */}
      <div 
        className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#27D7D0]">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-slate-300 rounded-full"></div>
            <div className="w-1 h-3 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 z-30 pointer-events-none bg-slate-900/80 backdrop-blur text-white px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase">Before</div>
      <div className="absolute top-6 right-6 z-30 pointer-events-none bg-[#27D7D0] text-white px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-lg shadow-cyan-500/50">After</div>
    </div>
  );
}