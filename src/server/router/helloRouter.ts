import { publicProcedure, router } from "../trpc";

export const helloRouter = router({
	getHello: publicProcedure.query(() => "Hello World!"),
});

export type HelloRouter = typeof helloRouter;
