import { auth } from "@/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
 export const config = { api: { bodyParser: false } }

export const { POST, GET } = toNextJsHandler(auth.handler);