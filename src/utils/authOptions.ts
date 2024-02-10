import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "donation",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();
          console.log(data);
          if (res.ok && data) {
            return data
          }
        } catch (err:any) {
          throw new Error(err.message);
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }: { token: object; user: any }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      console.log(token)
      console.log(user)
      return {
        ...token,
        ...user
      };
    },
    async session({ session, token }: { session: any; token: any }) {
     console.log(session)
     console.log(token)
      return {
        ...session,
        ...token
      };
    }
  },
  secret: process.env.NEXTAUTH_SECRET
};
