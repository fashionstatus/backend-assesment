import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Array<Task> = [];
  private id = 0;

  create(CreateTaskDto: CreateTaskDto) {
    this.tasks.push({ id: ++this.id, ...CreateTaskDto, createDate: new Date() });
  }

  findAll() {
    return [...this.tasks];
  }

  findOne(id: number) {
    let idS = id +''
    const found = this.tasks.find((u) => u.id === idS);
    if (!found) throw new NotFoundException();
    return { ...found };
  }

  update(id: number, UpdateTaskDto: UpdateTaskDto) {
    const found = this.findOne(id);
    this.remove(id);
    this.tasks.push({ ...found, ...UpdateTaskDto, completedDate: new Date() });
  }

  remove(id: number) {
    this.findOne(id);
    let idS = id +''
    this.tasks = this.tasks.filter((u) => u.id !== idS);
  }
}
