import { LogErrorRepository } from "../../../usecases/repository/logErrorRepository";
import { MongoManager } from "../../config/mongo";

export class LogErrorMongoRepository implements LogErrorRepository {
  async log(stack: string): Promise<void> {
    const errorCollection = MongoManager.getInstance().getCollection("errors");
    await errorCollection.insertOne({ stack, date: new Date() });
  }
}
