import { HiverFinanceClient } from "./client";
import { User } from "./resources/user";

export class Stablesrail {
  public user!: User;

  private client: HiverFinanceClient;

  constructor(apiKey: string) {
    this.client = new HiverFinanceClient(apiKey);

    const resources = {
      user: User,
    };

    for (const [key, Resource] of Object.entries(resources)) {
      // @ts-ignore
      this[key] = new Resource(this.client);
    }
  }
}
