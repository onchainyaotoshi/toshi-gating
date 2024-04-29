import Contract, { EthAddress, IEthServiceProvider } from './utils/contract.js';
import QuickNodeServiceProvider from './providers/quick-node.js';
import ViemServiceProvider from './providers/viem.js';
import { NeynarAPIClient } from "@neynar/nodejs-sdk";
interface HolderCheck {
    isHolder(userWalletAddress: EthAddress, amount: number): Promise<boolean>;
    isHolder(fid: number, amount: number): Promise<boolean>;
}
export default class Toshi implements HolderCheck {
    static CONTRACT: typeof Contract;
    private serviceProvider;
    private neynar;
    constructor(serviceProvider?: IEthServiceProvider);
    isHolder(arg: EthAddress | number, amount?: number): Promise<boolean>;
    getNeynarApiClient(): NeynarAPIClient;
}
export { QuickNodeServiceProvider, ViemServiceProvider, IEthServiceProvider, EthAddress, Contract };
