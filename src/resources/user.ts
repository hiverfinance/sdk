import { HiverFinanceClient } from "../client";
const url = "/user";

export class User {
  constructor(private client: HiverFinanceClient) {}

  async get(userId: string) {
    const { data } = await this.client.http.get(`${url}/${userId}`);
    return data;
  }
}
