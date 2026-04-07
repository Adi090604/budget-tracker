import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockService = {
    register: jest.fn(),
    login: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have register method', () => {
    expect(typeof controller.register).toBe('function');
  });

  it('should have login method', () => {
    expect(typeof controller.login).toBe('function');
  });

  it('should have getUser method', () => {
    expect(typeof controller.getUser).toBe('function');
  });

  it('should have updateUser method', () => {
    expect(typeof controller.updateUser).toBe('function');
  });
});
