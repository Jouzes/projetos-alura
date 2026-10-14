import { Collection, MongoClient } from "mongodb";

export class MongoManager {
  private constructor() {}

  public static instance: MongoManager;
  private client: MongoClient | null = null;

  public static getInstance(): MongoManager {
    if (!MongoManager.instance) {
      MongoManager.instance = new MongoManager();
    }
    return MongoManager.instance;
  }

  public async connect(url: string) {
    if (!this.client) {
      MongoClient.connect(url);
    }
  }

  public getCollection(name: string): Collection {
    if (!this.client) throw new Error("MongoDB error");
    return this.client?.db().collection(name);
  }
}
