"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { trpc } from "./client";
import { httpBatchLink } from "@trpc/client";

const url =
	process.env.NODE_ENV === "production"
		? "your-production-url/api/trpc"
		: "http://localhost:3000/api/trpc";

export const Provider = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => new QueryClient({}));

	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [httpBatchLink({ url })],
		})
	);

	return (
		<trpc.Provider
			client={trpcClient}
			queryClient={queryClient}
		>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
};
