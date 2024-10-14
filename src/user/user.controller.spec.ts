import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Logger } from './logger.provider';
import { User } from './user.model';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, Logger],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  // it('should be defined', () => {
  //   expect(userController).toBeDefined();
  // });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result: User [] = [
        { id: 1, name: 'John DoeXX', email: 'john.doe@example.com', createdAt: new Date()},
        { id: 2, name: 'Jane DoeXX', email: 'jane.doe@example.com', createdAt: new Date() },
      ];

      jest.spyOn(userService, 'findAll').mockImplementation(() => result);

      expect(userController.findAll().length).toBe(result.length);
    });
  });
});
