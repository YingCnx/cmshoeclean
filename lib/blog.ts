// lib/blog.ts
// อ่านบทความ MDX จากโฟลเดอร์ content/blog/{locale}/*.mdx
// ใช้ gray-matter แยก frontmatter (title, description, date ฯลฯ) ออกจากเนื้อหา

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Locale = "th" | "en";

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string; // รูปแบบ "YYYY-MM-DD"
  category: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export interface BlogPost extends BlogFrontmatter {
  content: string; // MDX source ดิบ ยังไม่ได้ compile
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getPostFilePaths(locale: Locale): string[] {
  const dir = path.join(BLOG_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(dir, file));
}

/**
 * คืนค่ารายชื่อ slug ทั้งหมดของภาษานั้นๆ ใช้กับ generateStaticParams
 */
export function getAllSlugs(locale: Locale): string[] {
  return getPostFilePaths(locale).map((filePath) =>
    path.basename(filePath, ".mdx")
  );
}

/**
 * คืนค่า frontmatter ของทุกบทความ เรียงจากใหม่ไปเก่า (ใช้กับหน้า listing)
 */
export function getAllPosts(locale: Locale): BlogFrontmatter[] {
  const filePaths = getPostFilePaths(locale);

  const posts = filePaths.map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    const slug = path.basename(filePath, ".mdx");
    return { ...(data as Omit<BlogFrontmatter, "slug">), slug };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * คืนค่าบทความเต็ม (frontmatter + เนื้อหา MDX) จาก slug ที่ระบุ
 * คืนค่า null ถ้าไม่พบไฟล์ (ใช้แสดงหน้า 404)
 */
export function getPostBySlug(locale: Locale, slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    ...(data as Omit<BlogFrontmatter, "slug">),
    slug,
    content,
  };
}
