import { AddTask } from "../../../usecases/addTask";
import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import {
  badRequest,
  created,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";

export class AddTaskController implements Controller {
  constructor(
    private readonly addTask: AddTask,
    private readonly validation: Validation,
  ) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(req.body);
      if (error) {
        badRequest(error);
      }
      const { title, description, date } = req.body;

      const task = await this.addTask.add({ title, description, date });
      return created(task);
    } catch (err: any) {
      return serverError(err);
    }
  }
}
