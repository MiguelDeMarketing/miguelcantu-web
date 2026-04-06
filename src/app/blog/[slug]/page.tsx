import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getBlogPost, getBlogPosts, getRelatedPosts } from "@/lib/blog";
import TableOfContents from "@/components/TableOfContents";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getBlogPosts();
  if (posts.length === 0) return [{ slug: "_placeholder" }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.thumbnail }],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, 4);

  return (
    <article className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted no-underline transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        {/* Header */}
        <div className="mb-8 max-w-[700px]">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {post.category}
          </span>
          <h1 className="mt-2">{post.title}</h1>
          <p className="mt-4 text-sm text-text-muted">
            {post.date}
            {post.readingTime && ` · ${post.readingTime}`}
          </p>
        </div>

        {/* Thumbnail */}
        <div className="mb-8 aspect-[16/9] max-w-[700px] overflow-hidden rounded-lg shadow-lg">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Author bar */}
        <div className="mb-12 flex max-w-[700px] items-center gap-4 border-b border-border pb-8">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-accent/20">
            <img
              src="/miguel-avatar.png"
              alt="Miguel Cantu"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">
              Miguel Cantu, MBA, MBD
            </p>
            <p className="text-xs text-text-muted">
              Consultor en Estrategia Digital
            </p>
          </div>
        </div>

        {/* 3-column layout: Related | Content | TOC+CTA */}
        <div className="grid gap-12 lg:grid-cols-[220px_1fr_220px]">
          {/* Left sidebar - Related posts */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
                Articulos relacionados
              </p>
              <div className="space-y-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block no-underline"
                  >
                    <div className="mb-2 aspect-[16/10] overflow-hidden rounded-md">
                      <img
                        src={r.thumbnail}
                        alt={r.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {r.category}
                    </span>
                    <h4 className="mt-0.5 text-xs font-medium leading-snug text-primary group-hover:text-accent transition-colors">
                      {r.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="min-w-0 max-w-[700px]">
            <div className="prose prose-lg max-w-none text-text [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline [&_h2]:font-heading [&_h2]:text-primary [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:pt-8 [&_h2]:border-t [&_h2]:border-border [&_h3]:font-heading [&_h3]:text-primary [&_h3]:mt-10 [&_h3]:mb-4 [&_h4]:font-heading [&_h4]:text-primary [&_h4]:mt-8 [&_h4]:mb-3 [&_p]:mb-6 [&_p]:leading-[1.8] [&_ul]:mb-6 [&_ul]:mt-2 [&_ol]:mb-6 [&_ol]:mt-2 [&_li]:mb-2 [&_li]:leading-[1.7] [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-text-muted [&_strong]:text-primary [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-8">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Mobile related posts */}
            <div className="mt-16 border-t border-border pt-12 lg:hidden">
              <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-primary">
                Articulos relacionados
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block no-underline"
                  >
                    <div className="mb-3 aspect-[16/10] overflow-hidden rounded-lg">
                      <img
                        src={r.thumbnail}
                        alt={r.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {r.category}
                    </span>
                    <h4 className="mt-1 text-sm font-medium leading-snug group-hover:text-accent transition-colors">
                      {r.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar - TOC + CTA + Author */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Table of contents */}
              <TableOfContents headings={post.headings} />

              {/* CTA Card */}
              <div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
                <p className="text-sm font-semibold text-primary">
                  ¿Necesitas ayuda con esto?
                </p>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  Agenda una consulta sin compromiso y exploremos como aplicar
                  esto en tu empresa.
                </p>
                <Link
                  href="/contacto"
                  className="mt-4 block rounded-md bg-accent px-4 py-2.5 text-center text-xs font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
                >
                  Agendar Consulta
                </Link>
              </div>

              {/* Mini author */}
              <div className="rounded-lg border border-border bg-surface p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      src="/miguel-avatar.png"
                      alt="Miguel Cantu"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary">Miguel Cantu</p>
                    <p className="text-[10px] text-text-muted">MBA, MBD</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">
                  Consultor en estrategia digital con mas de 7 anos ayudando a
                  empresas a tomar mejores decisiones.
                </p>
                <Link
                  href="/sobre-mi"
                  className="mt-3 inline-block text-xs font-medium text-accent no-underline hover:underline"
                >
                  Conocer mas →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
