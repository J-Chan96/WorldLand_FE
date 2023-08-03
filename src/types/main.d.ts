interface SwapInputType {
  input: string;
}

export type ADDRESS_TYPE = {
  [key: string]: `0x${string}` | any;
};

export type chainids = {
  [key: string]: number;
};
