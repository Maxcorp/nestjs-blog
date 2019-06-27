import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    Query,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
    UseGuards,
    Logger,
  } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
    private logger = new Logger('CategoriesController');

    constructor(private categoriesService: CategoriesService) {}

    @Get()
    getCategories() {
        return this.categoriesService.getCategories();
    }

    @Post()
    createCategory() {
        return this.categoriesService.createCategory();
    }

    @Get('/:id')
    getCategoryById(@Param('id', ParseIntPipe) id: number,) {
        return this.categoriesService.getCategoryById(id);
    }

    @Patch('/:id')
    updateCategory(@Param('id', ParseIntPipe) id: number,) {
        return this.categoriesService.updateCategory(id);
    }

    @Delete('/:id')
    deleteCategory(@Param('id', ParseIntPipe) id: number,) {
        return this.categoriesService.deleteCategory(id);
    }
}
