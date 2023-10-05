'use client';

// react
import { createContext } from 'react';

/* This line of code is creating a context object called `PreloadContext` using the
`React.createContext` function. The context object is of type `React.Context<boolean>`, which means
it will provide a value of type `boolean` to its consumers. The initial value of the context is set
to `false` using the `React.createContext<boolean>(false)` syntax. */
export const PreloadContext: React.Context<boolean> =
  createContext<boolean>(false);
