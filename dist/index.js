var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Contract from './utils/contract.js';
import QuickNodeServiceProvider from './providers/quick-node.js';
import ViemServiceProvider from './providers/viem.js';
import { NeynarAPIClient } from "@neynar/nodejs-sdk";
class Toshi {
    constructor(serviceProvider = new QuickNodeServiceProvider(process.env.QUICKNODE_HTTPS_URL)) {
        this.serviceProvider = serviceProvider;
        this.neynar = new NeynarAPIClient(process.env.NEYNAR_API_KEY);
    }
    isHolder(arg_1) {
        return __awaiter(this, arguments, void 0, function* (arg, amount = 1) {
            if (typeof arg === 'string' && arg.startsWith('0x')) {
                const balance = (yield this.serviceProvider.balanceOf(arg)) / 1e+18;
                return balance > amount;
            }
            else if (typeof arg === 'number') {
                const res = yield this.neynar.lookupUserByFid(arg);
                // @ts-ignore
                const addresses = res.result.user.verifiedAddresses.eth_addresses;
                for (let i = 0; i < addresses.length; i++) {
                    const isVerify = yield this.isHolder(addresses[i], amount);
                    if (isVerify) {
                        return true;
                    }
                }
                return false;
            }
            throw new Error('Invalid argument type');
        });
    }
    getNeynarApiClient() {
        return this.neynar;
    }
}
Toshi.CONTRACT = Contract;
export default Toshi;
export { QuickNodeServiceProvider, ViemServiceProvider, Contract };
