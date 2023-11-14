import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
		// ...add more providers here
	],
	secret: process.env.NEXTAUTH_SECRET,
};

// export default NextAuth(authOptions);
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
