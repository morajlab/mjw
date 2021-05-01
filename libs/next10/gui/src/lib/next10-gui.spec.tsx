import React from 'react';
import { render } from '@testing-library/react';

import Next10Gui from './next10-gui';

describe('Next10Gui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Next10Gui />);
    expect(baseElement).toBeTruthy();
  });
});
