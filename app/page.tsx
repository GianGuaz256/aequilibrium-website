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

  // Function to convert markdown links to actual links and apply colors to syntax
  const renderTextWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let linkMatch;

    while ((linkMatch = linkRegex.exec(text)) !== null) {
      // Add text before the link with color styling
      if (linkMatch.index > lastIndex) {
        const textBefore = text.substring(lastIndex, linkMatch.index);
        parts.push(...applyMarkdownColors(textBefore, parts.length));
      }
      
      // Add the link
      parts.push(
        <a
          key={`link-${linkMatch.index}`}
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

    // Add remaining text with color styling
    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex);
      parts.push(...applyMarkdownColors(remainingText, parts.length));
    }

    return parts.length > 0 ? parts : text;
  };

  // Function to apply colors to markdown syntax - entire lines based on starting syntax
  const applyMarkdownColors = (text: string, keyOffset: number) => {
    const result: React.ReactNode[] = [];
    const lines = text.split('\n');
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];
      let lineColor = null;
      
      // Check what the line starts with and apply color to entire line
      if (line.trimStart().startsWith('##')) {
        // Headers - blue
        lineColor = '#4A49f4';
      } else if (line.trimStart().startsWith('**')) {
        // Bold text lines - green
        lineColor = '#47893E';
      } else if (line.trimStart().startsWith('-')) {
        // List items - violet
        lineColor = '#B33599';
      }
      
      result.push(
        <span key={`${keyOffset}-line-${lineIndex}`} style={lineColor ? { color: lineColor } : undefined}>
          {line}
          {lineIndex < lines.length - 1 ? '\n' : ''}
        </span>
      );
    }
    
    return result;
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
