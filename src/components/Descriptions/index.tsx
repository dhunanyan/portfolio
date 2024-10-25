import * as React from 'react';

export type DescriptionsPropsType = {
  descriptionsList: string[];
  className: string;
};

export const Descriptions = ({
  descriptionsList,
  className,
}: DescriptionsPropsType) =>
  descriptionsList.map((description, index) => (
    <p
      key={index}
      className={className}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  ));
