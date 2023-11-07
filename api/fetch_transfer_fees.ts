import { client } from "./api_client";

export async function fetchTranferFees() {
  return await client.tradeFee();
}
