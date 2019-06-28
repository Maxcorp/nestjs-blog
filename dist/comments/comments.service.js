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
const comment_repository_1 = require("./comment.repository");
const posts_repository_1 = require("../posts/posts.repository");
const typeorm_1 = require("@nestjs/typeorm");
let CommentsService = class CommentsService {
    constructor(commentRepository, postsRepository) {
        this.commentRepository = commentRepository;
        this.postsRepository = postsRepository;
    }
    createComment(commentDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postsRepository.findOne(commentDto.postId);
            return yield this.commentRepository.createComments(commentDto, user, post);
        });
    }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comment_repository_1.CommentRepository)),
    __param(1, typeorm_1.InjectRepository(posts_repository_1.PostsRepository)),
    __metadata("design:paramtypes", [comment_repository_1.CommentRepository,
        posts_repository_1.PostsRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map