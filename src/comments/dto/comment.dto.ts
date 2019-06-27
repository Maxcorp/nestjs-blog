import {IsNotEmpty} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CommentDto {
    
    @ApiModelProperty()
    @IsNotEmpty()
    body: string;

    @ApiModelProperty()
    @IsNotEmpty()
    postId: number;
}