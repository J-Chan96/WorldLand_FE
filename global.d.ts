export declare global {
  interface Window {
    ethereum: ExternalProvider | JsonRpcFetchFunc;
    web3: any;
    myData: any;
  }
}
