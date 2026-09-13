import { JWT, decode, encode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getNextAuthToken() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get(process.env.NEXTAUTH_SESSION_COOKIE!)?.value;

  try {
    const jwt = await decode({
      token,
      secret: process.env.NEXTAUTH_SECRET!,
    })

    return jwt
  } catch (error) {
    void error;

    return null;
  }
}

export async function setNextAuthToken(token: JWT) {

  const cookiesStore = await cookies();

  const encodedToken = await encode({
    secret: process.env.NEXTAUTH_SECRET!,
    token,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    salt: process.env.NEXTAUTH_SALT! || '8',
  })


  cookiesStore.set(process.env.NEXTAUTH_SESSION_COOKIE!, encodedToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    path: '/',
  })
}