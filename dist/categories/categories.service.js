"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const common_1 = require("@nestjs/common");
const category_repository_1 = require("./category.repository");
const typeorm_1 = require("@nestjs/typeorm");
let CategoriesService = class CategoriesService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryRepository.getCategories();
        });
    }
    createCategory(categoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryRepository.createCategory(categoryDto);
        });
    }
    getCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.categoryRepository.findOne(id);
            if (!category) {
                throw new common_1.NotFoundException(`Post with id ${id} not found`);
            }
            return category;
        });
    }
    getCategoryBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.categoryRepository.findOne({ where: { slug: slug } });
            if (!category) {
                throw new common_1.NotFoundException(`Category not found`);
            }
            return category;
        });
    }
    updateCategory(id, categoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.categoryRepository.updateCategory(id, categoryDto);
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.categoryRepository.delete({ id });
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Post with id ${id} not found`);
            }
        });
    }
};
CategoriesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_repository_1.CategoryRepository)),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map