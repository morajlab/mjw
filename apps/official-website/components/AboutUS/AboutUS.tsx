import React, { FunctionComponent } from 'react';
import { Heading } from '..';
import { extendProperties } from '../../utilities/.';
import { Styles } from './AboutUS.styles';
import type { IAboutUSProps } from './AboutUS.types';

export const AboutUS: FunctionComponent<IAboutUSProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <div
      {...root}
      {...extendProperties(rest, {
        className: 'd-flex flex-column justify-content-center',
      })}
    >
      <Heading content="Who we are ?" />
      <p className="text-light">
        Morajlab is open-source laboratory of Moraj team. Moraj formed in 2020
        and intends to work in the fields of software development, design and
        programming training.
      </p>
    </div>
  );
};

export default AboutUS;
