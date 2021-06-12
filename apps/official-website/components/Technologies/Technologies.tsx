import React, { FunctionComponent } from 'react';
import { Container } from 'shards-react';
import { Styles } from './Technologies.styles';
import { Icon } from '..';
import type { ITechnologiesProps } from './Technologies.types';

export const Technologies: FunctionComponent<ITechnologiesProps> = ({
  ...rest
}) => {
  const { root } = Styles({});

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
      <Icon name={['4d', 'adobe', 'airbnb']} style={{ color: '#2f82ff' }} />
    </Container>
  );
};

export default Technologies;
