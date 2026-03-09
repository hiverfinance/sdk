import axios from "axios";
import type { AxiosInstance } from "axios";

export class HiverFinanceClient {
  public http: AxiosInstance;

  constructor(apiKey: string) {
    this.http = axios.create({
      baseURL: "https://api.hiver.finance",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
  }
}
