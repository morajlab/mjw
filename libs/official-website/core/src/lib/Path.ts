import { PATHS } from '@official-website/lib';
import { Env } from '@official-website/utilities';

export class Path {
  private Env: Env;

  public constructor() {
    this.Env = new Env();
  }

  public get = (path: string) =>
    PATHS[path]
      .map((value: any) =>
        typeof value === 'function' ? value(this.Env.get) : value
      )
      .join('/');
}

export default Path;
