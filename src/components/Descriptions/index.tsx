import * as React from 'react';

export type DescriptionsPropsType = {
  descriptionsList: string[];
  className: string;
  withLine?: boolean;
};

export const Descriptions = ({
  descriptionsList,
  className,
  withLine,
}: DescriptionsPropsType) => (
  <div>
    {descriptionsList.map((description, index) => (
      <p
        key={index}
        className={className}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    ))}
    {withLine && <span className={className.split('__')[0] + '__line'} />}
  </div>
);
