import { createContext } from "react";
import { ModalContextProps, DataHelperContextProps } from "../models";



/**
 * 1) Modal Context:
 * -------------------
 * Designed to expose modal state and logic everywhere in the app.
 */
export const ModalContext = createContext<ModalContextProps | null>(null);
export const ContentContext = createContext(null); // Test ***
export const LanguageContext = createContext<'en' | 'fr'>('en');
export const DataHelperContext = createContext<DataHelperContextProps | null>(null);