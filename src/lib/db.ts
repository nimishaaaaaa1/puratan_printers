// This is a simple in-memory database for development
// Replace with a real database in production

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
};

class InMemoryDB {
  private users: User[] = [
    // Add a test user for development
    {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'user',
      createdAt: new Date()
    }
  ];

  user = {
    findUnique: async ({ where }: { where: { email: string } }) => {
      return this.users.find(user => user.email === where.email) || null;
    },
    
    create: async ({ data }: { data: Omit<User, 'id'> & { id?: string } }) => {
      const newUser = {
        id: data.id || Math.random().toString(36).substring(2, 15),
        ...data,
        createdAt: data.createdAt || new Date()
      };
      
      this.users.push(newUser);
      return newUser;
    }
  };
}

export const db = new InMemoryDB(); 