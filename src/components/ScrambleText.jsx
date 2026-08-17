import { useEffect, useRef } from "react";
import baffle from "baffle";

export default function ScrambleText({ text }) {
  const ref = useRef();

  useEffect(() => {
    const b = baffle(ref.current);

    b.set({
      characters: "█▓▒<>/░█▓▒<>/",
      speed: 80,
    });

    b.start();

    setTimeout(() => {
      b.reveal(1200);
    }, 300);
  }, [text]);

  return (
    <span ref={ref}>
      {text}
    </span>
  );
}