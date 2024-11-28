import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      role: 'ADMIN' | 'USER';
    };
  }

  interface User {
    id: string;
    email: string;
    password:string;
    name?: string;
    role: 'ADMIN' | 'USER';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: 'ADMIN' | 'USER';
  }
}