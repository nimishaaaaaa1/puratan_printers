import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./lib/user";

// Extend the built-in types
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
    }
  }
  
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}

// Use a more Edge-compatible approach
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing credentials');
          return null;
        }

        const user = await getUserByEmail(credentials.email);
        
        if (!user) {
          console.log(`User not found for email: ${credentials.email}`);
          return null;
        }

        console.log('Found user:', { email: user.email, id: user.id });

        // For Edge compatibility, we'll use a simpler password check
        // In production, use a proper password comparison library
        const isPasswordValid = user.password === credentials.password;

        if (!isPasswordValid) {
          console.log('Invalid password');
          return null;
        }

        console.log('Authentication successful');
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        // Only set role if it exists on the user object
        if ('role' in user) {
          token.role = user.role;
        }
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.id;
        // Only set role if it exists on the token
        if ('role' in token) {
          session.user.role = token.role;
        }
      }
      return session;
    }
  }
};

// Export a session function to use in components
export async function getSession() {
  return await fetch('/api/auth/session').then(res => res.json());
}

// Export signIn and signOut functions for client components
export { signIn, signOut } from "next-auth/react"; 