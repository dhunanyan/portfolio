import * as React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, Node } from '@contentful/rich-text-types';

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
      ...(limit === -1
        ? {}
        : {
            [BLOCKS.UL_LIST]: (_: Node, children: React.ReactNode) => {
              const limitedChildren = React.Children.toArray(children).slice(
                0,
                limit
              );

              // This logic add three dots '...'
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
