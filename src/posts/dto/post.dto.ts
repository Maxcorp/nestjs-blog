import {IsNotEmpty} from 'class-validator';

export class PostDto {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    body: string;
}