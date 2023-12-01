import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
	const session = await getServerSession();
	if (!session || !session.user) {
		redirect("/api/auth/signin");
	} else {
		return (
			<div>
				<p>This is a protected route</p>
				<p>you will only see if you are authenticated</p>
			</div>
		);
	}
}
