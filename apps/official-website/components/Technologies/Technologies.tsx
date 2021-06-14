import React, { FunctionComponent } from 'react';
import { Styles } from './Technologies.styles';
import { Section, Icon, IIconSVGProps, Heading } from '..';
import { extendProperties } from '../../utilities/.';
import { IconsList } from './list';
import type { ITechnologiesProps } from './Technologies.types';

export const Technologies: FunctionComponent<ITechnologiesProps> = ({
  ...rest
}) => {
  const { root, icons, iconsContainer, heading } = Styles({});
  let ChangedIconsList: IIconSVGProps[] = IconsList.map((name, index) => {
    let result = { name };

    if ((index * 10) % 6 === 0) {
      result = extendProperties(result, {
        fillOpacity: 0,
        stroke: 'rgba(133, 84, 246, 0.6)',
      });
    }

    return result;
  });

  return (
    <Section
      {...root}
      {...extendProperties(rest, {
        className:
          'd-flex flex-column justify-content-center align-items-center',
      })}
    >
      <Heading content="What technologies we are using ?" {...heading} />
      <p className="text-light text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        nihil aliquid perspiciatis ea, harum vero. Assumenda dolor hic
        aspernatur possimus et tempore autem vero tempora dolorem, ratione
        facilis eius consectetur?
      </p>
      <div className="text-center" {...iconsContainer}>
        <Icon
          className="m-2"
          name={ChangedIconsList}
          style={icons}
          size="50px"
        />
      </div>
    </Section>
  );
};

export default Technologies;
