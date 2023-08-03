declare interface SwapInputType {
  input: string;
}

declare type ADDRESS_TYPE = {
  [key: string]: `0x${string}` | any;
};

declare type chainids = {
  [key: string]: number;
};
