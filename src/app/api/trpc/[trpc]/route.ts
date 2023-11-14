/**
 * The above function is a TypeScript code snippet that exports a handler function for handling GET and
 * POST requests using the trpc library.
 * @param {Request} req - The `req` parameter is the incoming HTTP request object. It contains
 * information about the request such as the request method, headers, and body. In this code snippet,
 * it is used to pass the request object to the `fetchRequestHandler` function.
 */
import { appRouters } from "@/server";

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouters,
		createContext: () => ({}),
	});

export { handler as GET, handler as POST };
