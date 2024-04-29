import { expect, test } from 'vitest'
import Toshi, { QuickNodeServiceProvider, ViemServiceProvider, EthAddress} from './index';

const FID = 282770;
const USER_WALLET_ADDRESS="0x4eD35B477328F5b06297Fa74404b36ad1eFba783";


test('Quick Node Provider', async () => {
    const toshi = new Toshi(new QuickNodeServiceProvider(process.env.QUICKNODE_HTTPS_URL!));
    expect(await toshi.isHolder(USER_WALLET_ADDRESS as EthAddress)).toBe(true)
});

test('Quick Node Provider With Minimum 1M amount of toshi', async () => {
    const toshi = new Toshi();
    expect(await toshi.isHolder(USER_WALLET_ADDRESS as EthAddress,1000000)).toBe(false)
});

test('Viem Provider', async () => {
    const toshi = new Toshi(new ViemServiceProvider());
    expect(await toshi.isHolder(USER_WALLET_ADDRESS as EthAddress)).toBe(true)
});

test('neynar - true', async () => {
    const toshi = new Toshi();
    expect(await toshi.isHolder(FID)).toBe(true)
});

test('neynar - false', async () => {
    const toshi = new Toshi();
    expect(await toshi.isHolder(FID+1)).toBe(false)
});