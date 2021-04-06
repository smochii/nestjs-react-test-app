import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { AuthenticationDto } from './dto/authentication.dto';
import { SignupDto } from './dto/signup.dto';
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  /**
   * find user account
   * @param username 
   * @returns 
   */
  public async findUser(username): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { username: username }
    });

    return user;
  }

  /**
   * signup user account
   * @param signupDto 
   * @returns 
   */
  public async signup(signupDto: SignupDto) {
    // do hash
    const hashedPassword = await bcrypt.hash(signupDto.password, 4);

    // create new user
    const newUser = new User();
    newUser.username = signupDto.username;
    newUser.password = hashedPassword;
    return this.userRepository.insert(newUser);
  }

  /**
   * authentication user account
   * @param authenticationDto 
   * @returns 
   */
  public async authentication(authenticationDto: AuthenticationDto): Promise<boolean|null> {
    let result = false;

    // find user account
    const user = await this.findUser(authenticationDto.username);
    if (!user) {
      return result;
    }

    // authentication
    result = await bcrypt.compare(authenticationDto.password, user.password);
    return result;
  }
}
