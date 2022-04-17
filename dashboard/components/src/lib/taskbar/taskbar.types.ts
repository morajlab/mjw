import type {
  IDashboardProps,
  DashboardComponent,
} from '@workspace/mjw/dashboard/types';

export interface ITaskbarProps extends IDashboardProps {}
export type TaskbarComponent = DashboardComponent<ITaskbarProps>;
