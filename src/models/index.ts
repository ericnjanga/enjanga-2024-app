import { Registry, Model } from "miragejs";
import { Server } from "miragejs";
import { ReactNode } from "react";


/**
 * This typing allows MirageJS' schema to recognize the cars model in Mirage instance, 
 * enabling TypeScript to provide autocompletion and error-checking.
 */
export type AppSchema = { 
  // Correct models typing
  PageSection: Model;
  Hero: Model;
  InformationCard1: Model;
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
 
export type InformationCard1Props = {
  id: string
  title?: string
  parentId: string
  blurb: string
  description: string
};

export type ProjectProps = {
  id: string
  title: string 
  blurb: string
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


export type ModalContextProps = {
  isOpen: boolean               // Is the modal window open?
  renderingType: string          // Type of information being rendered: "data" or "another component"?
  modalData: InformationCard1Props | ProjectProps | null             // Data rendered by the modal
  openModal: ({ 
    renderingType, 
    dataType, 
    dataId }: { 
      renderingType: string, 
      dataType: string, 
      dataId: string 
  }) => void     // Responsible for opening the modal
  closeModal: () => void        // Responsible for losing the modal
};

export type InputFieldProps = {
  id: string
  type: string
  description: string
};


export type IconProps = { 
  size?: string, 
  className: string,
  name: 'cube' | 'hand',
};


export type HeadingProps = { 
  h: '1' | '2' | '3' | '4' | '5' | '6', 
  iconName?: 'cube' | 'hand',
  className?: string,
  children: ReactNode 
};