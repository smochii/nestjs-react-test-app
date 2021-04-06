import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationDto } from './dto/authentication.dto';
import { SignupDto } from './dto/signup.dto';
import { UserService } from './user.service';
import validator from 'validator';
import { InsertResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {
  }

  /**
   * signup user account
   * @param signupDto 
   * @returns 
   */
  @Post('signup')
  async signup(@Res() res: Response, @Body() signupDto: SignupDto) {
    // find user
    const user = await this.service.findUser(signupDto.username);
    if (user) {
      return res.status(HttpStatus.CONFLICT).send();
    }
    
    // signup
    const result: InsertResult = await this.service.signup(signupDto);
    return res.status(HttpStatus.CREATED).send();
  }

  /**
   * authentication user account
   * @param authenticationDto 
   * @returns 
   */
  @Post('authentication')
  async authentication(@Res() res: Response, @Body() authenticationDto: AuthenticationDto) {
    // authentication
    const result = await this.service.authentication(authenticationDto);
    if (!result) {
      return res.status(HttpStatus.UNAUTHORIZED).send();
    }

    // TODO:return token
    return res.status(HttpStatus.OK).send();
  }
}
