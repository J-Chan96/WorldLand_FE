import { ADDRESS_TYPE } from 'types/main';

export const eth_addresses: ADDRESS_TYPE = {
  wrappedETH_address_BRIDGE: '0xf365e247f2E23e572d20be3101520ecBF7ae1a09',
  bridge_contract: '0x066669F4376c558041D1292DDE8eEa449429a920',
  token_contract: '0x3d15d0DBFC1D8Cd88E49752431BF8f22f8FbC9d0',
};
export const wld_addresses: ADDRESS_TYPE = {
  wrappedETH_address_BRIDGE: '0x858Fddc7Fa83E64C55EB5435152359A7FDF8E617',
  bridge_contract: '0x6190b4222871B18Ff09E1823CCD23F754B0a0b61',
  token_contract: '0x5b4DB6a5355DF618fA57D8481a6dDB1356619636',
  // wrappedETH_address -> wrappedWLC_address로 변경
  wrappedETH_address: '0x4851E699bF5a7C8C8e972fbB001c18dAEAc7D631', // WLC address
  lvt_address: '0x9C7Da1655b3f944d7De2244ACA6B45e797A766BA', // LV Token
  uniswap: {
    pair: '0xfA5ae5f04194E59e07e9815e0Eeaa7E90575c005',
    router: '0xc87cF8f35799F8c3FE549c2b929660a7494cf2bc', // Router for swapFunc
    lp_token_address: '0xfA5ae5f04194E59e07e9815e0Eeaa7E90575c005', // WLC | LVT share of the pool
  },
};
