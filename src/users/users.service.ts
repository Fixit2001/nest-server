import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { loginInput } from './dto/login.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = new this.userModel(createUserInput);
    return await newUser.save();
  }

  async login(login: loginInput) {
    const { email, password } = login;

    const user = await this.userModel.findOne({ email });

    if(!user){
      throw new Error('Unable login!');
    }

    if(user.password === password){
      return user;
    }

    throw new Error('Unable login!');
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
    return await this.userModel.findById(id);
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
