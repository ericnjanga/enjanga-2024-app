import { Registry, Model } from "miragejs";
import { Server } from "miragejs";


/**
 * This typing allows MirageJS' schema to recognize the cars model in Mirage instance, 
 * enabling TypeScript to provide autocompletion and error-checking.
 */
export type AppSchema = { 
  // Correct models typing
  PageSection: Model;
  Hero: Model;
  ExpertiseSpec: Model;
  NavOptions: Model;
};

// Extend the MirageJS server to include the schema
export type AppRegistry = Registry<AppSchema, {}>;
export type AppServer = Server<AppRegistry>;


/**
 * Car properties: Enabling TypeScript to provide autocompletion and error-checking.
 */
export type PageSectionProps = {
  id?: string,
  title: string, 
  description: string, 
}; 
 
export type ExpertiseSpecProps = {
  id: string
  title?: string
  blurb: string
  description: string
};

export type ProjectProps = {
  id: string
  title: string 
  description: string
};

export type NavOptionProps = {
  id: string
  name: string 
  url: string 
  description: string
};
 


export interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  neonVersion?: boolean
};