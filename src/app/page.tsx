// import { serverClient } from "./_trpc/serverClient";

import AuthCheck from "./_components/AuthCheck";

import Hello from "./_components/Hello";

export default async function page() {
	return (
		<main>
			<Hello />
			<AuthCheck />
		</main>
	);
}
