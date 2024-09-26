"use client"
import { useState, useEffect } from 'react';

function useInViewPort<T extends HTMLElement>(
  ref: React.RefObject<T>,
  options?: IntersectionObserverInit,
  once: boolean = false // Add the optional 'once' parameter
) {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInViewport(true);
        // If 'once' is true, disconnect the observer after the first intersection
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        // Reset the inViewport state if it goes out of view
        setInViewport(false);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, ref, once]);

  return inViewport;
}

export default useInViewPort;
