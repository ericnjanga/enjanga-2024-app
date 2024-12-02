declare module 'miragejs' {
  import { Factory, ModelDefinition, Registry, Server } from 'miragejs/-types';

  export type Model<T = any> = ModelDefinition<T>;

  export function createServer(options: any): Server;

  export {
    Factory,
    Registry,
    Server,
  };
}
