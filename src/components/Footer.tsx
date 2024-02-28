"use client"
import React from "react";
import { LampContainer } from '@/components/ui/lamp';
import { motion } from "framer-motion";


export function Footer() {
    return (
      <footer className="flex items-center justify-center bg-black text-gray-1000">
        <LampContainer>
            <motion.h1>© 2024 Sourabh Dubey. All rights reserved.</motion.h1>
        </LampContainer>
      </footer>
    );
  }

