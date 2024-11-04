'use client';
import * as React from 'react';

import { IoCopy } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './styles.scss';

export type CodeSnippetPropsType = {
  code: string;
  language: string;
};

export const CodeSnippet = ({ code, language }: CodeSnippetPropsType) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsClicked(true);

        setTimeout(() => {
          setIsClicked(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="code-snippet">
      <div className="code-snippet__header">
        <p className="code-snippet__language"> {language}</p>
        <button onClick={handleCopy} className="code-snippet__button">
          {isClicked ? <FaCheck /> : <IoCopy />}
        </button>
      </div>
      <SyntaxHighlighter
        className="code-snippet__pre"
        language={language}
        style={nightOwl}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
