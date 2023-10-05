// used by clipboard hooks
export type CopiedValue = string | null;
export type CopyFn = (text: string) => Promise<boolean>; // Return success
