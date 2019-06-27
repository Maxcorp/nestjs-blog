import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoryRepository } from './category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.getCategories();
  }

  async createCategory(categoryDto: CategoryDto): Promise<Category> {
    return await this.categoryRepository.createCategory(categoryDto);
  }

  async getCategoryById(id: number) {
    const category = await this.categoryRepository.findOne(id);

        if(!category) {
            throw new NotFoundException(`Post with id ${id} not found`);
        }

        return category;
  }

  async getCategoryBySlug(slug: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({where: {slug: slug}});

    if(!category) {
        throw new NotFoundException(`Category not found`);
    }

    return category;
}

  async updateCategory(id: number, categoryDto: CategoryDto): Promise<Category> {
    return this.categoryRepository.updateCategory(id, categoryDto);
  }

  async deleteCategory(id: number) {
    const result = await this.categoryRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
  }
}
