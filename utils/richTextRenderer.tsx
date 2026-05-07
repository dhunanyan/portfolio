import * as React from 'react';
import hljs from 'highlight.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, Node } from '@contentful/rich-text-types';
import { CodeSnippet } from '@components';

const ALLOWED_LANGUAGES = ['tsx', 'ts', 'jsx', 'js', 'scss', 'html', 'bash'];

const replaceSToCode = (children: React.ReactNode) =>
  React.Children.map(children, (child) =>
    React.isValidElement<{ children?: React.ReactNode }>(child) &&
    child.type === 's' ? (
      <code>{child.props.children}</code>
    ) : (
      child
    )
  );

const getCodeContent = (children: React.ReactNode): string | null => {
  const firstCodeNode = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement<{ children?: React.ReactNode }>(child) &&
      child.type === 'code'
  ) as React.ReactElement<{ children?: React.ReactNode }> | undefined;

  if (!firstCodeNode) {
    return null;
  }

  if (typeof firstCodeNode.props.children === 'string') {
    return firstCodeNode.props.children;
  }

  return String(firstCodeNode.props.children ?? '');
};

export const richTextRenderer = (
  document: Document,
  className: string,
  limit: number = -1
) =>
  documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.DOCUMENT]: (_: Node, children: React.ReactNode) => (
        <div className={className}>{children}</div>
      ),
      [BLOCKS.HEADING_1]: (_: Node, children: React.ReactNode) => (
        <h1>{replaceSToCode(children)}</h1>
      ),
      [BLOCKS.HEADING_2]: (_: Node, children: React.ReactNode) => (
        <h2>{replaceSToCode(children)}</h2>
      ),
      [BLOCKS.HEADING_3]: (_: Node, children: React.ReactNode) => (
        <h3>{replaceSToCode(children)}</h3>
      ),
      [BLOCKS.HEADING_4]: (_: Node, children: React.ReactNode) => (
        <h4>{replaceSToCode(children)}</h4>
      ),
      [BLOCKS.HEADING_5]: (_: Node, children: React.ReactNode) => (
        <h5>{replaceSToCode(children)}</h5>
      ),
      [BLOCKS.HEADING_6]: (_: Node, children: React.ReactNode) => (
        <h6>{replaceSToCode(children)}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (_: Node, children: React.ReactNode) => {
        const codeContent = getCodeContent(children);

        if (!codeContent) {
          return <p>{replaceSToCode(children)}</p>;
        }

        return (
          <CodeSnippet
            code={codeContent}
            language={hljs.highlightAuto(codeContent, ALLOWED_LANGUAGES).language || 'tsx'}
          />
        );
      },
      ...(limit === -1
        ? {}
        : {
            [BLOCKS.UL_LIST]: (_: Node, children: React.ReactNode) => {
              const allChildren = React.Children.toArray(children);
              const limitedChildren = allChildren.slice(0, limit);
              const hasMore = allChildren.length > limit;

              return (
                <ul>
                  {limitedChildren}
                  {hasMore && (
                    <li>
                      <p>...</p>
                    </li>
                  )}
                </ul>
              );
            },
          }),
    },
  });
