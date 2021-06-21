import { Test } from '@nestjs/testing';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from '../user/models/user.model';
import { DeckDto } from '../user/models/deck.dto';

const decks = [
  {
    suit: 'hearts',
    value: 2,
  },
  {
    suit: 'hearts',
    value: 9,
  },
  {
    suit: 'hearts',
    value: 'K',
  },
  {
    suit: 'diamonds',
    value: 7,
  },
  {
    suit: 'diamonds',
    value: 8,
  },
  {
    suit: 'diamonds',
    value: 9,
  },
  {
    suit: 'diamonds',
    value: 10,
  },
  {
    suit: 'clubs',
    value: 3,
  },
  {
    suit: 'clubs',
    value: 4,
  },
  {
    suit: 'clubs',
    value: 5,
  },
  {
    suit: 'diamonds',
    value: 'J',
  },
  {
    suit: 'diamonds',
    value: 'Q',
  },
  {
    suit: 'hearts',
    value: 'J',
  },
  {
    suit: 'hearts',
    value: 'Q',
  },
  {
    suit: 'hearts',
    value: 'K',
  },
  {
    suit: 'hearts',
    value: 'A',
  },
  {
    suit: 'diamonds',
    value: 2,
  },
  {
    suit: 'diamonds',
    value: 3,
  },
  {
    suit: 'diamonds',
    value: 7,
  },
  {
    suit: 'diamonds',
    value: 4,
  },
  {
    suit: 'clubs',
    value: 6,
  },
  {
    suit: 'clubs',
    value: 2,
  },
  {
    suit: 'diamonds',
    value: 'K',
  },
  {
    suit: 'diamonds',
    value: 'A',
  },
  {
    suit: 'clubs',
    value: 2,
  },
  {
    suit: 'clubs',
    value: 8,
  },
  {
    suit: 'clubs',
    value: 9,
  },
  {
    suit: 'clubs',
    value: 10,
  },
  {
    suit: 'clubs',
    value: 'J',
  },
  {
    suit: 'clubs',
    value: 'Q',
  },
  {
    suit: 'hearts',
    value: 8,
  },
  {
    suit: 'clubs',
    value: 'K',
  },
  {
    suit: 'clubs',
    value: 'A',
  },
  {
    suit: 'spades',
    value: 4,
  },
  {
    suit: 'hearts',
    value: 10,
  },
  {
    suit: 'clubs',
    value: 'Q',
  },
  {
    suit: 'clubs',
    value: 7,
  },
  {
    suit: 'diamonds',
    value: 5,
  },
  {
    suit: 'diamonds',
    value: 6,
  },
  {
    suit: 'spades',
    value: 2,
  },
  {
    suit: 'spades',
    value: 3,
  },
  {
    suit: 'spades',
    value: 4,
  },
  {
    suit: 'spades',
    value: 5,
  },
  {
    suit: 'spades',
    value: 6,
  },
  {
    suit: 'spades',
    value: 7,
  },
  {
    suit: 'spades',
    value: 8,
  },
  {
    suit: 'spades',
    value: 9,
  },
  {
    suit: 'spades',
    value: 10,
  },
  {
    suit: 'spades',
    value: 'J',
  },
  {
    suit: 'hearts',
    value: 5,
  },
  {
    suit: 'spades',
    value: 'Q',
  },
  {
    suit: 'spades',
    value: 'K',
  },
  {
    suit: 'spades',
    value: 'A',
  },
  {
    suit: 'hearts',
    value: 2,
  },
  {
    suit: 'hearts',
    value: 3,
  },
  {
    suit: 'hearts',
    value: 3,
  },
  {
    suit: 'hearts',
    value: 4,
  },
  {
    suit: 'hearts',
    value: 5,
  },
  {
    suit: 'hearts',
    value: 6,
  },
  {
    suit: 'hearts',
    value: 7,
  },
  {
    suit: 'hearts',
    value: 8,
  },
  {
    suit: 'hearts',
    value: 4,
  },
  {
    suit: 'hearts',
    value: 5,
  },
  {
    suit: 'hearts',
    value: 6,
  },
  {
    suit: 'hearts',
    value: 7,
  },
  {
    suit: 'hearts',
    value: 9,
  },
  {
    suit: 'hearts',
    value: 10,
  },
  {
    suit: 'hearts',
    value: 10,
  },
  {
    suit: 'hearts',
    value: 'J',
  },
  {
    suit: 'hearts',
    value: 'Q',
  },
  {
    suit: 'hearts',
    value: 'K',
  },
  {
    suit: 'hearts',
    value: 'A',
  },
  {
    suit: 'diamonds',
    value: 2,
  },
  {
    suit: 'diamonds',
    value: 3,
  },
  {
    suit: 'diamonds',
    value: 4,
  },
  {
    suit: 'diamonds',
    value: 5,
  },
  {
    suit: 'diamonds',
    value: 6,
  },
  {
    suit: 'diamonds',
    value: 7,
  },
  {
    suit: 'diamonds',
    value: 8,
  },
  {
    suit: 'diamonds',
    value: 9,
  },
  {
    suit: 'diamonds',
    value: 10,
  },
  {
    suit: 'diamonds',
    value: 'J',
  },
  {
    suit: 'diamonds',
    value: 'Q',
  },
  {
    suit: 'diamonds',
    value: 'K',
  },
  {
    suit: 'diamonds',
    value: 'A',
  },
  {
    suit: 'clubs',
    value: 2,
  },
  {
    suit: 'clubs',
    value: 3,
  },
  {
    suit: 'clubs',
    value: 4,
  },
  {
    suit: 'clubs',
    value: 5,
  },
  {
    suit: 'clubs',
    value: 6,
  },
  {
    suit: 'clubs',
    value: 7,
  },
  {
    suit: 'clubs',
    value: 8,
  },
  {
    suit: 'clubs',
    value: 9,
  },
  {
    suit: 'clubs',
    value: 10,
  },
  {
    suit: 'clubs',
    value: 'J',
  },
  {
    suit: 'clubs',
    value: 'Q',
  },
  {
    suit: 'clubs',
    value: 'K',
  },
  {
    suit: 'clubs',
    value: 'A',
  },
  {
    suit: 'spades',
    value: 2,
  },
  {
    suit: 'spades',
    value: 3,
  },
  {
    suit: 'spades',
    value: 4,
  },
  {
    suit: 'spades',
    value: 5,
  },
  {
    suit: 'spades',
    value: 6,
  },
  {
    suit: 'spades',
    value: 7,
  },
  {
    suit: 'spades',
    value: 8,
  },
  {
    suit: 'spades',
    value: 9,
  },
  {
    suit: 'spades',
    value: 10,
  },
  {
    suit: 'spades',
    value: 'J',
  },
  {
    suit: 'spades',
    value: 'Q',
  },
  {
    suit: 'spades',
    value: 'K',
  },
  {
    suit: 'spades',
    value: 'A',
  },
];

describe('UserService', () => {
  let userService: UserService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule, MongooseModule.forRoot('mongodb://localhost:27017/test'),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
      providers: [UserService],
    }).compile();
    userService = await moduleRef.resolve<UserService>(
      UserService,
    );
  });

  it('should count the decks and return 2', async () => {
    jest.setTimeout(5000);
    const dto: DeckDto = {
      decks,
    };
    const output = await userService.countDecks(dto);
    expect(output).toEqual(2);
  });

  it('should count the decks and return 0', async () => {
    jest.setTimeout(5000);
    const dto: DeckDto = {
      decks: decks.splice(0, 2),
    };
    const output = await userService.countDecks(dto);
    expect(output).toEqual(0);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
