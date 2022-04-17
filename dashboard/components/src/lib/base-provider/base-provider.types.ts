import { createTheme } from '@mui/material/styles';
import type {
  DashboardComponent,
  IDashboardProps,
} from '@workspace/mjw/dashboard/types';

export interface IBaseProviderProps {
  children: IDashboardProps['children'];
  theme?: Parameters<typeof createTheme>['0'];
}
export type BaseProviderComponent = DashboardComponent<IBaseProviderProps>;
