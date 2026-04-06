import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type Heading = {
  id: string;
  text: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  thumbnail: string;
  category: string;
  content: string;
  headings: Heading[];
};

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  "Transformacion Digital": ["transformacion digital", "transformación digital", "revolucion digital", "era digital", "mundo digital", "e-business", "tecnologia exponencial", "ingenieria en transformacion"],
  "Marketing Digital": ["marketing digital", "marketing pull", "marketing push", "redes sociales", "tik tok", "semrush", "manejo de redes", "contenido en redes", "mercadotecnia", "omnicanalidad", "agencia de marketing"],
  "Estrategia": ["planeacion estrategica", "objetivos smart", "analisis pestel", "framework", "modelo de negocio", "metodologia 5s", "metodologias agiles", "consultoria"],
  "Liderazgo": ["emprendedor", "lider", "jefe", "habilidades directivas", "cfo", "mujeres en", "miedo a cometer", "home office", "people analytics"],
  "Innovacion": ["inteligencia artificial", "ciberseguridad", "comercio electronico", "ciudadania digital", "tecnologia en los adolescentes", "empresa socialmente responsable", "shared value", "creacion de negocios"],
  "Negocio": ["asesoria de negocio", "desarrollo de negocio", "entornos vuca", "pymes"],
};

function inferCategory(slug: string, title: string): string {
  const text = (slug + " " + title).toLowerCase();
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) return category;
  }
  return "Negocio";
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function markdownToHtml(markdown: string): { html: string; headings: Heading[] } {
  const result = remark().use(html, { sanitize: false }).processSync(markdown);
  let htmlStr = result.toString();

  const headings: Heading[] = [];
  htmlStr = htmlStr.replace(/<h2>(.*?)<\/h2>/g, (_, text) => {
    const id = slugify(text.replace(/<[^>]*>/g, ""));
    headings.push({ id, text: text.replace(/<[^>]*>/g, "") });
    return `<h2 id="${id}">${text}</h2>`;
  });

  return { html: htmlStr, headings };
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    const slug = file.replace(/\.mdx?$/, "");
    const title = data.title || "Sin titulo";

    const rendered = markdownToHtml(content);

    return {
      slug,
      title,
      description: data.description || "",
      date: data.date ? new Date(data.date).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) : "",
      readingTime: stats.text.replace("read", "de lectura").replace("min", "min"),
      thumbnail: data.thumbnail || `/blog/${slug}.png`,
      category: data.category || inferCategory(slug, title),
      content: rendered.html,
      headings: rendered.headings,
    };
  });

  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime() || 0;
    const dateB = new Date(b.date).getTime() || 0;
    return dateB - dateA;
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export function getRelatedPosts(slug: string, limit = 4): BlogPost[] {
  const posts = getBlogPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return posts.slice(0, limit);

  const sameCategory = posts.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = posts.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}
