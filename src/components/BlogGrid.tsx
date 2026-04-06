"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  thumbnail: string;
  category: string;
};

const POSTS_PER_PAGE = 9;

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "Todos",
    ...Array.from(new Set(posts.map((p) => p.category))).sort(),
  ];

  const filtered =
    activeCategory === "Todos"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const featured = currentPage === 1 && activeCategory === "Todos" ? paginated[0] : null;
  const grid = featured ? paginated.slice(1) : paginated;

  function changePage(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function changeCategory(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  return (
    <>
      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-accent text-white"
                : "bg-surface text-text-muted border border-border hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
            {cat !== "Todos" && (
              <span className="ml-1.5 text-xs opacity-60">
                {posts.filter((p) => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Featured post - only on first page, "Todos" */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-12 grid gap-8 no-underline md:grid-cols-2"
        >
          <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-lg">
            <img
              src={featured.thumbnail}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {featured.category}
            </span>
            <h3 className="mt-2 text-2xl leading-tight group-hover:text-accent transition-colors">
              {featured.title}
            </h3>
            <p className="mt-2 text-xs text-text-muted">
              {featured.date}
              {featured.readingTime && ` · ${featured.readingTime}`}
            </p>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              {featured.description}
            </p>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {grid.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group no-underline"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-md">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {post.category}
              </span>
              <h3 className="mt-1.5 text-lg leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-xs text-text-muted">
                {post.date}
                {post.readingTime && ` · ${post.readingTime}`}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {grid.length === 0 && !featured && (
        <p className="py-12 text-center text-text-muted">
          No hay articulos en esta categoria.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-2">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:border-accent disabled:opacity-30 disabled:hover:border-border"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-accent text-white"
                  : "border border-border hover:border-accent hover:text-accent"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:border-accent disabled:opacity-30 disabled:hover:border-border"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Results count */}
      <p className="mt-4 text-center text-xs text-text-muted">
        {filtered.length} articulo{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "Todos" && ` en ${activeCategory}`}
        {totalPages > 1 && ` · Pagina ${currentPage} de ${totalPages}`}
      </p>
    </>
  );
}
