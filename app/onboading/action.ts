'use server';

import { db } from '@/app/actions/lib';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { authGuard } from '@/app/actions/auth';

const UserSchema = z.object({
  name: z.string().max(240),
});

export const createUser = async (validatedData: FormData) => {
  'use server';

  const id = authGuard();
  const validatedData = UserSchema.parse({
    name: formData.get('name'),
  });

  const data: Prisma.UserUncheckedCreateInput = {
    name: validatedData.name,
    id,
  };

  // DBにユーザーを作成
  await db.user.create({
    data,
  });

  // Clerkのユーザーメタデータにオンボーディング完了ステータスをセット
  await clerkClient.users.updateUserMetadata(id, {
    publicMetadata: {
      onboarded: true,
    },
  });

  // キャッシュをクリア
  revalidatePath('/');

  // トップページへリダイレクト
  redirect('/');
};