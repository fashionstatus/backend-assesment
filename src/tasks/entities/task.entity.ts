export class Task {
  id: string;

  title?: string;
  name:string;
  description?: string;

  completed?: boolean;

  createDate?: Date | undefined;

  completedDate?: Date | undefined;
}
