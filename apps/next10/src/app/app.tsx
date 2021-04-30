import React, { HTMLAttributes, FunctionComponent } from 'react';
import { Button } from 'react-uwp';

export interface IAppProps extends HTMLAttributes<HTMLDivElement> {}

export const App: FunctionComponent<IAppProps> = () => {
  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis,
        beatae inventore dolorum excepturi laborum architecto eaque quia
        impedit. Dolorem doloremque illo natus dolorum error non maxime dolore,
        voluptatibus impedit.
      </div>
      <Button tooltip="Mini Tooltip" />
    </>
  );
};
