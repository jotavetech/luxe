import Link from "next/link";

import { MoveRight } from "lucide-react";

import { AnimateEnter } from "../AnimateEnter";

export function Button() {
  return (
    <AnimateEnter delay={0.2}>
      <Link
        href="/ui"
        className="relative inline-flex overflow-hidden rounded-xl p-px"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-1.5 rounded-[11px] bg-neutral-950 px-4 py-2 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          Explore all components <MoveRight size={12} />
        </span>
      </Link>
    </AnimateEnter>
  );
}
