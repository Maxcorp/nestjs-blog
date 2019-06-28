import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryRepository extends Repository<Category> {
    private logger;
    getCategories(): Promise<Category[]>;
    createCategory(categoryDto: CategoryDto): Promise<Category>;
    updateCategory(id: number, categoryDto: CategoryDto): Promise<Category>;
}
