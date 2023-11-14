"use client";

import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const AuthCheck = ({}: Props) => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				{session.user?.name}
				<br />
				<button onClick={() => signOut()}>signout</button>
			</>
		);
	} else {
		return (
			<>
				not signed in <br />
				<button onClick={() => signIn()}>login with github</button>
			</>
		);
	}
};

export default AuthCheck;
