import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../src/user/user.service';
import { User, UserSchema } from '../src/user/models/user.model';
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
describe('UserController (e2e)', () => {
  let app: INestApplication;
  let userService: UserService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
      providers: [UserService],
    }).compile();

    app = await moduleFixture.createNestApplication();
    await app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
    userService = await moduleFixture.resolve<UserService>(UserService);
  });

  it('/ should return 201', async () => {
    const response = await request(app.getHttpServer())
      .post('/user')
      .send({
        name: 'Andy',
        email: 'andyg9413@gmail.com',
        lastName: 'Glez',
        age: 24,
      })
      .expect(201);
    expect(response.body).toHaveProperty('name', 'Andy');
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('email', 'andyg9413@gmail.com');
    expect(response.body).toHaveProperty('lastName', 'Glez');
    expect(response.body).toHaveProperty('age', 24);
  });

  it('/ should throw 400 email is not an email', async () => {
    const response = await request(app.getHttpServer())
      .post('/user')
      .send({ name: 'Andy', email: 'andyg9413', lastName: 'Glez', age: 24 })
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', ['email must be an email']);
  });

  it('/ should throw 400 email is empty', async () => {
    const response = await request(app.getHttpServer())
      .post('/user')
      .send({ name: 'Andy', lastName: 'Glez', age: 24 })
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', [
      'email should not be empty',
      'email must be an email',
    ]);
  });

  it('/ should throw 400 name is not string', async () => {
    const response = await request(app.getHttpServer())
      .post('/user')
      .send({
        name: 24,
        email: 'andyg9413@gmail.com',
        lastName: 'Glez',
        age: 24,
      })
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', ['name must be a string']);
  });

  it('/ should throw 400 name is empty', async () => {
    const response = await request(app.getHttpServer())
      .post('/user')
      .send({ email: 'andyg9413@gmail.com', lastName: 'Glez', age: 24 })
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', [
      'name should not be empty',
      'name must be a string',
    ]);
  });

  it('/ should throw 400 lastName is not a string', async () => {
    const response = await request(app.getHttpServer())
      .post('/user')
      .send({
        name: 'Andy',
        email: 'andyg9413@gmail.com',
        lastName: 24,
        age: 24,
      })
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', [
      'lastName must be a string',
    ]);
  });

  it('/ should throw 400 age is not a number', async () => {
    const response = await request(app.getHttpServer())
      .post('/user')
      .send({
        name: 'Andy',
        email: 'andyg9413@gmail.com',
        lastName: 'Glez',
        age: '24',
      })
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', [
      'age must be a number conforming to the specified constraints',
    ]);
  });

  it('/ should throw 400 linkedIn is not a string', async () => {
    const response = await request(app.getHttpServer())
      .post('/user')
      .send({
        name: 'Andy',
        email: 'andyg9413@gmail.com',
        lastName: 'Glez',
        age: 24,
        linkedIn: 24,
      })
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', [
      'linkedIn must be a string',
    ]);
  });

  it('/ should return 200', async () => {
    const response = await request(app.getHttpServer())
      .get('/user')
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('/ should return 200', async () => {
    const users = await userService.findAll();
    const response = await request(app.getHttpServer())
      .get(`/user/${users[0]._id}`)
      .expect(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('_id');
  });

  it('/ should throw 400 invalid id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/user/123`)
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', 'Invalid Id');
  });

  it('/ should return 201', async () => {
    const users = await userService.findAll();
    const response = await request(app.getHttpServer())
      .put(`/user/${users[0]._id}`)
      .send({ name: 'John', email: 'john@gmail.com' })
      .expect(200);
    expect(response.body).toHaveProperty('name', 'John');
    expect(response.body).toHaveProperty('email', 'john@gmail.com');
  });

  it('/ should throw 400 invalid id', async () => {
    const response = await request(app.getHttpServer())
      .put(`/user/123`)
      .send({ name: 'John', email: 'john@gmail.com' })
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', 'Invalid Id');
  });

  it('/ should throw 400 invalid id', async () => {
    const response = await request(app.getHttpServer())
      .delete('/user/123')
      .expect(400);
    expect(response.body).toHaveProperty('error', 'Bad Request');
    expect(response.body).toHaveProperty('message', 'Invalid Id');
  });

  it('/ should return 200', async () => {
    const users = await userService.findAll();
    const response = await request(app.getHttpServer())
      .delete(`/user/${users[0]._id}`)
      .expect(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('_id');
  });

  it('/ should return 201', async () => {
    const response = await request(app.getHttpServer())
      .post(`/user/count`)
      .send({decks})
      .expect(201);
    expect(response.text).toEqual("2");
  });

  it('/ should throw 400 decks is not an array', async () => {
    const response = await request(app.getHttpServer())
      .post(`/user/count`)
      .send({decks: "adas"})
      .expect(400);
    expect(response.body).toHaveProperty("error", "Bad Request");
    expect(response.body).toHaveProperty("message", ["decks must be an array"]);
  });

  it('/ should throw 400 decks is empty', async () => {
    const response = await request(app.getHttpServer())
      .post(`/user/count`)
      .expect(400);
    expect(response.body).toHaveProperty("error", "Bad Request");
    expect(response.body).toHaveProperty("message", ["decks should not be empty", "decks must be an array"]);
  });


  it('/ should return 201', async () => {
    const dto = decks.splice(0, 55);
    const response = await request(app.getHttpServer())
      .post(`/user/count`)
      .send({decks: dto})
      .expect(201);
    expect(response.text).toEqual("0");
  });

  it('/ should return 201', async () => {
    const dto = decks.splice(0, 5);
    const response = await request(app.getHttpServer())
      .post(`/user/count`)
      .send({decks: ["a", "b"]})
      .expect(201);
    expect(response.text).toEqual("0");
  });


  afterAll(async () => {
    await app.close();
  });
});
