import "react-i18next";

// Ensuring TypeScript support for 'miragejs'
declare module "miragejs" {
  import { Factory, ModelDefinition, Registry, Server } from "miragejs/-types";

  export type Model<T = any> = ModelDefinition<T>;

  export function createServer(options: any): Server;

  export { Factory, Registry, Server };
}

// Ensuring TypeScript support for 'react-i18next'
declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: {
        welcome: string;
        contactBtn: string;
        key3: string;
        key4: string;
        key5: string;
      };
    };
  }
}
