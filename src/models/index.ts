import { Registry, Model } from "miragejs";
import { Server } from "miragejs";


/**
 * This typing allows MirageJS' schema to recognize the cars model in Mirage instance, 
 * enabling TypeScript to provide autocompletion and error-checking.
 */
export type AppSchema = { 
  Hero: Model; // Correct typing for the cars model 
};

// Extend the MirageJS server to include the schema
export type AppRegistry = Registry<AppSchema, {}>;
export type AppServer = Server<AppRegistry>;


/**
 * Car properties: Enabling TypeScript to provide autocompletion and error-checking.
 */
export type HeroProps = {
  id?: string,
  title: string, 
  description: string, 
};

 


export interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  neonVersion?: boolean
  /** How large should the button be? */
  // size?: 'small' | 'medium' | 'large';
};
