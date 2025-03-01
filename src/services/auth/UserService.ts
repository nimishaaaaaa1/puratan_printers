import bcrypt from 'bcrypt';
import { UserRepository } from './UserRepository';
import { ValidationError } from '../../utils/errors/ValidationError';
import { validateEmail, validatePassword } from '../../utils/validators';

interface UserRegistrationData {
  email: string;
  password: string;
  name: string;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  role: string;
}

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository?: UserRepository) {
    this.userRepository = userRepository || new UserRepository();
  }

  async register(userData: UserRegistrationData): Promise<UserData> {
    // Validate input
    this.validateUserData(userData);

    // Check if user already exists
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new ValidationError('Email already registered');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(userData.password, 10);

    // Create user
    const user = await this.userRepository.create({
      email: userData.email,
      name: userData.name,
      passwordHash
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    };
  }

  private validateUserData(userData: UserRegistrationData): void {
    if (!validateEmail(userData.email)) {
      throw new ValidationError('Invalid email format');
    }

    if (!validatePassword(userData.password)) {
      throw new ValidationError('Password must be at least 8 characters and include uppercase, lowercase, number and special character');
    }

    if (!userData.name || userData.name.trim().length < 2) {
      throw new ValidationError('Name must be at least 2 characters');
    }
  }
} 