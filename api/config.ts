import { walletSdk } from "@stellar/typescript-wallet-sdk";

const wallet = walletSdk.Wallet.TestNet();

const Stellar = wallet.stellar();
const account = Stellar.account();
const anchor = wallet.anchor({ homeDomain: "testanchor.stellar.org" });

export { account, Stellar, anchor };
