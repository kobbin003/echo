/* The code is importing the `AppRouters` type from the `@/server` module and the `createTRPCReact`
function from the `@trpc/react-query` module. */
import { AppRouters } from "@/server";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouters>({});
