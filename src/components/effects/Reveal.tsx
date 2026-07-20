"use client";

import { useRef, useEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate =
    direction === "up"
      ? "translateY(28px)"
      : direction === "left"
        ? "translateX(-20px)"
        : "none";

  const style: React.CSSProperties =
    prefersReduced
      ? {}
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : translate,
          transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
