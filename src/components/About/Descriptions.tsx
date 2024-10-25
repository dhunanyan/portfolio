import * as React from 'react';

export type DescriptionsPropsType = {
  descriptionsList: string[];
};

export const Descriptions = ({ descriptionsList }: DescriptionsPropsType) =>
  descriptionsList.map((description, index) => (
    <p
      key={index}
      className="about__description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  ));
