import { Keypair, SigningKeypair } from "@stellar/typescript-wallet-sdk";
import { StellarAccount } from "./types";
import { Stellar, account, anchor } from "./config";

export async function createUserWallet() {
  return createStellarAccount();
}

function createStellarAccount(): StellarAccount {
  const accountKeyPair = account.createKeypair();
  return {
    publicKey: accountKeyPair.publicKey,
    secretKey: accountKeyPair.secretKey,
  };
  // const pair = Keypair.random();
  // return {
  //   publicKey: pair.publicKey(),
  //   secretKey: pair.secret(),
  // };
}

function generateAccountKeypair() {
  return account.createKeypair();
}

export async function createAccount() {
  const accountKeyPair = generateAccountKeypair();
  const destinationAccountKeyPair = generateAccountKeypair();
  const txBuilder = await Stellar.transaction({
    sourceAddress: accountKeyPair,
  });
  return txBuilder.createAccount(destinationAccountKeyPair).build();
}

export async function getAnchorInfo() {
  const sep24 = anchor.sep24();
  return sep24.getServicesInfo();
}

export async function getAsset(current: string) {
  const info = await getAnchorInfo();
  return info.fee;
}

export async function getAuthToken(secretKey: string) {
  const authKey = SigningKeypair.fromSecret(secretKey);
  const sep10 = await anchor.sep10();
  return await sep10.authenticate({ accountKp: authKey });
}
/**
 * 
 * @returns user JWT auth token
 */
export async function login() {
  const account = createStellarAccount();
  return await getAuthToken(account.secretKey);
}
