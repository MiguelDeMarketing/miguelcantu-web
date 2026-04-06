import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  thumbnail: string;
  category: string;
  content: string;
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

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    const slug = file.replace(/\.mdx?$/, "");
    const title = data.title || "Sin titulo";

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
      content,
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
