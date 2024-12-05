import { createContext } from "react";
import {  ModalContextProps } from "../models";
// import { CarProps, HostProps } from "../models";



/**
 * 1) Modal Context:
 * -------------------
 * Designed to expose modal state and logic everywhere in the app.
 */
export const ModalContext = createContext<ModalContextProps | null>(null);
export const ContentContext = createContext(null); // Test ***

// export const HostContext = createContext<HostProps | null>(null);
// export const CarInfoContext = createContext<CarProps | null>(null);
// export const ParentRouteContext = createContext<String>('');