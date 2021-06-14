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
      <Heading content="What we do ?" />
      <p className="text-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ullam
        voluptates dolores tempora eligendi! Nam, labore. Ut, inventore?
        Reiciendis temporibus inventore mollitia illo dignissimos quam, et
        similique omnis laboriosam laudantium!
      </p>
    </div>
  );
};

export default AboutUS;
