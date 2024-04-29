var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';
import Contract from '../utils/contract.js';
export const publicClient = createPublicClient({
    chain: base,
    transport: http()
});
export default class ViemServiceProvider {
    balanceOf(userWalletAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return Number(yield publicClient.readContract({
                address: Contract.ADDRESS,
                abi: Contract.ABI,
                functionName: "balanceOf",
                args: [userWalletAddress],
            }));
        });
    }
}
