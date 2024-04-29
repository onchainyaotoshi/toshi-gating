var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Core } from '@quicknode/sdk';
import Contract from '../utils/contract.js';
export default class QuickNodeServiceProvider {
    constructor(quickNodeHttpsUrl) {
        this.core = new Core({
            endpointUrl: quickNodeHttpsUrl
        });
    }
    balanceOf(userWalletAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return Number(yield this.core.client.readContract({
                address: Contract.ADDRESS,
                abi: Contract.ABI,
                functionName: "balanceOf",
                args: [userWalletAddress],
            }));
        });
    }
}
