import Web3 from 'web3';

// const infuraurl = 'https://gwangju.worldland.foundation/';
const infuraurl = 'https://seoul.worldland.foundation/';
// const infuraurl = 'https://rpc.lvscan.io';
const provider = new Web3.providers.HttpProvider(infuraurl);
const web3 = new Web3(provider);

export { web3 };
