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

