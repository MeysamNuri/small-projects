"use client"
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Eye({ mirror = false, cover = false }) {
  const eyeRef = useRef(null);
  
  const pupilX = useMotionValue(0);
  const pupilY = useMotionValue(0);

  const springX = useSpring(pupilX, { stiffness: 150, damping: 15 });
  const springY = useSpring(pupilY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;

      const angle = Math.atan2(deltaY, deltaX);

      const maxDistance = 20;
      const moveX = Math.cos(angle) * maxDistance;
      const moveY = Math.sin(angle) * maxDistance;

      pupilX.set(moveX);
      pupilY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [pupilX, pupilY]);

  return (
    <div
      ref={eyeRef}
      className={`
        w-[120px] h-20 
        relative 
        bg-white 
        rounded-[100%]
        border-[3px] border-gray-800
        overflow-hidden
        cursor-pointer
        ${mirror ? "scale-x-[-1]" : ""}
      `}
    >
      <div className="w-full h-full bg-white relative">
        
        {/* Iris (colored part) - moves with mouse */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full"
          style={{
            background: "radial-gradient(circle, #4f46e5 30%, #312e81 100%)",
            x: springX,
            y: springY,
          }}
        >
          {/* Pupil (black center) - disappears when password focused */}
          <motion.div
            animate={{ scale: cover ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full bg-black"
          />
        </motion.div>

        {/* Light reflection (makes it look real) */}
        <div className="absolute top-[25%] left-[35%] w-3 h-3 bg-white rounded-full opacity-80" />
      </div>

      {/* Eyelid (closes when password field focused) */}
      <motion.div
        animate={{ height: cover ? "108%" : "0%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 right-0 -top-1 bg-gray-100 border-b-2 border-gray-800"
      />
    </div>
  );
}