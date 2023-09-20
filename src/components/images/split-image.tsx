"use client";

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
const SplitImage: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className="grid grid-cols-2 items-start gap-4">{children}</div>;
};

export { SplitImage };
