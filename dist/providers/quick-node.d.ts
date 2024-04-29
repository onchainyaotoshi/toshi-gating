import { IEthServiceProvider, EthAddress } from '../utils/contract.js';
export default class QuickNodeServiceProvider implements IEthServiceProvider {
    private core;
    constructor(quickNodeHttpsUrl: string);
    balanceOf(userWalletAddress: EthAddress): Promise<number>;
}
