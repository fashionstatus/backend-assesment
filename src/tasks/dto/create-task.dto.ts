export class CreateTaskDto {
  id: string;

  title?: string;
  name:string;
  description?: string;

  completed?: boolean;

  createDate?: Date | undefined;

  completedDate?: Date | undefined;
}
