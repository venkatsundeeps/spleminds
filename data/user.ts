import { db } from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email: email } });

    return user;
  } catch {
    return null;
  }
};

// export const getUserByMobile = async (mobile: string) => {
//   try {
//     const user = await db.user.findUnique({ where: { mobile: mobile } });

//     return user;
//   } catch {
//     return null;
//   }
// };

export const getUserById = async (id: any) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};
