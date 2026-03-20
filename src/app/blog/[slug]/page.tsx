import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-dark text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar blog
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <time dateTime={post.date}>{post.dateFormatted}</time>
            <span>&middot;</span>
            <span>{post.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold animate-fade-in-up">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-primary mt-10 mb-4">{line.slice(3)}</h2>;
              }
              if (line.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-semibold text-primary mt-8 mb-3">{line.slice(4)}</h3>;
              }
              if (line.startsWith("- **")) {
                const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
                if (match) {
                  return (
                    <li key={i} className="text-muted ml-4 mb-2 list-disc">
                      <strong className="text-dark">{match[1]}</strong>{match[2]}
                    </li>
                  );
                }
              }
              if (line.startsWith("- ")) {
                return <li key={i} className="text-muted ml-4 mb-2 list-disc">{line.slice(2)}</li>;
              }
              if (line.trim() === "") return <div key={i} className="h-2" />;
              return <p key={i} className="text-muted leading-relaxed mb-4">{line}</p>;
            })}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-muted">
              Geschreven door <span className="font-medium text-dark">{post.author}</span>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
