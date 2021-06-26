import { Bootstrap } from '@official-website/core';

export class Env {
  private env: NodeJS.ProcessEnv;

  constructor() {
    const { env } = new Bootstrap().init();

    this.env = env;
  }

  get = (prop: string) => this.env[prop];
}

export default Env;
