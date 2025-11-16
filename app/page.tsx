import { AuroraBackground } from "@/components/ui/aurora-background";
import ContentWithMotion from "@/components/ContentWithMotion";
import Navigation from "@/components/Navigation";
import Content from "@/content/about.mdx";

export default function Home() {
  return (
    <AuroraBackground>
      <Navigation />
      <ContentWithMotion>
        <article
          className="w-full z-10 prose prose-lg prose-slate dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:pb-3 prose-h1:border-b-2 prose-h1:border-gray-200 dark:prose-h1:border-gray-700
            prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700
            prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
            prose-h4:text-lg prose-h4:mb-2 prose-h4:mt-4
            prose-p:mb-4 prose-p:leading-relaxed prose-p:text-base
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            prose-li:mb-2 prose-li:leading-relaxed
            prose-strong:font-semibold prose-strong:text-foreground
            prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-600
            prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
            prose-hr:my-8 prose-hr:border-gray-200 dark:prose-hr:border-gray-700
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            text-foreground"
        >
          <Content />
        </article>
      </ContentWithMotion>
    </AuroraBackground>
  );
}
