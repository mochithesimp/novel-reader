import { useEffect, useRef, useState } from "react";

export const useHideOnScroll = (threshold = 10) => {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y <= threshold) {
        setVisible(true);
      } else if (y > lastY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
};
