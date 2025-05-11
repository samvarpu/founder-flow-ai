
import { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  initial?: object;
  animate?: object;
  transition?: object;
  whileInView?: object;
  viewport?: object;
  className?: string;
}

// This is a simple implementation - in a real app, you might use framer-motion
export function Motion({ 
  children, 
  initial, 
  animate, 
  transition, 
  whileInView, 
  viewport,
  className = "" 
}: MotionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
