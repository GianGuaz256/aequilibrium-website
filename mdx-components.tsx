import type { MDXComponents } from 'mdx/types';

// Helper to generate slug from heading text
const generateId = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => {
      const id = typeof children === 'string' ? generateId(children) : '';
      return (
        <h1 id={id} className="text-4xl font-bold mb-6 mt-8 pb-4 border-b-2 border-gray-200 dark:border-gray-700 scroll-mt-20">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = typeof children === 'string' ? generateId(children) : '';
      return (
        <h2 id={id} className="text-2xl font-bold mb-4 mt-8 pb-2 border-b border-gray-200 dark:border-gray-700 scroll-mt-20">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mb-2 mt-4">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-base">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    hr: () => (
      <hr className="my-8 border-gray-200 dark:border-gray-700" />
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">
        {children}
      </strong>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        className="my-6 rounded-lg max-w-xs mx-auto block"
      />
    ),
    ...components,
  };
}

