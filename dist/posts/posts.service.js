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
const typeorm_1 = require("@nestjs/typeorm");
const posts_repository_1 = require("./posts.repository");
const common_2 = require("@nestjs/common");
const category_repository_1 = require("../categories/category.repository");
let PostsService = class PostsService {
    constructor(postsRepository, categoryRepository) {
        this.postsRepository = postsRepository;
        this.categoryRepository = categoryRepository;
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.postsRepository.getPosts();
        });
    }
    createPost(postDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.categoryRepository.findOne(postDto.categoryId);
            return this.postsRepository.createPost(postDto, category, user);
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postsRepository.findOne(id);
            if (!post) {
                throw new common_1.NotFoundException(`Post with id ${id} not found`);
            }
            return post;
        });
    }
    getPostBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postsRepository.findOne({ where: { slug: slug } });
            if (!post) {
                throw new common_1.NotFoundException(`Post not found`);
            }
            return post;
        });
    }
    updatePost(id, postDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.categoryRepository.findOne(postDto.categoryId);
            return this.postsRepository.updatePost(id, postDto, category, user);
        });
    }
    deletePost(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.postsRepository.delete({ id: id, userId: user.id });
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Post with id ${id} not found`);
            }
        });
    }
};
PostsService = __decorate([
    common_2.Injectable(),
    __param(0, typeorm_1.InjectRepository(posts_repository_1.PostsRepository)),
    __param(1, typeorm_1.InjectRepository(category_repository_1.CategoryRepository)),
    __metadata("design:paramtypes", [posts_repository_1.PostsRepository,
        category_repository_1.CategoryRepository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map