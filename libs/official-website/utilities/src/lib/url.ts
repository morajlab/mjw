import { Env } from './Env';

export class URL {
  private Env: Env;

  public constructor() {
    this.Env = new Env();
  }

  resolveURL = (url: string) =>
    /^https?:\/\//.test(url) ? url : `${this.Env.get('WEBSITE_URL')}/${url}`;
}
