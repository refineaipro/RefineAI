"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

export type MotionDivProps = HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const MotionDiv = motion.div as React.FC<MotionDivProps>;
