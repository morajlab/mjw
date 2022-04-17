import type { MLComponent } from '@morajlab/npm.react.types.common';
import type { IBareProps } from '@morajlab/npm.react.components.bare';

export interface IDashboardProps extends IBareProps {}
export type DashboardComponent<T = {}> = MLComponent<T>;
