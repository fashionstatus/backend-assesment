import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly TasksService: TasksService) {}

  @Post()
  create(@Body() CreateTaskDto: CreateTaskDto) {
    return this.TasksService.create(CreateTaskDto);
  }

  @Get()
  findAll() {
    return this.TasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateTaskDto: UpdateTaskDto) {
    return this.TasksService.update(+id, UpdateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TasksService.remove(+id);
  }
}
