'use client';

import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeSnippetProps = {
  code: string;
  language?: string;
};

export const CodeSnippet = ({ code, language = 'tsx' }: CodeSnippetProps) => (
  <SyntaxHighlighter
    language={language}
    style={oneDark}
    customStyle={{ borderRadius: '10px', margin: '1rem 0', fontSize: '0.82rem' }}
    wrapLongLines
  >
    {code}
  </SyntaxHighlighter>
);
