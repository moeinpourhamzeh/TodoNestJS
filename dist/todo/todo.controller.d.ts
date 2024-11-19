import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<import("./todo.entity").Todo[]>;
    create(title: string): Promise<import("./todo.entity").Todo>;
    update(id: number, isCompleted: boolean): Promise<import("./todo.entity").Todo>;
    delete(id: number): Promise<void>;
}
