import { Repository, EntityRepository } from 'typeorm';
import { Category } from './category.entity';
import { CategoryDto } from './dto/category.dto';
import { Logger, InternalServerErrorException, HttpException, NotFoundException } from '@nestjs/common';
import * as urlSlug from 'url-slug';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{
  private logger = new Logger('CategoryRepository');

  async getCategories(): Promise<Category[]> {
    const categories = await Category.find({});

    return categories;
  }

  async createCategory(categoryDto: CategoryDto): Promise<Category> {
    const {name} = categoryDto;

    const category = new Category();
    category.name = name;
    category.slug = urlSlug(name);

    try {
        await category.save();
    } catch(error) {
        throw new InternalServerErrorException();
    }

    return category;
  }

  async updateCategory(id: number, categoryDto: CategoryDto): Promise<Category> {
    const category = await Category.findOne(id);
    
    if(!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    const { name } = categoryDto;

    category.name = name;
    category.slug = urlSlug(name);

    try {
        await category.save();
    } catch(error) {
        throw new InternalServerErrorException();
    }

    return category;
  }
}