import React, { useState, useEffect } from "react";
import { m, useMotionValue, useTransform, animate } from "framer-motion/dist/framer-motion";
import { getIndex, useFlubber } from "../../utils/use-flubber";

export default function FlubberIcon({ paths, duration, colors, width, height, headerIconProps }) {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);
  const { isClicked, setIsClicked } = headerIconProps

  useEffect(() => {
    const animation = isClicked && animate(progress, pathIndex, {
      duration: duration,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
          setIsClicked(false)
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });

    return () => isClicked && animation.stop();
  }, [pathIndex, progress, isClicked]);

  return (
    <svg width={width} height={height}>
      <g transform="translate(0 0) scale(1 1)">
        <m.path fill={fill} d={path} />
      </g>
    </svg>
  );
}
