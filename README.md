# Toshi Gating

Toshi Gating is a package designed to provide gating functionality for projects utilizing [Toshi](https://toshithecat.com).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install Toshi Gating via npm:

```
npm install toshi-gating
```

## Environment Setup

To run this project, create a `.env` file at the root with the following variables:

- `QUICKNODE_HTTPS_URL`: HTTPS URL for QuickNode endpoint.
- `NEYNAR_API_KEY`: API key for Neynar service.

### Example `.env`

```plaintext
QUICKNODE_HTTPS_URL=https://your-node.quicknode.com
NEYNAR_API_KEY=your-neynar-api-key
```

**Important: Do not commit the .env file to your repository. Ensure it's in your .gitignore.**

## Usage

To use Toshi Gating in your project, import it and utilize its functions as needed:

For now, it only support 2 service provider.

### Farcaster Frame

This example demonstrates how to use the toshi-gating package to check if a user holds a token, given their Farcaster ID (FID) and minimal amount toshi required. Ensure you have a .env file set up with the required environment variables before running the example.

```javascript

import Toshi from "toshi-gating";

const toshi = new Toshi();
const isHolder = await toshi.isHolder(FID, 1000);

```

### ES6

#### QuickNode SDK

Here is [QuickNode](https://www.quicknode.com/)

```javascript
import Toshi, {QuickNodeServiceProvider} from "toshi-gating";

const toshi = new Toshi(new QuickNodeServiceProvider(QUICKNODE_HTTPS_URL));
const isHolder = await toshi.isHolder(USER_WALLET_ADDRESS);//minimum 1 Toshi

```

#### Viem SDK

it use mainnet [basescan](basescan.org) API

```javascript
import Toshi, {ViemServiceProvider} from "toshi-gating";

const toshi = new Toshi(new ViemServiceProvider());
const isHolder = await toshi.isHolder(USER_WALLET_ADDRESS,10);//minimum 10 toshi

```

#### Custom Service Provider SDK

You can implement your custom service provider and provide additional functionality. Below is an example of how you can create a custom service provider using the `IEthServiceProvider` interface provided by toshi Gating:

```javascript
import Toshi, { IEthServiceProvider, EthAddress } from "toshi-gating";

export default class CustomServiceProvider implements IEthServiceProvider {
    async balanceOf(userWalletAddress: EthAddress, amount: Number = 1): Promise<number> {
        // Your implementation here
    }
}
```

and then you can use it:

```javascript
import Toshi from "toshi-gating";

const toshi = new Toshi(new CustomServiceProvider());
const isHolder = await toshi.isHolder(USER_WALLET_ADDRESS,1000);//minimum holding 1000 toshi
```

### cjs 

```javascript
async function loadModule() {
    return await import('toshi-gating');
}

(async()=>{
    const Toshi = await loadModule();

    const a = new Toshi.default(new Toshi.QuickNodeServiceProvider(QUICKNODE_HTTPS_URL));

    console.log("a",await a.isHolder(USER_WALLET_ADDRESS));

    const b = new Toshi.default(new Toshi.ViemServiceProvider());

    console.log("b",await b.isHolder(USER_WALLET_ADDRESS));
})();

```

## Contributing

Contributions to Toshi Gating are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to include this Markdown content in your documentation. Let me know if you need further assistance!






