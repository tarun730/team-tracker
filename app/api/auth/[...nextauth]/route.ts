// lib/auth.ts
import { prisma } from '@/lib/prisma';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // Hash comparison using bcrypt if passwords are hashed
        if (!user || user.password !== credentials.password) {
          return null; // invalid credentials
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Prevent redirect loop and ensure a valid destination
      // if (url && new URL(url, baseUrl).origin === baseUrl) {
      //   return url; // safe redirect to the requested URL
      // }
      return `${baseUrl}/dashboard`; // fallback to dashboard if the URL is invalid
    }
    
  },
  pages: {
    signIn: '/auth/signin', // custom sign-in page path
  },
  session: {
    strategy: 'jwt', // JWT session
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
