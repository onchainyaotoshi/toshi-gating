import { Core } from '@quicknode/sdk';
import Contract,  { IEthServiceProvider, EthAddress } from '../utils/contract.js';

export default class QuickNodeServiceProvider implements IEthServiceProvider {
    private core: Core;

    constructor(quickNodeHttpsUrl : string){
        this.core = new Core({
            endpointUrl: quickNodeHttpsUrl!
        });
    }

    async balanceOf(userWalletAddress: EthAddress): Promise<number> {
        return Number(await this.core.client.readContract({
            address: Contract.ADDRESS,
            abi: Contract.ABI,
            functionName: "balanceOf",
            args: [userWalletAddress],
        }));
    }
}