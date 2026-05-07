'use client';
import * as React from 'react';

export type DescriptionsPropsType = {
  id: string;
  skills: string[];
};

export const Skills = ({ id, skills }: DescriptionsPropsType) => {
  const ref = React.useRef<HTMLUListElement | null>(null);
  const handleMouseEnter = () => {
    const elements = [
      ...(ref.current?.children as HTMLCollection),
    ] as HTMLLIElement[];
    const animationDuration = 200;
    const timeDifferenceBetweenCurrentAndNext = 10;

    elements.forEach((element, index) => {
      setTimeout(() => {
        element.style.transform = 'translate(10px, 0)';
      }, timeDifferenceBetweenCurrentAndNext * index);

      setTimeout(
        () => {
          element.style.transform = 'translate(0, 0)';
        },
        timeDifferenceBetweenCurrentAndNext * index + animationDuration
      );
    });
  };

  return (
    <ul ref={ref} className="about__list" onMouseEnter={handleMouseEnter}>
      {skills.map((skill, index) => (
        <li className={`about__item about__item--${id}`} key={index}>
          <p>{skill}</p>
        </li>
      ))}
    </ul>
  );
};
