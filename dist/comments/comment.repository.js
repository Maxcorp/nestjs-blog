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
const comment_entity_1 = require("./comment.entity");
const common_1 = require("@nestjs/common");
let CommentRepository = class CommentRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('CategoryRepository');
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield comment_entity_1.Comment.find({});
            return comments;
        });
    }
    createComments(commentDto, user, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = commentDto;
            const comment = new comment_entity_1.Comment();
            comment.body = body;
            comment.user = user;
            comment.post = post;
            try {
                yield comment.save();
                delete comment.user;
            }
            catch (error) {
                throw new common_1.InternalServerErrorException();
            }
            return comment;
        });
    }
};
CommentRepository = __decorate([
    typeorm_1.EntityRepository(comment_entity_1.Comment)
], CommentRepository);
exports.CommentRepository = CommentRepository;
//# sourceMappingURL=comment.repository.js.map