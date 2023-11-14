"use client";
import { SessionProvider } from "next-auth/react";

/** we can't use it directly in Layout since it is not a server component
 *
 * This is like a server-parent client-child model.
 */
export { SessionProvider };
