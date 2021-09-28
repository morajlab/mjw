import { ActionIcon } from '@mantine/core';
import type { IToggleActionButtonProps } from './ToggleActionButton.types';

export const ToggleActionButton = <IStateType extends unknown>({
  setStateCallback,
  state,
  stateIcons,
  ...rest
}: IToggleActionButtonProps<IStateType>) => {
  return (
    <div {...rest}>
      <ActionIcon onClick={setStateCallback}>
        {stateIcons.filter((value) => value.state === state)[0].icon}
      </ActionIcon>
    </div>
  );
};

export default ToggleActionButton;
