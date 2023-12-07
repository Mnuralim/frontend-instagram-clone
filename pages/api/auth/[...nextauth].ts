import { getUserByEmail, loginCredentials, loginOauth } from "@/utils/fetch";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const response = await loginCredentials({
          credential: {
            email,
            password,
          },
        });
        if (response?.ok) {
          const data = await response.json();
          return data.data;
        } else {
          const data = await response?.json();
          throw new Error(data.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.type === "oauth") {
        const response = await loginOauth({
          credential: {
            email: token.email as string,
            imageProfile: token.picture as string,
            fullName: token.name as string,
          },
        });
        const data = await response?.json();
        const accessToken = data.data.accessToken;
        token.accessToken = accessToken;
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const response = await getUserByEmail(session.user.email as string);
      const data = await response?.json();
      const sessionUser = data.data.user;

      session.user.token = token?.accessToken as string;
      session.user.email = sessionUser?.email;
      session.user._id = sessionUser?._id;
      session.user.image = sessionUser?.profile?.imageProfile;
      session.user.username = sessionUser?.username;
      session.user.name = sessionUser?.profile?.fullName;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(nextAuthOptions);
