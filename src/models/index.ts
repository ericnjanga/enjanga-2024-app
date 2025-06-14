import { Registry, Model } from "miragejs";
import { Server } from "miragejs";
import { ReactNode } from "react";
import { FieldInputProps, FieldMetaProps } from "formik";
import { mockContactForm } from "./mockupData";
import type { Node } from '@contentful/rich-text-types';

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
  id?: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
};

export type ContentfulRichTextProps = {
  json: {
    content: Node[]
  };
};

export type ExpertiseSpecificationProps = {
  id: string;
  parentId: string;
  className?: string;
  title: string;
  blurb: string;
  description?: ContentfulRichTextProps;
};

export type ProjectProps = {
  id?: string;
  image?: {
    url: string;
    title: string;
    description: string;
  };
  className?: string;
  title: string;
  blurb: string;
  description: ContentfulRichTextProps;
};

export type NavRoutes =
  | "/welcome"
  | "/scope-of-expertise"
  | "/some-work"
  | "/about";

export type NavOptionProps = {
  id: string;
  route: NavRoutes;
  name: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
};

export type ExpertiseSpecProps = {
  id: string;
  parentId: string;
  blurb: {
    en: string;
    fr: string;
  };
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
};

export interface ButtonProps {
  variant?: "primary" | "secondary" | "transparent";
  size?: "sm" | "md" | "lg";
  label?: string;
  neonVersion?: boolean;
  children: ReactNode;
  href?: string;
  target?: string;
  ariaLabel?: string;
  onClickHandler?: () => void;
  icon?: "cube" | "hand" | "spinner" | "arrow down" | "chat";
}

export interface LanguageProps {}

export type dataDescriptionProps = ContentfulRichTextProps; // | string;
export type dataContentProps = {
    title: string;
    description: dataDescriptionProps;
  };

export type ModalSizeProps = "small" | "medium" | "large";
export type OpenModalProps = {
  dataType: string;
  content: dataContentProps;
  size?: ModalSizeProps;
};
export type ModalDataProps = {
  content: dataContentProps;
  size: ModalSizeProps;
} | null;

export type DataHelperContextProps = {
  contactModalDataContent: dataContentProps
};

export type ModalContextProps = {
  isOpen: boolean; // Is the modal window open?
  childComponent: string; // Type of information being rendered: "data" or "another component"?
  // Data rendered by the modal
  modalData: ModalDataProps;
  openModal: ({ dataType, content, size }: OpenModalProps) => void; // Responsible for opening the modal
  closeModal: () => void; // Responsible for losing the modal
  submitModalForm: (data: typeof mockContactForm.initValues) => void;
};

export interface InputFieldProps extends FieldInputProps<string> {
  meta: FieldMetaProps<string>; // Meta props from Formik for validation state
  type?: string;
  className: string;
  description?: string;
  elementType?: "input" | "textarea" | "select"; // Render as input, textarea, or select
  options?: { value: string; label: string }[]; // Options for select inputs
}

export interface ContactFormRef {
  submitForm: () => void;
}

export type IconProps = {
  size?: "small" | "medium" | "large";
  className: string;
  name:
    | "cube"
    | "hand"
    | "spinner"
    | "arrow down"
    | "chat"
    | "close"
    | "slider-arrow-left"
    | "slider-arrow-right"
    | "arrow-outward";
};

export type HeadingProps = {
  h: "1" | "2" | "3" | "4" | "5" | "6";
  iconName?: "cube" | "hand" | "spinner" | "arrow down" | "chat";
  className?: string;
  children: ReactNode;
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

// ...
export type ExpertiseSpecData = {
  en: ExpertiseSpecificationProps;
  fr: ExpertiseSpecificationProps;
};
export type ProjectData = {
  en: ProjectProps;
  fr: ProjectProps;
};

export interface CharacterCounterProps {
  value: string;
  minLength: number;
  maxLength: number;
}
