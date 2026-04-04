import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for triggering animations when element enters viewport
 * @param {number} threshold - Intersection threshold (0-1)
 * @param {string} rootMargin - Root margin for IntersectionObserver
 */
export function useScrollAnimation(threshold = 0.15, rootMargin = "0px 0px -50px 0px") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

export default useScrollAnimation;
