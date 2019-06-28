import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import { Category } from './category.entity';
export declare class CategoriesController {
    private categoriesService;
    private logger;
    constructor(categoriesService: CategoriesService);
    getCategories(): Promise<Category[]>;
    createCategory(categoryDto: CategoryDto): Promise<Category>;
    getCategoryById(id: number): Promise<Category>;
    updateCategory(id: number, categoryDto: CategoryDto): Promise<Category>;
    deleteCategory(id: number): Promise<void>;
}
