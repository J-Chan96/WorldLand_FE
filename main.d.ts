declare interface SwapInputTabProps {
  input: string;
  open: Function;
}

declare interface TokenModalProps {
  close: Function;
}

declare interface selectedCrypto {}

declare type ADDRESS_TYPE = {
  [key: string]: `0x${string}` | any;
};

declare type chainids = {
  [key: string]: number;
};
