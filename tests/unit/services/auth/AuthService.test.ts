import { AuthService } from '../../../../src/services/auth/AuthService';
import { UserRepository } from '../../../../src/services/auth/UserRepository';
import { ValidationError } from '../../../../src/utils/errors/ValidationError';
import { AuthenticationError } from '../../../../src/utils/errors/AuthenticationError';
import bcrypt from 'bcrypt';

// Mock the UserRepository
jest.mock('../../../../src/services/auth/UserRepository');
// Mock bcrypt
jest.mock('bcrypt');

describe('AuthService - Login', () => {
  let authService: AuthService;
  let mockUserRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    // Clear all mocks
    jest.clearAllMocks();
    
    // Setup mock implementation
    mockUserRepository = new UserRepository() as jest.Mocked<UserRepository>;
    authService = new AuthService(mockUserRepository);
  });

  it('should authenticate user with valid credentials', async () => {
    // Arrange
    const loginData = {
      email: 'test@puratanprinters.com',
      password: 'SecurePass123!'
    };
    
    const mockUser = {
      id: 'user-123',
      email: loginData.email,
      name: 'Test User',
      passwordHash: 'hashed-password',
      role: 'customer'
    };
    
    // Mock repository to return user
    mockUserRepository.findByEmail.mockResolvedValue(mockUser);
    
    // Mock bcrypt to return true for password comparison
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    
    // Act
    const result = await authService.login(loginData);
    
    // Assert
    expect(result).toBeDefined();
    expect(result.user).toBeDefined();
    expect(result.user.id).toBe(mockUser.id);
    expect(result.user.email).toBe(mockUser.email);
    expect(result.token).toBeDefined();
    expect(mockUserRepository.findByEmail).toHaveBeenCalledWith(loginData.email);
    expect(bcrypt.compare).toHaveBeenCalledWith(loginData.password, mockUser.passwordHash);
  });

  it('should throw ValidationError for invalid email format', async () => {
    // Arrange
    const loginData = {
      email: 'invalid-email',
      password: 'SecurePass123!'
    };
    
    // Act & Assert
    await expect(authService.login(loginData))
      .rejects
      .toThrow(ValidationError);
    
    expect(mockUserRepository.findByEmail).not.toHaveBeenCalled();
  });

  it('should throw AuthenticationError for non-existent user', async () => {
    // Arrange
    const loginData = {
      email: 'nonexistent@puratanprinters.com',
      password: 'SecurePass123!'
    };
    
    // Mock repository to return null (user not found)
    mockUserRepository.findByEmail.mockResolvedValue(null);
    
    // Act & Assert
    await expect(authService.login(loginData))
      .rejects
      .toThrow(AuthenticationError);
  });

  it('should throw AuthenticationError for incorrect password', async () => {
    // Arrange
    const loginData = {
      email: 'test@puratanprinters.com',
      password: 'WrongPassword123!'
    };
    
    const mockUser = {
      id: 'user-123',
      email: loginData.email,
      name: 'Test User',
      passwordHash: 'hashed-password',
      role: 'customer'
    };
    
    // Mock repository to return user
    mockUserRepository.findByEmail.mockResolvedValue(mockUser);
    
    // Mock bcrypt to return false for password comparison
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);
    
    // Act & Assert
    await expect(authService.login(loginData))
      .rejects
      .toThrow(AuthenticationError);
  });
}); 