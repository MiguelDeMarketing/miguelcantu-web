"use client";

import { useState, useEffect } from "react";

type Heading = { id: string; text: string };

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
        En este articulo
      </p>
      <ul className="space-y-2 border-l-2 border-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`-ml-[2px] block border-l-2 py-1 pl-4 text-sm no-underline transition-colors ${
                activeId === h.id
                  ? "border-accent text-accent font-medium"
                  : "border-transparent text-text-muted hover:text-primary hover:border-border"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
