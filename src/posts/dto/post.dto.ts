import {IsNotEmpty} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class PostDto {
    
    @ApiModelProperty()
    @IsNotEmpty()
    name: string;

    @ApiModelProperty()
    @IsNotEmpty()
    body: string;

    @ApiModelProperty()
    @IsNotEmpty()
    categoryId: number;
}