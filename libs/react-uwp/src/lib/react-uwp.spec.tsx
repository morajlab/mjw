import React from 'react';
import { render } from '@testing-library/react';

import ReactUwp from './react-uwp';

describe('ReactUwp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUwp />);
    expect(baseElement).toBeTruthy();
  });
});
