import { Keypair } from "@stellar/typescript-wallet-sdk";
import { StellarAccount } from "./types";
import { Stellar, account } from "./config";

export async function createUserWallet() {
  return createStellarWallet();
}

function createStellarWallet(): StellarAccount {
  const pair = Keypair.random();
  return {
    publicKey: pair.publicKey(),
    secretKey: pair.secret(),
  };
}

export async function createAccount() {
  const accountKeyPair = account.createKeypair();
  const destinationAccountKeyPair = account.createKeypair();
  const txBuilder = await Stellar.transaction({
    sourceAddress: accountKeyPair,
  });
  return txBuilder.createAccount(destinationAccountKeyPair).build();
}
