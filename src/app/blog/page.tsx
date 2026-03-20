import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lees onze laatste inzichten over AI, software development, cloud technologie en digitale transformatie.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-dark text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold animate-fade-in-up">
            Blog
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl animate-fade-in-up animate-delay-200">
            Inzichten en artikelen over technologie, AI en digitale innovatie.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-muted text-lg py-12">
              Binnenkort verschijnen hier onze eerste artikelen.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted mb-3">
                      <time dateTime={post.date}>{post.dateFormatted}</time>
                      <span>&middot;</span>
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm text-accent font-medium mt-4 hover:text-accent-light transition-colors"
                    >
                      Lees meer
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
