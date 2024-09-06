import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";

console.log("KINDE_ISSUER_URL:", process.env.KINDE_ISSUER_URL);

export const GET = handleAuth();