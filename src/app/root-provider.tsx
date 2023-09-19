"use client";

// next-theme theme provider props
import { type ThemeProviderProps } from "next-themes/dist/types";

// next-theme theme provider component
import { ThemeProvider as NextThemesProvider } from "next-themes";

type RootProviderProps = ThemeProviderProps;

/**
 * The RootProvider component is a wrapper that provides themes to its children components in a
 * TypeScript React application.
 * @param {RootProviderProps}  - - `RootProviderProps`: This is the type of the props object that is
 * passed to the `RootProvider` component.
 * @returns The RootProvider component is returning the NextThemesProvider component with the children
 * prop passed as its children.
 */
export function RootProvider({ children, ...props }: RootProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
