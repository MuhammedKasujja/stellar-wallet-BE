// import { client } from "./api_client";
import { WithdrawalMoneyRequest } from "./types";

export async function withdrawalMoney({
  amount,
  walletId,
  service,
}: WithdrawalMoneyRequest): Promise<string> {
  // const response = await client.withdraw({
  //   coin: "XML",
  //   address: "",
  //   amount,
  //   transactionFeeFlag: true,
  // });
  // return response.id;
  return ''
}
