import React, { useState, useEffect } from "react";
import { m, useMotionValue, useTransform, animate } from "framer-motion/dist/framer-motion";
import { getIndex, useFlubber } from "../../utils/use-flubber";

const headerIconProps = {
  paths:[
    "M9.99991 0L20 17H0L9.99991 0Z",
    "M0 0H17V17H0V0Z",
    "M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z",
    "M0 0H17V17H0V0Z",
    "M9.99991 0L20 17H0L9.99991 0Z",
  ],
  colors:[
    "#31CF24",
    "#56ABF9",
    "#F3B234",
    "#F96056",
    "#31CF24",
  ],
  width: 20,
  height: 20,
  duration: 0.5
}


export default function FlubberIcon() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, headerIconProps.paths.map(getIndex), headerIconProps.colors);
  const path = useFlubber(progress, headerIconProps.paths);
  // const { isClicked, setIsClicked } = headerIconProps

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: headerIconProps.duration,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === headerIconProps.paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
          // setIsClicked(false)
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });

    // animation.start()

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <svg width={headerIconProps.width} height={headerIconProps.height}>
      <g transform="translate(0 0) scale(1 1)">
        <m.path fill={fill} d={path} />
      </g>
    </svg>
  );
}
