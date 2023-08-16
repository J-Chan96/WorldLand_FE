export declare global {
  interface Window {
    ethereum: ExternalProvider | JsonRpcFetchFunc;
    web3: any;
    myData: any;
  }
  interface SwapInputTabProps {
    input: string;
    open: Function;
  }

  interface TokenModalProps {
    close: Function;
  }

  interface selectedCrypto {}

  type ADDRESS_TYPE = {
    [key: string]: `0x${string}` | any;
  };

  type chainids = {
    [key: string]: number;
  };
}
