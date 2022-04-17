import * as ReactDOM from 'react-dom';
import { BaseProvider } from '@workspace/mjw/dashboard/components';
import { theme } from './theme';

import App from './app/app';

ReactDOM.render(
  <BaseProvider theme={theme}>
    <App />
  </BaseProvider>,
  document.getElementById('root')
);
