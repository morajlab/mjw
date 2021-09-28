import type { Icon } from '..';
import type { IMantineComponentCommonProps } from '../../types';

export interface IToggleActionButtonProps<IStateType> extends IMantineComponentCommonProps {
  setStateCallback: () => void;
  state: IStateType;
  stateIcons: {
    state: IStateType;
    icon: typeof Icon;
  }[];
}

export interface IToggleActionButtonStyleProps {}
