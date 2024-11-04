import * as React from 'react';
import hljs from 'highlight.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, Node } from '@contentful/rich-text-types';
import { CodeSnippet } from '@components';

const replaceSToCode = (children: React.ReactNode) =>
  React.Children.map(children, (child) =>
    React.isValidElement(child) && child.type === 's' ? (
      <code>{child.props.children}</code>
    ) : (
      child
    )
  );

const ALLOWED_LANGUAGES = ['tsx', 'ts', 'jsx', 'js', 'scss', 'html', 'bash'];

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
      // this logic applies <pre> tag as parent of code and
      // replaces all <s> tags to <code> inside <p>
      [BLOCKS.PARAGRAPH]: (_: Node, children: React.ReactNode) =>
        React.Children.toArray(children).some(
          (child) => React.isValidElement(child) && child.type === 'code'
        ) && typeof (children as React.ReactElement[])[0] === 'object' ? (
          <CodeSnippet
            code={(children as React.ReactElement[])[0].props.children}
            language={
              hljs.highlightAuto(
                (children as React.ReactElement[])[0].props.children,
                ALLOWED_LANGUAGES
              ).language || 'tsx'
            }
          />
        ) : (
          <p>{replaceSToCode(children)}</p>
        ),
      ...(limit === -1
        ? {}
        : {
            [BLOCKS.UL_LIST]: (_: Node, children: React.ReactNode) => {
              const limitedChildren = React.Children.toArray(children).slice(
                0,
                limit
              );

              // This logic adds three dots '...'
              // inside <ul> ---> <li> ---> <p> tag
              limitedChildren[limitedChildren.length - 1] = React.cloneElement(
                limitedChildren[
                  limitedChildren.length - 1
                ] as React.ReactElement,
                {},
                React.Children.map(
                  (
                    limitedChildren[
                      limitedChildren.length - 1
                    ] as React.ReactElement
                  ).props.children,
                  (child) =>
                    typeof child === 'string' || React.isValidElement(child)
                      ? React.cloneElement(
                          child as React.ReactElement,
                          {},
                          <>
                            {(child as React.ReactElement).props.children ||
                              child}
                            {'...'}
                          </>
                        )
                      : child
                )
              );

              return <ul>{limitedChildren}</ul>;
            },
          }),
    },
  });
