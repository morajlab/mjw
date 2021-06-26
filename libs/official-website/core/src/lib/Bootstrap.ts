export class Bootstrap {
  public constructor(private env: NodeJS.ProcessEnv = process.env) {}

  public init = () => {
    return {
      env: this.env,
    };
  };
}

export default Bootstrap;
