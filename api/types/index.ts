export type MobileMoneyService = "airtel" | "mtn";

export type MoneyRequest = {
  amount: number;
  walletId: string;
};

export type WithdrawalMoneyRequest = {
  phoneNumber: string;
  service: MobileMoneyService;
} & MoneyRequest;

export type DepositMoneyRequest = {
  amount: string | number;
  walletId: string;
  service: MobileMoneyService;
};

export type TransferMoney = {
  senderWalletId: string;
  receiverWalletId: string;
  amount: string;
};

export type StellarAccount = {
  publicKey: string;
  secretKey: string;
};
