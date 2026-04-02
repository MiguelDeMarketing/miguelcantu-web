"use client";

/**
 * Subtle grid/dot pattern overlay for white sections.
 * Use as a child of a relative-positioned container.
 */
export function BackgroundPattern({ variant = "grid" }: { variant?: "grid" | "dots" | "lines" }) {
  if (variant === "dots") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="var(--color-primary)" fillOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    );
  }

  if (variant === "lines") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.25]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="var(--color-primary)" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>
    );
  }

  // Grid
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.3]">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" strokeOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
