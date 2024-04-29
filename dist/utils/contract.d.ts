export type EthAddress = `0x${string}`;
export interface IEthServiceProvider {
    balanceOf(userWalletAddress: EthAddress): Promise<number>;
}
export default class Contract {
    static readonly ADDRESS: EthAddress;
    static readonly ABI: any;
}
