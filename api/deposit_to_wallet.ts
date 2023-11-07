// import Binance from "node-binance-api";
// import { client } from "./api_client";
import {
  SigningKeypair,
  TransactionBuilder,
  Wallet,
} from "@stellar/typescript-wallet-sdk";
import { DepositMoneyRequest } from "./types";
// import StellarSdk from "stellar-sdk"

export async function depositMoney({
  amount,
  walletId,
  service,
}: DepositMoneyRequest) {
  // client.depositAddress({coin: 'XML'})
}

// function createTrustline(publicKey:string, secretKey: string, assetCode: string, issuer: string) {
//   const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
//   const sourceKeys = StellarSdk.Keypair.fromSecret(secretKey);

//   server
//     .loadAccount(publicKey)
//     .then((account) => {
//       const transaction = new StellarSdk.TransactionBuilder(account, {
//         fee: StellarSdk.BASE_FEE,
//       })
//         .addOperation(
//           StellarSdk.Operation.changeTrust({
//             asset: new StellarSdk.Asset(assetCode, issuer),
//           })
//         )
//         .setTimeout(30)
//         .build();
//       transaction.sign(sourceKeys);

//       return server.submitTransaction(transaction);
//     })
//     .then((result) => {
//       console.log('Trustline created:', result);
//     })
//     .catch((error) => {
//       console.error('Error creating trustline:', error);
//     });
// }

// const binance = new Binance();
// binance.options({
//   APIKEY: 'YOUR_BINANCE_API_KEY',
//   APISECRET: 'YOUR_BINANCE_API_SECRET',
// });

// function buyLumensOnBinance(quantity, price) {
//   binance.buy('XLMUSDT', quantity, price, { type: 'LIMIT' }, (error, response) => {
//     if (error) {
//       console.error('Error buying Lumens on Binance:', error.body);
//     } else {
//       console.log('Binance order response:', response);
//     }
//   });
// }

export function deposit(
  sourceSecretKey: string,
  destinationPublicKey: string,
  amountToDeposit: string
) {
  // try {
    // Create a wallet instance using the source account's secret key
    const sourceWallet = SigningKeypair.fromSecret(sourceSecretKey);

  //   // Create a transaction to send XLM to the destination account
  //   const transaction = sourceWallet.createTransaction({
  //     network: Networks.PUBLIC, // Use Networks.TESTNET for the test network
  //     destination: destinationPublicKey,
  //     asset: "native", // 'native' represents XLM
  //     amount: amountToDeposit,
  //   });

  //   // Sign and submit the transaction
  //   const result = await sourceWallet.submitTransaction(transaction);

  //   const transaction = new TransactionBuilder({}, sourceWallet)
  //     .addOperation(
  //       TransactionBuilder.payment(
  //         destinationPublicKey,
  //         Asset.native(),
  //         amountToDeposit
  //       )
  //     )
  //     .setNetworkPassphrase(Networks.PUBLIC)
  //     .build();

  //   console.log("Success! Transaction ID:", result.hash);
  // } catch (error) {
  //   console.error("Error depositing XLM:", error);
  // }
}
