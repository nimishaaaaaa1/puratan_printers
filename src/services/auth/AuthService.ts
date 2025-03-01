import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from './UserRepository';
import { ValidationError } from '../../utils/errors/ValidationError';
import { AuthenticationError } from '../../utils/errors/AuthenticationError';
import { validateEmail } from '../../utils/validators';
import { UserData } from './UserService';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResult {
  user: UserData;
  token: string;
}

export class AuthService {
  private userRepository: UserRepository;
  private jwtSecret: string;
  private tokenExpiration: string;

  constructor(userRepository?: UserRepository) {
    this.userRepository = userRepository || new UserRepository();
    this.jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
    this.tokenExpiration = process.env.TOKEN_EXPIRATION || '1h';
  }

  async login(loginData: LoginData): Promise<LoginResult> {
    // Validate email format
    if (!validateEmail(loginData.email)) {
      throw new ValidationError('Invalid email format');
    }

    // Find user by email
    const user = await this.userRepository.findByEmail(loginData.email);
    if (!user) {
      throw new AuthenticationError('Invalid email or password');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(loginData.password, user.passwordHash);
    if (!isPasswordValid) {
      throw new AuthenticationError('Invalid email or password');
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email,
        role: user.role
      },
      this.jwtSecret,
      { expiresIn: this.tokenExpiration }
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    };
  }
} 