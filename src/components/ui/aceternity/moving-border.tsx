import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <div
        className={cn(
          "absolute -inset-px rounded-xl",
          "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
          borderClassName
        )}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: duration / 1000, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-xl"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.4) 360deg)",
          }}
        />
      </div>
      <div className={cn("relative rounded-lg", className)}>{children}</div>
    </div>
  );
};