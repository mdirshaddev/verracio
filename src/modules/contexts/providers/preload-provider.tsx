"use client";

// react
import { useState, useEffect } from "react";

// Shadcn
import { cn } from "shared-lib/utils";

// preload context
import { PreloadContext } from "src/modules/contexts/preload-context";

/**
 * The PreloadProvider component is a React functional component that provides a preloading context and
 * renders a loading overlay until the content is preloaded.
 * @param props - The `props` parameter is an object that contains the properties passed to the
 * `PreloadProvider` component. These properties can be accessed using dot notation, for example
 * `props.children` to access the `children` property.
 * @returns The PreloadProvider component is returning a JSX element.
 */
export const PreloadProvider: React.FC<React.PropsWithChildren> = (
  props,
): JSX.Element => {
  /** If the dom is loaded */
  const [preloaded, setIsPreloaded] = useState<boolean>(false);

  useEffect(() => {
    const preloadTimeout: NodeJS.Timeout = setTimeout(() => {
      setIsPreloaded(true);
    }, 200);

    return () => clearTimeout(preloadTimeout);
  }, []);

  const { children } = props;

  return (
    <PreloadContext.Provider value={preloaded}>
      <div
        className={cn(
          "fixed inset-0 flex items-center justify-center bg-background transition-opacity",
          preloaded && "pointer-events-none opacity-0",
        )}
      />
      {children}
    </PreloadContext.Provider>
  );
};
