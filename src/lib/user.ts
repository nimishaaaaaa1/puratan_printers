import { db } from './db'; // Import your database connection

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await db.user.findUnique({
      where: { email }
    });
    return user;
  } catch (error) {
    console.error('Error getting user by email:', error);
    return null;
  }
}

export async function createUser(userData: {
  name: string;
  email: string;
  password: string;
  role: string;
}): Promise<User> {
  try {
    const user = await db.user.create({
      data: {
        ...userData,
        createdAt: new Date()
      }
    });
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
} 