import React, { useEffect, useState } from "react";

/* ============================================================
   TERMINAL TYPE EFFECT
   ============================================================ */

export function TypedLine({ text, delay = 0, speed = 32, className = "", onDone }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          onDone && onDone();
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <span className={className}>{shown}</span>;
}

export default TypedLine;
