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
  const ChangedIconsList: IIconSVGProps[] = IconsList.map((name, index) => {
    let rand: number = Math.floor(Math.random() * 2) + 1;

    if (index % rand === 0) {
      return { name, fill: '#2f82ff' };
    }

    return { name };
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
