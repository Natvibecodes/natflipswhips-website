"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    // Ensures content is never left invisible if the observer does not fire.
    const fallbackTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}