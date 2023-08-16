const Web3 = require('web3');

export const from_wei = (val: string) => Web3.utils.fromWei('' + val, 'ether');
export const to_wei = (val: string) => Web3.utils.toWei('' + val, 'ether');

export function putCommaAtPrice(data: number | string, precision: number | string) {
  let str;

  if (data !== undefined) {
    data = Number(data);

    if (Number.isFinite(+precision)) {
      data = data.toFixed(+precision);
    }
    // if (data < 1000)
    //   return data.toFixed(3);

    str = data.toString().split('.');

    str[0] = `${str[0]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  }
  return 0;
}
