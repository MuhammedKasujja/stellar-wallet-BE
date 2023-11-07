import { TransferMoney } from "./types";
import { Wallet, TransactionBuilder } from "@stellar/typescript-wallet-sdk";
import StellarSdk from "stellar-sdk";

export async function transferMoney({
  amount,
  senderWalletId,
  receiverWalletId,
}: TransferMoney) {
  // Load the wallet key pair from a secure location
  // const keyPair = JSON.parse(localStorage.getItem("walletKeyPair"));
  // // Create a new TransactionBuilder
  // const txnBuilder = new TransactionBuilder(keyPair.publicKey);
  // // Add the recipient and amount to the transaction
  // txnBuilder.addOperation({
  //   type: "payment",
  //   destination: "GDGX5252Q3J4Y27K7F7A754C5Q54R7T7X3X23M3E7G3I4J",
  //   amount: 100,
  // });
  // // Build the transaction
  // const transaction = txnBuilder.build();
  // // Sign the transaction with the wallet key pair
  // transaction.sign(keyPair);
  // // Submit the transaction to the Stellar network
  // const network = new Network("https://horizon-testnet.stellar.org");
  // network.submitTransaction(transaction);
}

// StellarSdk.Network.useTestNetwork(); // Use the Stellar Test Network
// const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

// export async function makePayment(amount: string | number, currency: string, sourceKeypair: any) {
//   try {
//     // Build a Stellar transaction
//     const destination = "DESTINATION_STELLAR_ADDRESS";
//     const asset = StellarSdk.Asset.native();
//     const payment = StellarSdk.Operation.payment({
//       destination,
//       asset,
//       amount: amount.toString(),
//     });

//     // Fetch the current account's sequence number
//     const account = await server.loadAccount(sourceKeypair.publicKey());
//     const transaction = new StellarSdk.TransactionBuilder(account)
//       .addOperation(payment)
//       .build();

//     transaction.sign(sourceKeypair);

//     // Submit the transaction to the Stellar network
//     const transactionResult = await server.submitTransaction(transaction);

//     console.log("Stellar payment and Flutterwave request:", transactionResult);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
