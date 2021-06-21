import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './models/user.model';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { DeckDto } from './models/deck.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findAll(): Promise<any[]> {
    return this.userModel.find().exec();
  }

  async find(id: string): Promise<User> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException('Invalid Id');
    return await this.userModel.findOne({ _id: Types.ObjectId(id) }).exec();
  }

  async update(id: string, body: CreateUserDto): Promise<User> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException('Invalid Id');
    return await this.userModel
      .findByIdAndUpdate(id, body, { new: true })
      .exec();
  }

  async delete(id: string): Promise<User> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException('Invalid Id');
    return await this.userModel.findByIdAndDelete(Types.ObjectId(id)).exec();
  }

  countDecks(dto: DeckDto): number {
    const { decks } = dto;

    const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

    let count = decks.length;
    for (const value of values) {
      for (const suit of suits) {
        const found = decks.filter((d) => d.suit === suit && d.value === value);
        if (count > found.length) {
          count = found.length;
        }
        if (count === 0) return 0;
      }
    }
    return count;
  }
}
