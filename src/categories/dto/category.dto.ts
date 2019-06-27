import {IsNotEmpty} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CategoryDto {
    
    @ApiModelProperty()
    @IsNotEmpty()
    name: string;
}