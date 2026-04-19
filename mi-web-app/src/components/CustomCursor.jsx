import { useEffect, useState } from "react";
import { useCursor } from "../context/CursorContext";
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const { hover } = useCursor();
  useEffect(() => {
    const moveCursor = (e) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, );
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
  return (
    <>
      {/* CÍRCULO */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-200 
        ${hover ? "w-20 h-20 border-2 border-white" : "w-10 h-10 border border-blue-400"}`}
        style={{
          transform: `translate(${position.x - (hover ? 40 : 20)}px, ${position.y - (hover ? 40 : 20)}px)`
        }}
      />
      {/* PUNTO */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${dotPosition.x - 4}px, ${dotPosition.y - 4}px)`
        }}
      />
    </>
  );
}

export default CustomCursor;