import { AuroraBackground } from "@/components/ui/aurora-background";
import ContentWithMotion from "@/components/ContentWithMotion";
import Navigation from "@/components/Navigation";
import { readFileSync } from "fs";
import { join } from "path";
import Image from "next/image";

export default function Home() {
  const markdownContent = readFileSync(
    join(process.cwd(), "content", "about.mdx"),
    "utf-8"
  );

  // Extract image markdown and split content
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
  const match = markdownContent.match(imageRegex);
  
  let beforeImage = "";
  let afterImage = markdownContent;
  let imageAlt = "";
  let imageSrc = "";

  if (match) {
    const imageMarkdown = match[0];
    imageAlt = match[1];
    imageSrc = match[2];
    const parts = markdownContent.split(imageMarkdown);
    beforeImage = parts[0];
    afterImage = parts.slice(1).join(imageMarkdown);
  }

  // Function to convert markdown links to actual links
  const renderTextWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let linkMatch;

    while ((linkMatch = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (linkMatch.index > lastIndex) {
        parts.push(text.substring(lastIndex, linkMatch.index));
      }
      
      // Add the link
      parts.push(
        <a
          key={linkMatch.index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {linkMatch[1]}
        </a>
      );
      
      lastIndex = linkRegex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <AuroraBackground>
      <Navigation />
      <ContentWithMotion>
        <article className="w-full max-w-4xl z-10 text-foreground px-6">
          {beforeImage && (
            <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed bg-transparent overflow-wrap-anywhere">
              {renderTextWithLinks(beforeImage)}
            </pre>
          )}
          {match && (
            <div className="my-6">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={300}
                height={300}
                className="rounded-lg mx-auto block"
              />
            </div>
          )}
          <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed bg-transparent overflow-wrap-anywhere">
            {renderTextWithLinks(afterImage)}
          </pre>
        </article>
      </ContentWithMotion>
    </AuroraBackground>
  );
}
