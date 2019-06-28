"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const common_1 = require("@nestjs/common");
const urlSlug = require("url-slug");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('CategoryRepository');
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield category_entity_1.Category.find({});
            return categories;
        });
    }
    createCategory(categoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = categoryDto;
            const category = new category_entity_1.Category();
            category.name = name;
            category.slug = urlSlug(name);
            try {
                yield category.save();
            }
            catch (error) {
                throw new common_1.InternalServerErrorException();
            }
            return category;
        });
    }
    updateCategory(id, categoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield category_entity_1.Category.findOne(id);
            if (!category) {
                throw new common_1.NotFoundException(`Category with id ${id} not found`);
            }
            const { name } = categoryDto;
            category.name = name;
            category.slug = urlSlug(name);
            try {
                yield category.save();
            }
            catch (error) {
                throw new common_1.InternalServerErrorException();
            }
            return category;
        });
    }
};
CategoryRepository = __decorate([
    typeorm_1.EntityRepository(category_entity_1.Category)
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map