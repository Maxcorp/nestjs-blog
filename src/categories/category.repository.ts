import { Repository, EntityRepository } from 'typeorm';
import { Category } from './category.entity';
import { CategoryDto } from './dto/category.dto';
import { User } from 'src/auth/user.entity';
import { Logger, InternalServerErrorException, HttpException, NotFoundException } from '@nestjs/common';
import * as urlSlug from 'url-slug';

class CategoryRepository {
  private logger = new Logger('CategoryRepository');

  getCategories() {

  }

  createCategory() {

  }

  updateCategory() {

  }
}