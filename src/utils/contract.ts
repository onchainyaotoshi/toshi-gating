import toshiAbi from '../abi/toshi.json' assert { type: 'json' };

export type EthAddress = `0x${string}`;

export interface IEthServiceProvider {
    balanceOf(userWalletAddress: EthAddress): Promise<number>;
}

export default class Contract {
    static readonly ADDRESS: EthAddress = '0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4';
    static readonly ABI: any = toshiAbi;
}