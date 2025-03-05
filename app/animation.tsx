  "use client";
  import { motion, useScroll, useTransform } from "framer-motion";

  export default function Animation() {
    const { scrollYProgress } = useScroll();

    // Define animations based on scroll position
    const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves left
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves up

    const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);  // Moves right
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves up

    const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);  // Moves down

    return (
      <div className="relative w-full h-[200vh] bg-black">
        {/* Circle 1 */}
        <motion.div
          className="
            h-[200px] w-[200px]  z-20
            rounded-full border-4 border-dotted border-white bg-transparent
            absolute top-1/2 left-1/2 -translate-x-30 -translate-y-1/2
          "
          style={{ x: x1, y: y1 }}
        >
          1
        </motion.div>

        {/* Circle 2 */}
        <motion.div
          className="
            h-[200px] w-[200px] z-10
            rounded-full border-4 border-dotted border-white bg-transparent
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          "
          style={{ x: x2, y: y2 }}
        >
          2
        </motion.div>

        {/* Circle 3 */}
        <motion.div
          className="
            h-[200px] w-[200px] z-1
            rounded-full border-4 border-dotted border-white bg-transparent
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          "
          style={{ y: y3 }}
        >
          3
        </motion.div>
      </div>
    );
  }
