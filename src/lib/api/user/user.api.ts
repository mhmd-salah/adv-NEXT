'use server';

// import 'server-only';

import { IUpdateProfileFields, IUpdateProfileResponse } from "@/lib/types/auth";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";
import { getToken } from "next-auth/jwt";
import { getNextAuthToken } from "@/lib/utils/auth.util";

export async function updateProfileAction(fields: IUpdateProfileFields) {
  const jwt = await getNextAuthToken();
  const token = jwt?.token;

  const response = await fetch('https://exam-app.elevate-bootcamp.cloud/api/users/profile', {
    method: 'PATCH',
    body: JSON.stringify(fields),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const payload: IApiResponse<IUpdateProfileResponse> = await response.json();

  if (payload.status !== true) {
    throw new Error(payload.message);
  }

  // revalidatePath('/')
  // revalidateTag('posts', 'max')
  updateTag('posts')

  return payload;
}