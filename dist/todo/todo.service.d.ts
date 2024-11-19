import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    create(title: string): Promise<Todo>;
    update(id: number, isCompleted: boolean): Promise<Todo>;
    delete(id: number): Promise<void>;
}
