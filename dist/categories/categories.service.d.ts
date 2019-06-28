import { CategoryDto } from './dto/category.dto';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
export declare class CategoriesService {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getCategories(): Promise<Category[]>;
    createCategory(categoryDto: CategoryDto): Promise<Category>;
    getCategoryById(id: number): Promise<Category>;
    getCategoryBySlug(slug: string): Promise<Category>;
    updateCategory(id: number, categoryDto: CategoryDto): Promise<Category>;
    deleteCategory(id: number): Promise<void>;
}
