import Contract, { EthAddress, IEthServiceProvider } from './utils/contract.js';

import QuickNodeServiceProvider from './providers/quick-node.js';
import ViemServiceProvider from './providers/viem.js';
import { NeynarAPIClient } from "@neynar/nodejs-sdk";

interface HolderCheck {
    isHolder(userWalletAddress: EthAddress, amount: number): Promise<boolean>;
    isHolder(fid: number, amount: number): Promise<boolean>;
}

export default class Toshi implements HolderCheck {
    public static CONTRACT = Contract;

    private serviceProvider: IEthServiceProvider;
    private neynar: NeynarAPIClient;

    constructor(serviceProvider: IEthServiceProvider = new QuickNodeServiceProvider(process.env.QUICKNODE_HTTPS_URL!)) {
        this.serviceProvider = serviceProvider;
        this.neynar = new NeynarAPIClient(process.env.NEYNAR_API_KEY!);
    }

    async isHolder(arg: EthAddress | number, amount: number = 1): Promise<boolean> {
        if (typeof arg === 'string' && arg.startsWith('0x')) {
            const balance = (await this.serviceProvider.balanceOf(arg))/1e+18;
            return balance > amount;
        }else if (typeof arg === 'number') {
            const res = await this.neynar.lookupUserByFid(arg);
            // @ts-ignore
            const addresses = res.result.user.verifiedAddresses.eth_addresses;

            for(let i =0 ;i<addresses.length;i++){
                const isVerify = await this.isHolder(addresses[i],amount);
                if(isVerify){
                    return true;
                }
            }

            return false;
        }

        throw new Error('Invalid argument type');
    }

    getNeynarApiClient():NeynarAPIClient{
        return this.neynar;
    }
}

export { 
    QuickNodeServiceProvider, 
    ViemServiceProvider,
    IEthServiceProvider,
    EthAddress,
    Contract
}