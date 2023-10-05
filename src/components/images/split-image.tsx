'use client';

/**
 * The Split component is a React functional component that renders its children inside a div with
 * specific styling.
 * @param props - The `props` parameter is an object that contains the properties passed to the `Split`
 * component. It can include any valid React props, such as `className`, `style`, or custom props
 * defined by the component. In this case, the `children` prop is being destructured from the `
 * @returns The Split component is returning a div element with the className "mb-0 flex flex-col
 * space-y-4" and the children passed to it.
 */
export const Split: React.FC<React.PropsWithChildren> = props => {
  const { children } = props;
  return <div className='!mb-0 flex flex-col space-y-4'>{children}</div>;
};

/**
 * The SplitImage component is a React functional component that renders its children in a grid layout
 * with two columns and a gap of 4.
 * @param props - The `props` parameter is an object that contains all the properties passed to the
 * `SplitImage` component. These properties can be accessed using dot notation, for example
 * `props.propertyName`. In this case, the `children` property is being extracted from the `props`
 * object using destructuring assignment
 * @returns The SplitImage component is returning a div element with the className "grid grid-cols-2
 * items-start gap-4". The children of the component are rendered inside this div element.
 */
export const SplitImage: React.FC<React.PropsWithChildren> = props => {
  const { children } = props;
  return <div className='grid grid-cols-2 items-start gap-4'>{children}</div>;
};
