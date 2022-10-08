export type Orientation = "h" | "v";

export type MouseEvent<T extends HTMLElement> = (
  elem: React.MouseEvent<T>
) => void;

export type Primitive =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]
  | null
  | undefined;
