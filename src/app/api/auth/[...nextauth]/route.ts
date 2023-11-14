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
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// export default NextAuth({
// 	providers: [
// 	  process.env.VERCEL_ENV === "preview"
// 		? CredentialsProvider({
// 			name: "Credentials",
// 			credentials: {
// 			  username: {
// 				label: "Username",
// 				type: "text",
// 				placeholder: "jsmith",
// 			  },
// 			  password: { label: "Password", type: "password" },
// 			},
// 			async authorize() {
// 			  return {
// 				id: 1,
// 				name: "J Smith",
// 				email: "jsmith@example.com",
// 				image: "https://i.pravatar.cc/150?u=jsmith@example.com",
// 			  }
// 			},
// 		  })
// 		: GoogleProvider({
// 			clientId: process.env.GOOGLE_ID,
// 			clientSecret: process.env.GOOGLE_SECRET,
// 		  }),
// 	],
//   })
