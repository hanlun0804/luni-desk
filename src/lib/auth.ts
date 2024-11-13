import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authenticateUser } from "@/services/auth";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Email and Password",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {

				if (credentials?.email && credentials.password) {
				 	const user = await authenticateUser(credentials.email, credentials.password);
		
				  	return user || null;
				}
		
				return null;
		
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			if (token) {
				session.userId = token.userId as string;
			}
			return session;
		},

		async jwt({ token, user }) {
			if (user) {
				token.userId = user.id;
			}
			return token;
		},
	},
	session: {
		strategy: "jwt",
	},
};