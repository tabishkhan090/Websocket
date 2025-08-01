import React, { useMemo } from "react";

const PALETTES = [
    "bg-cyan-100 border-cyan-500",
    "bg-green-100 border-green-500",
    "bg-pink-100 border-pink-500",
    "bg-orange-100 border-orange-500",
    "bg-amber-100 border-amber-500",
    "bg-violet-100 border-violet-500",
    "bg-rose-100 border-rose-500",
] as const;

type Size = "sm" | "md" | "lg" | "xl";

const SIZE_CLASSES: Record<Size, string> = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-lg",
    lg: "w-16 h-16 text-2xl",
    xl: "w-20 h-20 text-3xl",
};

function hashToIndex(str: string, len: number) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
    return Math.abs(h) % len;
}

export interface AvatarCircleProps {
  name?: string;          // Used to derive initial + color
  letter?: string;        // Explicit initial (overrides name)
  seed?: string;          // Stable color seed (e.g., user id)
  size?: Size;            // "sm" | "md" | "lg" | "xl"
  ring?: boolean;         // Subtle outer ring
  className?: string;     // Extra classes
  title?: string;         // Tooltip
}

export default function AvatarCircle({
    name,
    letter,
    seed,
    size = "md",
    ring = false,
    className = "",
    title,
}: AvatarCircleProps) {
    const initial = (letter ?? name ?? "?").trim().charAt(0).toUpperCase();

    const index = useMemo(
    () => hashToIndex(seed ?? name ?? initial, PALETTES.length),
    [seed, name, initial]
    );
    const palette = PALETTES[index];

    return (
    <div
    className={[
        "inline-flex items-center justify-center rounded-full border-2 font-bold select-none",
        "text-gray-900",
        SIZE_CLASSES[size],
        palette,
        ring ? "ring-1 ring-black/5" : "",
        className,
    ].join(" ")}
    
    aria-label={`Avatar ${initial}`}
    title={title ?? name ?? initial}
    >
    {initial}
    </div>
);
}