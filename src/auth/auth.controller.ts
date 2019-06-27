import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { ApiUseTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    //console.log(authCredentialsDto);

    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    //console.log(authCredentialsDto);

    return this.authService.signIn(authCredentialsDto);
  }
}
