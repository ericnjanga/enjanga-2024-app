import { Registry, Model } from "miragejs";
import { Server } from "miragejs";
import { ReactNode } from "react";
import { FieldInputProps, FieldMetaProps } from "formik";
import { mockContactForm } from "./mockupData";


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
  id?: string
  title: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
}; 
 
export type InformationCard1Props = {
  id: string
  parentId: string
  className?: string
  title?: {
    en: string
    fr: string
  }
  blurb: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
};

export type ProjectProps = {
  id: string
  image: string
  className?: string
  title: {
    en: string
    fr: string
  } 
  blurb: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
};

export type NavOptionProps = {
  id: string
  url: string 
  name: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
};

export type ExpertiseSpecProps = {
  id: string
  parentId: string
  blurb: {
    en: string
    fr: string
  }
  title: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
};

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  neonVersion?: boolean
  children: ReactNode
  href?: string
  target?: string
  ariaLabel?: string
  onClickHandler?: () => void
  icon?: 'cube' | 'hand' | 'spinner' | 'arrow down' | 'chat'
};

export interface LanguageProps {
  
}


export type ModalContextProps = {
  isOpen: boolean               // Is the modal window open?
  childComponent: string          // Type of information being rendered: "data" or "another component"?
  modalData: InformationCard1Props | ProjectProps | PageSectionProps | null             // Data rendered by the modal
  openModal: ({ 
    dataType, 
    dataId 
  } : { 
      dataType: string, 
      dataId: string 
  })                   => void     // Responsible for opening the modal
  closeModal:       () => void        // Responsible for losing the modal
  submitModalForm:  (data: typeof mockContactForm.initValues) => void
};

export interface InputFieldProps extends FieldInputProps<string> { 
  meta: FieldMetaProps<string> // Meta props from Formik for validation state
  type?: string
  className: string
  description?: string
  elementType?: "input" | "textarea" | "select" // Render as input, textarea, or select
  options?: { value: string; label: string }[]; // Options for select inputs
};


export interface ContactFormRef {
  submitForm: () => void;
}


export type IconProps = { 
  size?: 'small' | 'medium' | 'large', 
  className: string,
  name: 'cube' | 'hand' | 'spinner' | 'arrow down' | 'chat' | 'close' | 'slider-arrow-left' | 'slider-arrow-right',
};


export type HeadingProps = { 
  h: '1' | '2' | '3' | '4' | '5' | '6', 
  iconName?: 'cube' | 'hand' | 'spinner' | 'arrow down' | 'chat',
  className?: string,
  children: ReactNode 
};



export interface SliderConfig {
  dots?: boolean;
  speed: number;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  prevArrow?: string;
  nextArrow?: string;
  responsive?: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  }[];
}
export interface PanelGridListProps {
  idsList: string[]; // An array of ids
}
export interface PortfolioListProps {
  itemsList: ProjectProps[] | null;
}
