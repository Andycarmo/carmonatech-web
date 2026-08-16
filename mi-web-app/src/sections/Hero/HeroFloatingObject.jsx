import { motion } from "framer-motion";

import {
  FiSettings,
  FiTool,
  FiCode,
} from "react-icons/fi";

const floatingItems = [
  {
    icon: FiSettings,
    alt: "Ingeniería mecánica",
    className: "top-[20%] right-[36%] xl:right-[38%]",
    size: "w-20 h-20",
    duration: 7,
    delay: 0,
    iconSize: "text-4xl",
    rotateIcon: true,
    movement: {
      x: [0, 18, -12, 8, 0],
      y: [0, -20, 10, -8, 0],
      rotate: [0, 8, -5, 6, 0],
    },
  },
{
  icon: FiTool,
  alt: "Mantenimiento industrial",
  className: "top-[42%] right-[-2%] xl:right-[1%]",
  size: "w-20 h-20",
  duration: 5,
  delay: 1.5,
  iconSize: "text-4xl",
  rotateIcon: false,
  movement: {
    y: [0, -25, 0, 25, 0],
    rotate: [0, -5, 4, -3, 0],
  },
},
{
  icon: FiCode,
  alt: "Desarrollo de software",
  className: "top-[65%] right-[31%] xl:right-[34%]",
  size: "w-20 h-20",
  duration: 6,
  delay: 1.2,
  iconSize: "text-4xl",
  rotateIcon: false,
  movement: {
    y: [0, -18, 0, 18, 0],
  },
},
];

export default function HeroFloatingObject() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-[4]
        hidden
        lg:block
      "
    >
      {floatingItems.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.alt}
            className={`
              absolute
              ${item.className}
              ${item.size}
            `}
            animate={item.movement}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glow */}
            <motion.div
              className="
                absolute
                inset-1
                rounded-2xl
                bg-blue-500/30
                blur-xl
              "
              animate={{
                opacity: [0.25, 0.65, 0.25],
                scale: [0.85, 1.15, 0.85],
              }}
              transition={{
                duration: item.duration / 2,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Card */}
            <div
              className="
                relative
                flex
                h-full
                w-full
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-400/30
                bg-slate-950/60
                backdrop-blur-md
                shadow-[0_0_30px_rgba(59,130,246,0.25)]
              "
            >
              {item.rotateIcon ? (
                <motion.div
                  className="
                    relative
                    z-10
                    text-blue-400
                    drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]
                  "
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Icon className={item.iconSize} />
                </motion.div>
              ) : (
                <Icon
                  className={`
                    relative
                    z-10
                    ${item.iconSize}
                    text-blue-400
                    drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]
                  `}
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}