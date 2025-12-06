"use client";

import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

export type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotionDiv = motion<HTMLDivElement>;
