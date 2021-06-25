import React, { FunctionComponent } from 'react';
import { Styles } from './Footer.styles';
import copyRight from 'copyright';
import { Row, Col } from 'shards-react';
import { BootstrapIcon, Section, Link } from '..';
import { extendProperties } from '../../utilities/.';
import NextLink from 'next/link';
import type { IFooterProps } from './Footer.types';

export const Footer: FunctionComponent<IFooterProps> = ({ ...rest }) => {
  const { root, icons } = Styles({});

  return (
    <Section {...root} {...extendProperties(rest, { className: 'text-white' })}>
      <Row>
        <Col>{copyRight('Morajlab')}</Col>
        <Col lg={2} className="text-center" {...icons}>
          <NextLink href="https://github.com/morajlab" passHref>
            <Link>
              <BootstrapIcon name="github" />
            </Link>
          </NextLink>
          <NextLink href="#twitter" passHref>
            <Link>
              <BootstrapIcon name="twitter" />
            </Link>
          </NextLink>
        </Col>
      </Row>
    </Section>
  );
};

export default Footer;
