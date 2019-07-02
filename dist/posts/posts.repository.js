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
const posts_entity_1 = require("./posts.entity");
const common_1 = require("@nestjs/common");
const urlSlug = require("url-slug");
let PostsRepository = class PostsRepository extends typeorm_1.Repository {
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield posts_entity_1.Posts.find({});
            return posts;
        });
    }
    createPost(postDto, category, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, body, categoryId } = postDto;
            const post = new posts_entity_1.Posts();
            post.name = name;
            post.slug = urlSlug(name);
            post.body = body;
            post.body = body;
            post.category = category;
            post.user = user;
            try {
                yield post.save();
            }
            catch (error) {
                throw new common_1.InternalServerErrorException();
            }
            return post;
        });
    }
    updatePost(id, postDto, category, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield posts_entity_1.Posts.findOne({ where: { id, userId: user.id } });
            if (!post) {
                throw new common_1.NotFoundException(`Post with id ${id} not found`);
            }
            const { name, body } = postDto;
            post.name = name;
            post.slug = urlSlug(name);
            post.body = body;
            post.category = category;
            post.user = user;
            try {
                yield post.save();
            }
            catch (error) {
                throw new common_1.InternalServerErrorException();
            }
            return post;
        });
    }
};
PostsRepository = __decorate([
    typeorm_1.EntityRepository(posts_entity_1.Posts)
], PostsRepository);
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=posts.repository.js.map