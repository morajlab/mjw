import React, { FunctionComponent } from 'react';
import { Container } from 'shards-react';
import { Styles } from './Technologies.styles';
import { Icon, IIconSVGProps } from '..';
import { IconsList } from './list';
import type { ITechnologiesProps } from './Technologies.types';

export const Technologies: FunctionComponent<ITechnologiesProps> = ({
  ...rest
}) => {
  const { root, icons, iconsContainer } = Styles({});
  let ChangedIconsList: IIconSVGProps[] = IconsList.map((name, index) => {
    let result =
      (index * 10) % 6 === 0
        ? { name, fillOpacity: 0, stroke: 'rgba(133, 84, 246, 0.6)' }
        : { name };

    return result;
  });

  return (
    <Container className="p-5 text-center" fluid {...root} {...rest}>
      <h1 className="text-white fw-bolder">
        _What technologies we are using ?
      </h1>
      <p className="text-light">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        nihil aliquid perspiciatis ea, harum vero. Assumenda dolor hic
        aspernatur possimus et tempore autem vero tempora dolorem, ratione
        facilis eius consectetur?
      </p>
      <div {...iconsContainer}>
        <Icon
          className="m-2"
          name={ChangedIconsList}
          style={icons}
          size="50px"
        />
      </div>
    </Container>
  );
};

export default Technologies;
