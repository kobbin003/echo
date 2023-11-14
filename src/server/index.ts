import { helloRouter } from "./router/helloRouter";
import { mergedRouter } from "./trpc";

/** can adjust multiple routes */
export const appRouters = mergedRouter(helloRouter);

export type AppRouters = typeof appRouters;
