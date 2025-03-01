import { UserService } from '../../../../src/services/auth/UserService';
import { ValidationError } from '../../../../src/utils/errors/ValidationError';

// Mock the UserRepository
jest.mock('../../../../src/services/auth/UserRepository', () => {
  return {
    UserRepository: jest.fn().mockImplementation(() => {
      return {
        findByEmail: jest.fn().mockResolvedValue(null),
        create: jest.fn().mockImplementation((user) => Promise.resolve({
          ...user,
          id: 'mock-user-id'
        }))
      };
    })
  };
});

describe('UserService - Registration', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('should register a new user with valid details', async () => {
    // Arrange
    const userData = {
      email: 'test@puratanprinters.com',
      password: 'SecurePass123!',
      name: 'Test User'
    };

    // Act
    const result = await userService.register(userData);

    // Assert
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    expect(result.email).toBe(userData.email.toLowerCase());
    expect(result.name).toBe(userData.name);
    // Password should be hashed
    expect(result.passwordHash).toBeDefined();
    expect(result.passwordHash).not.toBe(userData.password);
  });

  it('should throw ValidationError for invalid email', async () => {
    // Arrange
    const userData = {
      email: 'invalid-email',
      password: 'SecurePass123!',
      name: 'Test User'
    };

    // Act & Assert
    await expect(userService.register(userData))
      .rejects
      .toThrow(ValidationError);
  });

  it('should throw ValidationError for weak password', async () => {
    // Arrange
    const userData = {
      email: 'test@puratanprinters.com',
      password: 'weak',
      name: 'Test User'
    };

    // Act & Assert
    await expect(userService.register(userData))
      .rejects
      .toThrow(ValidationError);
  });
}); 