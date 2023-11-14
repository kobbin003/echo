import { initTRPC } from "@trpc/server";
/* `const t = initTRPC.create();` is creating an instance of the TRPC server. The `initTRPC.create()`
function initializes a new TRPC server instance and returns it. The returned instance, `t`, can be
used to define routers, procedures, and merge routers. */
const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;
export const mergedRouter = t.mergeRouters;
