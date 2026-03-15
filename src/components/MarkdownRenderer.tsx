'use client';

import Markdown from 'markdown-to-jsx';

interface MarkdownRendererProps {
  children: string;
  options?: Record<string, unknown>;
}

export default function MarkdownRenderer({ children, options }: MarkdownRendererProps) {
  return <Markdown options={options}>{children}</Markdown>;
}
