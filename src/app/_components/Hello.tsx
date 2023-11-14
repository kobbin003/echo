"use client";

import { trpc } from "../_trpc/client";

const Hello = () => {
	const { data } = trpc.getHello.useQuery();
	console.log(data);
	return <div>{data}</div>;
};

export default Hello;
