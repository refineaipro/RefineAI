"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export type MotionDivProps = HTMLMotionProps<"div">;

export const MotionDiv = (props: MotionDivProps) => {
  return <motion.div {...props} />;
};
