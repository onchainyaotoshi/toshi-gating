import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'
import Contract, { IEthServiceProvider, EthAddress }  from '../utils/contract.js';

export const publicClient = createPublicClient({
    chain: base,
    transport: http()
})

export default class ViemServiceProvider implements IEthServiceProvider {
    async balanceOf(userWalletAddress: EthAddress): Promise<number> {
        return Number(await publicClient.readContract({
            address: Contract.ADDRESS,
            abi: Contract.ABI,
            functionName: "balanceOf",
            args: [userWalletAddress],
        }));
    }
}