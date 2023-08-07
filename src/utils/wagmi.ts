import { Chain } from 'wagmi';

export const worldland = {
  id: 103,
  name: 'Seoul Mainnet',
  network: 'worldland',
  nativeCurrency: {
    decimals: 18,
    name: 'WLC',
    symbol: 'WLC',
  },
  rpcUrls: {
    public: { http: ['https://seoul.worldland.foundation/'] },
    default: { http: ['https://seoul.worldland.foundation/'] },
  },
  blockExplorers: {
    etherscan: { name: 'WLscan', url: 'https://scan.worldland.foundation' },
    default: { name: 'WLscan', url: 'https://scan.worldland.foundation' },
  },
} as const satisfies Chain;

export const chainImages = {
  103: 'https://lv-storage1.s3.amazonaws.com/logo_2.svg',
};
