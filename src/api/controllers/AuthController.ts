import { Request, Response } from 'express';
import { UserService } from '../../services/auth/UserService';
import { AuthService } from '../../services/auth/AuthService';
import { ValidationError } from '../../utils/errors/ValidationError';
import { AuthenticationError } from '../../utils/errors/AuthenticationError';

export class AuthController {
  private userService: UserService;
  private authService: AuthService;

  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, name } = req.body;
      
      const user = await this.userService.register({ email, password, name });
      
      res.status(201).json({
        success: true,
        data: {
          user
        }
      });
    } catch (error: any) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          success: false,
          error: error.message
        });
      } else {
        console.error('Registration error:', error);
        res.status(500).json({
          success: false,
          error: 'An unexpected error occurred'
        });
      }
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      
      const result = await this.authService.login({ email, password });
      
      res.status(200).json({
        success: true,
        data: {
          user: result.user,
          token: result.token
        }
      });
    } catch (error: any) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          success: false,
          error: error.message
        });
      } else if (error instanceof AuthenticationError) {
        res.status(401).json({
          success: false,
          error: error.message
        });
      } else {
        console.error('Login error:', error);
        res.status(500).json({
          success: false,
          error: 'An unexpected error occurred'
        });
      }
    }
  }
} 